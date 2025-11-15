# Quick Deploy Steps

Your code is ready! Here's what to do next:

## Option 1: Using GitHub CLI (Recommended)

1. **Install GitHub CLI** (if not already installed):
   ```powershell
   winget install --id GitHub.cli
   ```
   Then restart your terminal.

2. **Login to GitHub**:
   ```powershell
   gh auth login
   ```

3. **Create repository and push**:
   ```powershell
   gh repo create Portfolio --public --source=. --remote=origin --push
   ```

4. **Enable GitHub Pages**:
   ```powershell
   gh api repos/$(gh repo view --json owner -q .owner.login)/Portfolio/pages -X PUT -f build_type=workflow
   ```

## Option 2: Manual Setup (Web UI)

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it "Portfolio" (or your preferred name)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Add remote and push**:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

3. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save

## That's it! 🎉

Once you push, the workflow will automatically:
- Build your Next.js site
- Deploy it to GitHub Pages

Your site will be live at: `https://YOUR_USERNAME.github.io/Portfolio/`

