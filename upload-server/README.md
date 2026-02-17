# SeeSeePortal Game Uploader

A web-based tool for students to submit their Code.org Game Lab games to the SeeSeePortal website. This tool automates the process of extracting game files, updating the games array, and creating git commits.

## Features

- **Simple Upload Interface** - Students can upload their exported game zip files
- **Automatic File Organization** - Game files are extracted and organized in the correct folder structure
- **Metadata Form** - Students provide game title, description, author, and number of players
- **Auto-Thumbnail Detection** - Automatically finds and uses game thumbnail images
- **Index.html Updates** - Automatically updates the games array in index.html
- **Git Integration** - Creates a git commit for each uploaded game
- **Student-Friendly** - Clear instructions and error messages

## Prerequisites

Before using this tool, you need:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **Git** - Should already be installed on the system
- **SeeSeePortal Repository** - Cloned to your local machine

## Installation

1. **Check if Node.js is installed:**
   ```bash
   node --version
   ```
   If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org/)

2. **Navigate to the upload-server directory:**
   ```bash
   cd /c/Development/seeseeportal/upload-server
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Verify installation:**
   ```bash
   npm list
   ```

## Usage

### Starting the Server

1. **Navigate to the upload-server directory:**
   ```bash
   cd /c/Development/seeseeportal/upload-server
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

### Student Workflow

1. **Export Game from Code.org:**
   - Open your game in Code.org Game Lab
   - Click the **Share** button
   - Click **Show advanced options**
   - Click **Export**
   - Click **Download** to get the zip file

2. **Open the Upload Page:**
   - Go to `http://localhost:3000` in your browser

3. **Upload Your Game:**
   - Click **Choose File** and select the downloaded zip file
   - Select the **Trimester** from the dropdown
   - Enter your **Game Title**
   - Enter a **Description** of your game
   - Enter your **Name** as the author
   - (Optional) Enter number of **Players**

4. **Submit:**
   - Click **Upload Game**
   - Wait for processing (usually 5-15 seconds)
   - You'll see a success message when complete

### Teacher Workflow

After a student uploads a game:

1. **Review the Changes:**
   ```bash
   cd /c/Development/seeseeportal
   git status
   git log -1
   git diff HEAD~1
   ```

2. **Test the Game:**
   - Open `index.html` in a browser
   - Navigate to the appropriate trimester
   - Click on the new game tile
   - Verify the game loads and works correctly

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

## Directory Structure

```
upload-server/
├── lib/
│   ├── game-processor.js    # Processes zip files and organizes game files
│   └── index-updater.js     # Updates the games array in index.html
├── public/
│   ├── index.html           # Upload interface
│   ├── styles.css           # Styling
│   └── script.js            # Client-side JavaScript
├── temp/                    # Temporary files (auto-created)
├── package.json             # Node.js dependencies
├── server.js                # Express server
└── README.md                # This file
```

## How It Works

1. **Student uploads zip file** via the web interface
2. **Server validates** the zip file and metadata
3. **Game processor extracts** the zip to a temporary directory
4. **Files are validated** to ensure required game files are present
5. **Folder name is sanitized** from the game title
6. **Files are copied** to the correct location in `games/{year}/{trimester}/{game-name}/`
7. **Thumbnail is detected** from the assets folder
8. **Index updater** adds a new entry to the games array in `index.html`
9. **Git commit** is created with a descriptive message
10. **Success response** is sent back to the student

## Error Handling

The tool handles various error scenarios:

- **Invalid zip file** - Not a valid zip or corrupted
- **Missing required files** - No code.js or game-index.html found
- **Duplicate game name** - A game with the same name already exists
- **Invalid metadata** - Missing or too long title/description
- **File size too large** - Exceeds 50MB limit
- **Invalid trimester path** - Selected trimester doesn't exist

## Troubleshooting

### Server won't start

**Problem:** `npm start` gives an error

**Solution:**
- Make sure Node.js is installed: `node --version`
- Try reinstalling dependencies: `npm install`
- Check if port 3000 is already in use

### Upload fails

**Problem:** Upload gets stuck or shows an error

**Solution:**
- Check that the zip file is a valid Code.org export
- Ensure the zip file is under 50MB
- Verify all required fields are filled in
- Check server logs in the terminal for details

### Game doesn't appear on site

**Problem:** Upload succeeds but game doesn't show

**Solution:**
- Check that index.html was updated: `git diff index.html`
- Verify the game files are in the correct folder
- Make sure you selected the right trimester
- Try refreshing the page (Ctrl+Shift+R)

### Git commit fails

**Problem:** Files are uploaded but no commit is created

**Solution:**
- Check git status: `git status`
- Make sure you're in a git repository
- Verify git is configured: `git config --list`
- Commit manually if needed: `git add . && git commit -m "Add game"`

## Security Considerations

- **Local only** - Server runs on localhost, not accessible from other machines
- **File size limits** - Uploads are limited to 50MB
- **File type validation** - Only .zip files are accepted
- **Path sanitization** - File paths are sanitized to prevent directory traversal
- **Input validation** - Metadata is validated and escaped
- **Trimester path validation** - Ensures paths are within the games directory

## Maintenance

### Cleaning up temp files

Temp files are automatically cleaned up, but you can manually remove them:

```bash
cd /c/Development/seeseeportal/upload-server
rm -rf temp/
```

### Updating dependencies

To update npm packages:

```bash
npm update
```

### Adding new trimester folders

When starting a new school year or trimester:

1. Create the directory structure:
   ```bash
   mkdir -p games/2026-2027/t1
   mkdir -p games/2026-2027/t2
   mkdir -p games/2026-2027/t3
   ```

2. The new paths will automatically appear in the trimester dropdown

## Support

For issues or questions:
- Check the troubleshooting section above
- Review the server logs in the terminal
- Check git status and recent commits
- Verify the uploaded zip file structure

## License

This tool is part of the SeeSeePortal project for Cougar Mountain Middle School.
