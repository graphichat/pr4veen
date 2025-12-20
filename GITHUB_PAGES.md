# GitHub Pages Deployment Guide

## Fixed Issues

✅ **Removed vite.svg reference** - The 404 error for `vite.svg` has been fixed by removing the unnecessary favicon reference from `index.html`

✅ **Configured base path** - Updated `vite.config.ts` to use `/pr4veen/` as the base path for GitHub Pages

✅ **Updated BrowserRouter** - Added `basename` prop to BrowserRouter to work correctly with GitHub Pages subdirectory

✅ **Updated page title** - Changed from "vite-app" to "Praveen Kumar N - Product Design Lead Portfolio"

## GitHub Pages Setup

### Option 1: Using GitHub Actions (Recommended)

1. The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically deploy on push to `main` or `release` branches.

2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. Your site will be available at: `https://graphichat.github.io/pr4veen/`

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages:
   - Go to Settings → Pages
   - Under "Source", select the branch containing the `dist` folder
   - Set the folder to `/dist`

### Base Path Configuration

The current configuration uses `/pr4veen/` as the base path. If you need to change this:

1. **For project pages** (username.github.io/repository-name):
   - Keep `base: "/pr4veen/"` in `vite.config.ts`

2. **For user/organization pages** (username.github.io) or custom domain:
   - Change `base: "/pr4veen/"` to `base: "/"` in `vite.config.ts`
   - Rebuild and redeploy

## Verification

After deployment, verify:
- ✅ No 404 errors in browser console
- ✅ All routes work correctly (`/projects`, `/about`, `/contact`, etc.)
- ✅ Assets load correctly (images, fonts, CSS, JS)
- ✅ Navigation works properly

## Troubleshooting

If you still see 404 errors:
1. Check that the base path in `vite.config.ts` matches your GitHub Pages URL structure
2. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify the `dist` folder contains all assets
4. Check GitHub Pages build logs for errors

