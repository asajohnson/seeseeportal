const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const simpleGit = require('simple-git');
const gameProcessor = require('./lib/game-processor');
const indexUpdater = require('./lib/index-updater');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize git
const git = simpleGit(path.resolve(__dirname, '..'));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'temp', 'uploads');
        await fs.ensureDir(uploadDir);
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Use timestamp to avoid filename conflicts
        const uniqueName = `upload-${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit
    },
    fileFilter: (req, file, cb) => {
        // Only accept zip files
        if (file.mimetype === 'application/zip' ||
            file.mimetype === 'application/x-zip-compressed' ||
            path.extname(file.originalname).toLowerCase() === '.zip') {
            cb(null, true);
        } else {
            cb(new Error('Only .zip files are allowed'));
        }
    }
});

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes

/**
 * GET /api/paths
 * Returns available trimester paths
 */
app.get('/api/paths', async (req, res) => {
    try {
        const paths = await indexUpdater.getAvailableTrimesterPaths();
        res.json(paths);
    } catch (error) {
        console.error('Error getting trimester paths:', error);
        res.status(500).json({ error: 'Failed to load trimester paths' });
    }
});

/**
 * POST /api/upload
 * Handle game zip file upload
 */
app.post('/api/upload', upload.single('zipfile'), async (req, res) => {
    let uploadedFilePath = null;

    try {
        // Validate upload
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        uploadedFilePath = req.file.path;

        // Validate metadata
        const { trimester, title, description, author, players } = req.body;

        if (!trimester || !title || !description || !author) {
            return res.status(400).json({
                error: 'Missing required fields: trimester, title, description, and author are required'
            });
        }

        // Validate trimester path
        if (!trimester.startsWith('games/')) {
            return res.status(400).json({
                error: 'Invalid trimester path'
            });
        }

        const metadata = {
            title: title.trim(),
            description: description.trim(),
            author: author.trim(),
            players: players ? players.trim() : '1'
        };

        // Validate metadata lengths
        if (metadata.title.length > 100) {
            return res.status(400).json({ error: 'Title is too long (max 100 characters)' });
        }
        if (metadata.description.length > 500) {
            return res.status(400).json({ error: 'Description is too long (max 500 characters)' });
        }
        if (metadata.author.length > 100) {
            return res.status(400).json({ error: 'Author name is too long (max 100 characters)' });
        }

        console.log('Processing upload:', {
            file: req.file.originalname,
            trimester: trimester,
            metadata: metadata
        });

        // Process the zip file
        const gameInfo = await gameProcessor.processZipUpload(
            uploadedFilePath,
            metadata,
            trimester
        );

        console.log('Game processed successfully:', gameInfo);

        // Update index.html
        const updatedGameInfo = await indexUpdater.updateIndexHtml(gameInfo);

        console.log('index.html updated successfully');

        // Git commit
        try {
            // Check git status first
            const status = await git.status();
            console.log('Git status:', status);

            // Add the game folder and index.html
            await git.add([gameInfo.folder, 'index.html']);

            // Create commit message
            const commitMessage = `Add ${metadata.title} to ${trimester}\n\nCo-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`;

            // Commit
            await git.commit(commitMessage);

            console.log('Git commit created successfully');
        } catch (gitError) {
            console.error('Git error:', gitError);
            // Don't fail the upload if git fails - the files are still there
            // Just log the error and continue
        }

        // Clean up uploaded file
        await fs.remove(uploadedFilePath).catch(err => {
            console.error('Error cleaning up upload file:', err);
        });

        // Return success
        res.json({
            success: true,
            message: 'Game uploaded successfully',
            game: updatedGameInfo
        });

    } catch (error) {
        console.error('Upload error:', error);

        // Clean up uploaded file on error
        if (uploadedFilePath) {
            await fs.remove(uploadedFilePath).catch(err => {
                console.error('Error cleaning up upload file:', err);
            });
        }

        // Return user-friendly error message
        let errorMessage = 'An error occurred during upload';

        if (error.message) {
            errorMessage = error.message;
        }

        res.status(500).json({
            error: errorMessage
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);

    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                error: 'File is too large. Maximum size is 50MB.'
            });
        }
        return res.status(400).json({
            error: `Upload error: ${err.message}`
        });
    }

    res.status(500).json({
        error: err.message || 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('=================================================');
    console.log('  SeeSeePortal Game Uploader Server');
    console.log('=================================================');
    console.log(`  Server running at: http://localhost:${PORT}`);
    console.log(`  Open this URL in your browser to upload games`);
    console.log('=================================================');
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
    console.log('\nShutting down server...');

    // Clean up temp directory
    const tempDir = path.join(__dirname, 'temp');
    await fs.remove(tempDir).catch(err => {
        console.error('Error cleaning up temp directory:', err);
    });

    process.exit(0);
});
