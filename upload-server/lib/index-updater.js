const path = require('path');
const fs = require('fs-extra');

/**
 * Update index.html with new game entry
 * @param {object} gameInfo - Game information
 * @returns {Promise<void>}
 */
async function updateIndexHtml(gameInfo) {
    const projectRoot = path.resolve(__dirname, '../..');
    const indexPath = path.join(projectRoot, 'index.html');

    // Read the current index.html
    let content = await fs.readFile(indexPath, 'utf8');

    // Determine trimester value based on path
    const trimesterValue = getTrimesterValue(gameInfo.trimesterPath);

    // Create the new game entry
    const gameEntry = createGameEntry({
        ...gameInfo,
        trimester: trimesterValue
    });

    // Find insertion point and insert the game entry
    content = insertGameEntry(content, gameEntry, trimesterValue);

    // Write updated content back to file
    await fs.writeFile(indexPath, content, 'utf8');

    return {
        ...gameInfo,
        trimester: trimesterValue
    };
}

/**
 * Convert trimester path to trimester value used in games array
 * @param {string} trimesterPath - e.g., "games/2025-2026/t1"
 * @returns {string} - e.g., "trimester1"
 */
function getTrimesterValue(trimesterPath) {
    const parts = trimesterPath.split('/');
    const trimesterFolder = parts[parts.length - 1]; // e.g., "t1", "t2", "t3"

    const trimesterMap = {
        't1': 'trimester1',
        't2': 'trimester2',
        't3': 'trimester3'
    };

    return trimesterMap[trimesterFolder] || 'trimester1';
}

/**
 * Create formatted game entry string
 * @param {object} gameInfo - Game information
 * @returns {string} Formatted game entry
 */
function createGameEntry(gameInfo) {
    const indent = '            '; // 12 spaces to match existing indentation

    // Build the game object
    let entry = `${indent}{\n`;
    entry += `${indent}    title: "${escapeString(gameInfo.title)}",\n`;
    entry += `${indent}    trimester: "${gameInfo.trimester}",\n`;

    if (gameInfo.thumbnail) {
        entry += `${indent}    thumbnail: "${gameInfo.thumbnail}",\n`;
    }

    entry += `${indent}    description: "${escapeString(gameInfo.description)}",\n`;

    if (gameInfo.players) {
        entry += `${indent}    players: "${escapeString(gameInfo.players)}",\n`;
    }

    entry += `${indent}    author: "${escapeString(gameInfo.author)}",\n`;
    entry += `${indent}    folder: "${gameInfo.folder}"\n`;
    entry += `${indent}}`;

    return entry;
}

/**
 * Escape special characters in strings for JavaScript
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeString(str) {
    return str
        .replace(/\\/g, '\\\\')  // Escape backslashes
        .replace(/"/g, '\\"')     // Escape double quotes
        .replace(/\n/g, '\\n')    // Escape newlines
        .replace(/\r/g, '\\r')    // Escape carriage returns
        .replace(/\t/g, '\\t');   // Escape tabs
}

/**
 * Insert game entry into content at the correct location
 * @param {string} content - Current index.html content
 * @param {string} gameEntry - Formatted game entry
 * @param {string} trimester - Trimester value (trimester1, trimester2, trimester3)
 * @returns {string} Updated content
 */
function insertGameEntry(content, gameEntry, trimester) {
    const trimesterComments = {
        'trimester1': '// Trimester 2 Games (trimester: trimester2)',
        'trimester2': '// Trimester 3 Games (trimester: trimester3)',
        'trimester3': '        ];' // For trimester3, insert before the closing array bracket
    };

    const targetComment = trimesterComments[trimester];

    if (!targetComment) {
        throw new Error(`Unknown trimester: ${trimester}`);
    }

    // Find the position of the target comment
    const targetIndex = content.indexOf(targetComment);

    if (targetIndex === -1) {
        throw new Error(`Could not find insertion point for ${trimester} in index.html`);
    }

    // For trimester1 and trimester2, insert before the comment
    // For trimester3, insert before the closing bracket
    let insertPosition;
    let prefix;
    let suffix;

    if (trimester === 'trimester3') {
        // Insert before the closing bracket
        // Find the last comma or game entry before the bracket
        insertPosition = targetIndex;

        // Add comma and newlines
        prefix = ',\n\n';
        suffix = '\n\n';
    } else {
        // Insert before the trimester comment
        insertPosition = targetIndex;

        // Look backwards to find the last game entry's closing brace
        // We want to add a comma after it if there isn't one
        const beforeTarget = content.substring(0, insertPosition);
        const lastClosingBrace = beforeTarget.lastIndexOf('}');

        if (lastClosingBrace !== -1) {
            // Check if there's already a comma after the closing brace
            const afterBrace = content.substring(lastClosingBrace + 1, insertPosition).trim();

            if (afterBrace.startsWith(',')) {
                // Already has comma, just add the entry
                prefix = '';
                suffix = ',\n\n            ';
            } else {
                // No comma, we need to add one after previous entry
                // First, add comma to previous entry
                const beforeBrace = content.substring(0, lastClosingBrace + 1);
                const afterBrace = content.substring(lastClosingBrace + 1);
                content = beforeBrace + ',' + afterBrace;

                // Adjust insert position since we added a character
                insertPosition += 1;

                prefix = '\n';
                suffix = ',\n\n            ';
            }
        } else {
            // No previous entry found, this is the first entry
            prefix = '\n';
            suffix = ',\n\n            ';
        }
    }

    // Insert the game entry
    const before = content.substring(0, insertPosition);
    const after = content.substring(insertPosition);

    return before + prefix + gameEntry + suffix + after;
}

/**
 * Get available trimester paths by scanning the games directory
 * @returns {Promise<string[]>} Array of trimester paths
 */
async function getAvailableTrimesterPaths() {
    const projectRoot = path.resolve(__dirname, '../..');
    const gamesDir = path.join(projectRoot, 'games');

    const paths = [];

    try {
        // Check if games directory exists
        if (!await fs.pathExists(gamesDir)) {
            return paths;
        }

        // Read year directories (e.g., 2025-2026)
        const years = await fs.readdir(gamesDir);

        for (const year of years) {
            const yearPath = path.join(gamesDir, year);
            const stat = await fs.stat(yearPath);

            if (stat.isDirectory()) {
                // Read trimester directories (e.g., t1, t2, t3)
                const trimesters = await fs.readdir(yearPath);

                for (const trimester of trimesters) {
                    const trimesterPath = path.join(gamesDir, year, trimester);
                    const trimesterStat = await fs.stat(trimesterPath);

                    if (trimesterStat.isDirectory()) {
                        // Add to paths array
                        paths.push(`games/${year}/${trimester}`);
                    }
                }
            }
        }

        // Sort paths (newest year/trimester first)
        paths.sort().reverse();

        return paths;
    } catch (error) {
        console.error('Error scanning trimester paths:', error);
        return paths;
    }
}

module.exports = {
    updateIndexHtml,
    createGameEntry,
    getTrimesterValue,
    getAvailableTrimesterPaths
};
