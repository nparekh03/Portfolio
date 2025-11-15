# Deploy Now - Quick Steps (2 minutes!)

Your code is ready to deploy! Follow these simple steps:

## Step 1: Create Repository on GitHub (30 seconds)
1. Go to: **https://github.com/new**
2. Repository name: `Portfolio`
3. Make it **Public** ✅
4. **DON'T** check any boxes (no README, .gitignore, or license)
5. Click **"Create repository"**

## Step 2: Push Your Code (30 seconds)
Run this command:
```powershell
git push -u origin main
```

You'll be prompted for credentials. Use:
- Username: `nparekh03`
- Password: Use a **Personal Access Token** (not your GitHub password)
  - Get one here: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Select scope: `repo` (full control)
  - Copy the token and use it as your password

## Step 3: Enable GitHub Pages (30 seconds)
1. Go to: **https://github.com/nparekh03/Portfolio/settings/pages**
2. Under **"Source"**, select **"GitHub Actions"**
3. Click **"Save"**

## Done! 🎉
Your site will be live at: **https://nparekh03.github.io/Portfolio/**

The workflow will automatically build and deploy your site. Check the "Actions" tab to see progress!

