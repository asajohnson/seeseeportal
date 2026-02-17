const path = require('path');
const fs = require('fs-extra');
const extract = require('extract-zip');
const sanitizeFilename = require('sanitize-filename');

/**
 * Process uploaded zip file and extract game files
 * @param {string} zipPath - Path to uploaded zip file
 * @param {object} metadata - Game metadata (title, description, author, players)
 * @param {string} trimesterPath - Target trimester path (e.g., 'games/2025-2026/t1')
 * @returns {object} Game information for index.html
 */
async function processZipUpload(zipPath, metadata, trimesterPath) {
    const projectRoot = path.resolve(__dirname, '../..');
    const tempDir = path.join(__dirname, '../temp', `extract-${Date.now()}`);

    try {
        // 1. Extract zip to temp directory
        await fs.ensureDir(tempDir);
        await extract(zipPath, { dir: tempDir });

        // 2. Validate structure (single root folder with game files)
        const extractedContents = await fs.readdir(tempDir);

        if (extractedContents.length === 0) {
            throw new Error('The zip file is empty');
        }

        // Find the root game folder (should be a single directory)
        let gameRootPath;
        if (extractedContents.length === 1) {
            const singleItem = path.join(tempDir, extractedContents[0]);
            const stat = await fs.stat(singleItem);
            if (stat.isDirectory()) {
                gameRootPath = singleItem;
            } else {
                throw new Error('Zip file must contain a folder, not individual files at root level');
            }
        } else {
            // Multiple items at root - check if they look like game files
            const hasCodeJs = extractedContents.includes('code.js');
            const hasGameIndex = extractedContents.includes('game-index.html') || extractedContents.includes('index.html');

            if (hasCodeJs || hasGameIndex) {
                // Files are at root level, which is acceptable
                gameRootPath = tempDir;
            } else {
                throw new Error('Zip file structure is invalid. Expected a single folder containing game files.');
            }
        }

        // 3. Validate required files exist
        validateGameFiles(gameRootPath);

        // 4. Sanitize folder name from title
        const folderName = sanitizeFolderName(metadata.title);

        // 5. Create target directory path
        const targetPath = path.join(projectRoot, trimesterPath, folderName);

        // 6. Check for duplicate folder names
        if (await fs.pathExists(targetPath)) {
            throw new Error(`A game folder named "${folderName}" already exists in ${trimesterPath}. Please use a different title or delete the existing game first.`);
        }

        // 7. Copy all files to target location
        await fs.ensureDir(targetPath);
        await fs.copy(gameRootPath, targetPath);

        // 8. Auto-detect thumbnail
        const thumbnail = await detectThumbnail(targetPath, path.join(trimesterPath, folderName));

        // 9. Clean up temp directory
        await fs.remove(tempDir);

        // Return game info for index.html
        return {
            title: metadata.title,
            description: metadata.description,
            author: metadata.author,
            players: metadata.players || '1',
            folder: path.join(trimesterPath, folderName).replace(/\\/g, '/'),
            thumbnail: thumbnail,
            trimesterPath: trimesterPath
        };

    } catch (error) {
        // Clean up temp directory on error
        await fs.remove(tempDir).catch(() => {});
        throw error;
    }
}

/**
 * Sanitize title to create safe folder name
 * @param {string} title - Game title
 * @returns {string} Sanitized folder name
 */
function sanitizeFolderName(title) {
    // Convert to lowercase, replace spaces with hyphens, remove special characters
    let folderName = title.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .replace(/-+/g, '-')      // Replace multiple hyphens with single
        .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens

    // Use sanitize-filename as final safety check
    folderName = sanitizeFilename(folderName);

    // Ensure we have a valid folder name
    if (!folderName || folderName.length === 0) {
        folderName = 'game-' + Date.now();
    }

    return folderName;
}

/**
 * Validate that required game files exist
 * @param {string} gamePath - Path to game folder
 */
function validateGameFiles(gamePath) {
    const files = fs.readdirSync(gamePath);

    // Check for required files
    const hasCodeJs = files.includes('code.js');
    const hasGameIndex = files.includes('game-index.html') || files.includes('index.html');

    if (!hasCodeJs && !hasGameIndex) {
        throw new Error('Invalid game files. Expected to find code.js or game-index.html/index.html');
    }

    // It's valid if we have at least one of these files
    return true;
}

/**
 * Detect thumbnail image from assets folder
 * @param {string} gamePath - Absolute path to game folder
 * @param {string} relativeGamePath - Relative path from project root
 * @returns {string} Relative path to thumbnail or empty string
 */
async function detectThumbnail(gamePath, relativeGamePath) {
    const assetsPath = path.join(gamePath, 'assets');

    // Check if assets folder exists
    if (!await fs.pathExists(assetsPath)) {
        return '';
    }

    try {
        const files = await fs.readdir(assetsPath);

        // Look for first image file
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
        const imageFile = files.find(file => {
            const ext = path.extname(file).toLowerCase();
            return imageExtensions.includes(ext);
        });

        if (imageFile) {
            // Return relative path from project root
            return path.join(relativeGamePath, 'assets', imageFile).replace(/\\/g, '/');
        }

        return '';
    } catch (error) {
        console.error('Error detecting thumbnail:', error);
        return '';
    }
}

module.exports = {
    processZipUpload,
    sanitizeFolderName,
    validateGameFiles,
    detectThumbnail
};
