# Complete GitHub Pages Deployment Script
# Run this once GitHub CLI is installed

Write-Host "🚀 Completing GitHub Pages Deployment..." -ForegroundColor Green
Write-Host ""

# Check if GitHub CLI is installed
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI not found. Please install it first:" -ForegroundColor Red
    Write-Host "   winget install --id GitHub.cli" -ForegroundColor Yellow
    Write-Host "   Then restart your terminal and run this script again." -ForegroundColor Yellow
    exit
}

Write-Host "✓ GitHub CLI found" -ForegroundColor Green

# Check authentication
Write-Host "Checking authentication..." -ForegroundColor Cyan
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Not authenticated. Please login:" -ForegroundColor Yellow
    Write-Host "   gh auth login" -ForegroundColor Cyan
    exit
}

Write-Host "✓ Authenticated" -ForegroundColor Green
Write-Host ""

# Create repository if it doesn't exist
Write-Host "Creating/Checking repository..." -ForegroundColor Cyan
$repoExists = gh repo view nparekh03/Portfolio 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating new repository..." -ForegroundColor Yellow
    gh repo create Portfolio --public --source=. --remote=origin --push
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to create repository. Trying to push to existing remote..." -ForegroundColor Red
        git push -u origin main
    }
} else {
    Write-Host "✓ Repository exists. Pushing code..." -ForegroundColor Green
    git push -u origin main
}

Write-Host ""

# Enable GitHub Pages
Write-Host "Enabling GitHub Pages..." -ForegroundColor Cyan
gh api repos/nparekh03/Portfolio/pages -X PUT -f build_type=workflow

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ SUCCESS! GitHub Pages is now enabled!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site will be available at:" -ForegroundColor Yellow
    Write-Host "   https://nparekh03.github.io/Portfolio/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "The workflow will automatically deploy when you push to main." -ForegroundColor Green
    Write-Host "Check the Actions tab in your repository to see the deployment progress." -ForegroundColor Cyan
} else {
    Write-Host "⚠️  Could not enable GitHub Pages via API." -ForegroundColor Yellow
    Write-Host "Please enable it manually:" -ForegroundColor Yellow
    Write-Host "   1. Go to: https://github.com/nparekh03/Portfolio/settings/pages" -ForegroundColor Cyan
    Write-Host "   2. Under 'Source', select 'GitHub Actions'" -ForegroundColor Cyan
    Write-Host "   3. Save" -ForegroundColor Cyan
}

