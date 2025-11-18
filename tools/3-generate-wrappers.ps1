# PowerShell script to generate index.html files for each game from JSON

# Path to your JSON file
$jsonFilePath = "C:\Development\seeseeportal\tools\2-games-list.json"

# Check if JSON file exists
if (-not (Test-Path $jsonFilePath)) {
    Write-Host "Error: JSON file not found at $jsonFilePath" -ForegroundColor Red
    Write-Host "Press any key to exit..." -ForegroundColor Gray
    Read-Host -Prompt "Press Enter to exit"
    exit
}

# Read and parse JSON
try {
    $gamesData = Get-Content -Path $jsonFilePath -Raw | ConvertFrom-Json
    Write-Host "Successfully loaded JSON with $($gamesData.Count) game(s)" -ForegroundColor Green
}
catch {
    Write-Host "Error parsing JSON file: $_" -ForegroundColor Red
    Write-Host "Press any key to exit..." -ForegroundColor Gray
    Read-Host -Prompt "Press Enter to exit"
    exit
}

# HTML Template
$htmlTemplate = @'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} - SeeSeePortal</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0033A0 0%, #999ACA 100%);
            min-height: 100vh;
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            overflow-y: auto;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            width: 100%;
        }

        .game-frame {
            background: rgba(255, 255, 255, 0.95);
            border: 3px solid #FDB71A;
            border-radius: 15px;
            padding: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            margin-bottom: 30px;
            overflow: hidden;
        }

        .game-iframe {
            display: block;
            border: none;
            width: 400px;
            height: 408px;
        }

        .game-info {
            background: rgba(255, 255, 255, 0.95);
            color: #333;
            padding: 30px;
            border-radius: 15px;
            width: 100%;
            max-width: 600px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .game-info h1 {
            color: #0033A0;
            font-size: 2em;
            margin-bottom: 15px;
        }

        .game-info .description {
            color: #666;
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .game-info .meta {
            color: #999ACA;
            font-size: 0.95em;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #eee;
        }

        .game-info .meta strong {
            color: #0033A0;
        }

        .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(253, 183, 26, 0.9);
            color: #0033A0;
            padding: 10px 20px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            display: inline-block;
        }

        .back-button:hover {
            background: #FDB71A;
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            body {
                padding: 20px 10px;
            }

            .game-iframe {
                width: 100%;
                max-width: 400px;
            }

            .game-frame {
                width: 100%;
            }

            .game-info h1 {
                font-size: 1.5em;
            }

            .game-info {
                padding: 20px;
            }

            .back-button {
                position: static;
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
    <a href="../../../../index.html" class="back-button">← Back to Portal</a>
    
    <div class="game-container">
        <div class="game-frame">
            <iframe src="game-index.html" class="game-iframe" scrolling="no" allow="scripts"></iframe>
        </div>

        <div><p><em>Click into the game frame to start.</em></p><br></div>

        <div class="game-info">
            <h1>{{H1}}</h1>
            <p class="description">
                {{DESCRIPTION}}
            </p>
            <div class="meta">
                <strong>Created by:</strong> {{CREATEDBY}}<br>
                <strong>Published:</strong> {{PUBLISHED}}
            </div>
        </div>
    </div>
</body>
</html>
'@

# Process each game
$successCount = 0
$errorCount = 0

Write-Host "`nProcessing games..." -ForegroundColor Cyan

foreach ($game in $gamesData) {
    try {
        # Get game folder path from the JSON
        $gameFolderPath = $game.folder
        
        if (-not $gameFolderPath) {
            Write-Host "  WARNING: Skipped - Game missing 'folder' property" -ForegroundColor Yellow
            $errorCount++
            continue
        }
        
        # Convert relative path to full path if needed
        if (-not [System.IO.Path]::IsPathRooted($gameFolderPath)) {
            $basePath = Split-Path $jsonFilePath -Parent
            $gameFolderPath = Join-Path $basePath $gameFolderPath
        }
        
        # Check if game folder exists
        if (-not (Test-Path $gameFolderPath)) {
            Write-Host "  WARNING: Skipped - Folder not found: $gameFolderPath" -ForegroundColor Yellow
            $errorCount++
            continue
        }
        
        # Replace placeholders in template
        $html = $htmlTemplate
        $html = $html -replace '{{TITLE}}', $game.title
        $html = $html -replace '{{H1}}', $game.h1
        $html = $html -replace '{{DESCRIPTION}}', $game.description
        $html = $html -replace '{{CREATEDBY}}', $game.createdby
        $html = $html -replace '{{PUBLISHED}}', $game.published
        
        # Create index.html in game folder
        $outputPath = Join-Path $gameFolderPath "index.html"
        $html | Out-File -FilePath $outputPath -Encoding UTF8
        
        Write-Host "  SUCCESS: Created $outputPath" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "  ERROR: Failed to process $($game.title) - $_" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host "`nComplete! Successfully created: $successCount | Errors: $errorCount" -ForegroundColor Cyan

# Pause to keep window open
Write-Host "`nPress any key to exit..." -ForegroundColor Gray
Read-Host -Prompt "Press Enter to exit"