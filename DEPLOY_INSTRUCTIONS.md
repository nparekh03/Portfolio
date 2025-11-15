# Simple GitHub Pages Deployment

## Quick Setup (GitHub CLI)

### 1. Install GitHub CLI (if not installed)
```powershell
# On Windows, use winget or download from: https://cli.github.com/
winget install --id GitHub.cli
```

### 2. Authenticate with GitHub
```powershell
gh auth login
```

### 3. Enable GitHub Pages (set source to GitHub Actions)
```powershell
gh api repos/:owner/:repo/pages -X POST -f source[branch]=main -f source[path]=/
```

Or if you want to set it to use GitHub Actions (which is what you need):
```powershell
gh api repos/:owner/:repo/pages -X PUT -f build_type=workflow
```

Replace `:owner` and `:repo` with your GitHub username and repository name.

### 4. Push your code
```powershell
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

The workflow will automatically deploy your site to GitHub Pages!

---

## Alternative: Web UI Setup

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your code to the `main` branch
5. The workflow will automatically deploy

---

## Your site will be available at:
`https://<your-username>.github.io/<repository-name>/`

