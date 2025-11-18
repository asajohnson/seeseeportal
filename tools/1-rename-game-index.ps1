# PowerShell script to rename all index.html files to game-index.html
# This script searches recursively through all subdirectories

# Set the starting directory (change this to your games folder path)
$startDirectory = "C:\Development\seeseeportal\games\2025-2026\t1\dodge-skeletons"

# Get all index.html files recursively
$indexFiles = Get-ChildItem -Path $startDirectory -Filter "index.html" -Recurse -File

# Check if any files were found
if ($indexFiles.Count -eq 0) {
    Write-Host "No index.html files found in $startDirectory" -ForegroundColor Yellow
    exit
}

# Display files that will be renamed
Write-Host "`nFound $($indexFiles.Count) index.html file(s):" -ForegroundColor Cyan
foreach ($file in $indexFiles) {
    Write-Host "  - $($file.FullName)" -ForegroundColor Gray
}

# Ask for confirmation
Write-Host "`nDo you want to rename these files to game-index.html? (Y/N): " -ForegroundColor Yellow -NoNewline
$confirmation = Read-Host

if ($confirmation -eq 'Y' -or $confirmation -eq 'y') {
    # Rename each file
    $successCount = 0
    $errorCount = 0
    
    foreach ($file in $indexFiles) {
        try {
            $newPath = Join-Path $file.DirectoryName "game-index.html"
            
            # Check if game-index.html already exists
            if (Test-Path $newPath) {
                Write-Host "  WARNING: Skipped $($file.DirectoryName) - game-index.html already exists" -ForegroundColor Yellow
                $errorCount++
            } else {
                Rename-Item -Path $file.FullName -NewName "game-index.html"
                Write-Host "  SUCCESS: Renamed in $($file.DirectoryName)" -ForegroundColor Green
                $successCount++
            }
        }
        catch {
            Write-Host "  ERROR: Failed to rename $($file.FullName): $_" -ForegroundColor Red
            $errorCount++
        }
    }
    
    Write-Host "`nComplete! Successfully renamed: $successCount | Skipped/Errors: $errorCount" -ForegroundColor Cyan
} else {
    Write-Host "`nOperation cancelled. No files were renamed." -ForegroundColor Yellow
}

# Pause to keep window open
Write-Host "`nPress any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")