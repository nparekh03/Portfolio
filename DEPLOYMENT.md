# Deployment Guide

## GitHub Pages Setup

### Initial Setup

1. **Create Repository**
   - Create a new repository named `niraliparekh.github.io` (or your username)
   - Make sure it's public (required for GitHub Pages free tier)

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions" (not "Deploy from a branch")
   - This enables the GitHub Actions workflow

3. **Push Code**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/niraliparekh/niraliparekh.github.io.git
   git push -u origin main
   ```

### Automatic Deployment

Once the code is pushed:
- GitHub Actions will automatically build and deploy on every push to `main`
- The workflow is configured in `.github/workflows/deploy.yml`
- Deployment typically takes 2-3 minutes
- Site will be available at `https://niraliparekh.github.io`

### Custom Domain (Optional)

1. **Add Custom Domain**
   - In repository Settings → Pages
   - Add your custom domain (e.g., `niraliparekh.com`)
   - Update DNS records as instructed

2. **Update Base Path** (if needed)
   - If deploying to a subdirectory, update `NEXT_PUBLIC_BASE_PATH` in workflow

## Manual Deployment

If you prefer manual deployment:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy the `out` directory:**
   - The `out` folder contains all static files
   - Upload to your hosting provider
   - Or use `gh-pages` branch method

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`

### Pages Not Updating
- Clear browser cache
- Check GitHub Actions for deployment status
- Verify workflow completed successfully

### 404 Errors
- Ensure `trailingSlash: true` in `next.config.js`
- Check that all routes use proper Next.js App Router structure
- Verify base path configuration if using custom domain

## Environment Variables

For production, you may want to set:
- `NEXT_PUBLIC_BASE_PATH` - If deploying to subdirectory
- Analytics IDs (Google Analytics, etc.)

Add these in GitHub repository Settings → Secrets and variables → Actions


