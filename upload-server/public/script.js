// DOM elements
const uploadForm = document.getElementById('uploadForm');
const zipFileInput = document.getElementById('zipfile');
const fileNameDisplay = document.getElementById('fileName');
const trimesterSelect = document.getElementById('trimester');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');
const statusArea = document.getElementById('statusArea');
const progressBar = document.getElementById('progressBar');
const statusMessage = document.getElementById('statusMessage');

// Load available trimester paths on page load
async function loadTrimesterPaths() {
    try {
        const response = await fetch('/api/paths');
        if (!response.ok) {
            throw new Error('Failed to load trimester paths');
        }

        const paths = await response.json();

        // Clear loading option
        trimesterSelect.innerHTML = '';

        if (paths.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No trimester paths found';
            trimesterSelect.appendChild(option);
        } else {
            // Add placeholder
            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.textContent = 'Select a trimester...';
            trimesterSelect.appendChild(placeholder);

            // Add each path
            paths.forEach(path => {
                const option = document.createElement('option');
                option.value = path;
                option.textContent = formatTrimesterName(path);
                trimesterSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error loading trimester paths:', error);
        trimesterSelect.innerHTML = '<option value="">Error loading paths</option>';
        showStatus('error', 'Failed to load trimester paths. Please refresh the page.');
    }
}

// Format trimester path for display
function formatTrimesterName(path) {
    // Convert "games/2025-2026/t1" to "2025-2026 - Trimester 1"
    const parts = path.split('/');
    if (parts.length >= 3) {
        const year = parts[1];
        const trimester = parts[2].replace('t', 'Trimester ');
        return `${year} - ${trimester}`;
    }
    return path;
}

// Update file name display when file is selected
zipFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        fileNameDisplay.textContent = file.name;
        fileNameDisplay.style.color = '#0033A0';
        fileNameDisplay.style.fontWeight = '500';
    } else {
        fileNameDisplay.textContent = 'No file selected';
        fileNameDisplay.style.color = '#666';
        fileNameDisplay.style.fontWeight = 'normal';
    }
});

// Handle form submission
uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate form
    if (!zipFileInput.files[0]) {
        showStatus('error', 'Please select a zip file to upload.');
        return;
    }

    if (!trimesterSelect.value) {
        showStatus('error', 'Please select a trimester.');
        return;
    }

    // Disable form during upload
    setFormEnabled(false);
    showStatus('info', 'Uploading and processing your game...');
    showProgressBar(true);

    try {
        // Create FormData with all form fields
        const formData = new FormData();
        formData.append('zipfile', zipFileInput.files[0]);
        formData.append('trimester', trimesterSelect.value);
        formData.append('title', document.getElementById('title').value.trim());
        formData.append('description', document.getElementById('description').value.trim());
        formData.append('author', document.getElementById('author').value.trim());
        formData.append('players', document.getElementById('players').value.trim() || '1');

        // Send upload request
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            // Success
            showProgressBar(false);
            showStatus('success',
                `Success! "${result.game.title}" has been added to ${formatTrimesterName(result.game.trimester)}.\n\n` +
                `Game folder: ${result.game.folder}\n` +
                `Thumbnail: ${result.game.thumbnail || 'None (will use default)'}\n\n` +
                `A git commit has been created. The teacher can now review and push the changes.`
            );

            // Reset form
            uploadForm.reset();
            fileNameDisplay.textContent = 'No file selected';
            fileNameDisplay.style.color = '#666';
            fileNameDisplay.style.fontWeight = 'normal';
        } else {
            // Error from server
            showProgressBar(false);
            showStatus('error', result.error || 'An error occurred during upload.');
        }
    } catch (error) {
        console.error('Upload error:', error);
        showProgressBar(false);
        showStatus('error', 'Failed to upload game. Please check your connection and try again.');
    } finally {
        setFormEnabled(true);
    }
});

// Show/hide progress bar
function showProgressBar(show) {
    progressBar.style.display = show ? 'block' : 'none';
}

// Show status message
function showStatus(type, message) {
    statusArea.style.display = 'block';
    statusMessage.className = `status-message ${type}`;
    statusMessage.textContent = message;

    // Scroll to status message
    statusMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Enable/disable form
function setFormEnabled(enabled) {
    submitBtn.disabled = !enabled;
    zipFileInput.disabled = !enabled;
    trimesterSelect.disabled = !enabled;
    document.getElementById('title').disabled = !enabled;
    document.getElementById('description').disabled = !enabled;
    document.getElementById('author').disabled = !enabled;
    document.getElementById('players').disabled = !enabled;

    if (enabled) {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    } else {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTrimesterPaths();
});
