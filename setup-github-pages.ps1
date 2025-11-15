# Simple script to enable GitHub Pages via GitHub CLI

Write-Host "Setting up GitHub Pages..." -ForegroundColor Green

# Check if GitHub CLI is installed
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "GitHub CLI is not installed. Installing..." -ForegroundColor Yellow
    winget install --id GitHub.cli --silent
    Write-Host "Please restart your terminal and run this script again." -ForegroundColor Yellow
    exit
}

# Check if authenticated
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please authenticate with GitHub first:" -ForegroundColor Yellow
    Write-Host "  gh auth login" -ForegroundColor Cyan
    exit
}

# Get repository info
$repoInfo = gh repo view --json nameWithOwner,defaultBranchRef
$repoName = ($repoInfo | ConvertFrom-Json).nameWithOwner
$defaultBranch = ($repoInfo | ConvertFrom-Json).defaultBranchRef.name

Write-Host "Repository: $repoName" -ForegroundColor Cyan
Write-Host "Default branch: $defaultBranch" -ForegroundColor Cyan

# Enable GitHub Pages with GitHub Actions as source
Write-Host "`nEnabling GitHub Pages..." -ForegroundColor Green
gh api "repos/$repoName/pages" -X PUT -f build_type=workflow

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ GitHub Pages enabled successfully!" -ForegroundColor Green
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Make sure your workflow file is committed" -ForegroundColor White
    Write-Host "2. Push to the $defaultBranch branch:" -ForegroundColor White
    Write-Host "   git add ." -ForegroundColor Cyan
    Write-Host "   git commit -m 'Setup GitHub Pages'" -ForegroundColor Cyan
    Write-Host "   git push origin $defaultBranch" -ForegroundColor Cyan
    Write-Host "`nYour site will be available at:" -ForegroundColor Yellow
    $username = $repoName.Split('/')[0]
    $repo = $repoName.Split('/')[1]
    Write-Host "https://$username.github.io/$repo/" -ForegroundColor Cyan
} else {
    Write-Host "`n✗ Failed to enable GitHub Pages. You may need to do it manually via the web UI." -ForegroundColor Red
    Write-Host "Go to: https://github.com/$repoName/settings/pages" -ForegroundColor Yellow
}

