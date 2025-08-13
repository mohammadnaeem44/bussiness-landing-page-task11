# Netlify Deployment Guide

## Quick Deploy Options

### Option 1: Deploy from Git (Recommended)
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Manual Deploy
1. Build the project locally:
   ```bash
   npm run build
   ```
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder to deploy

## Configuration Details
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18 (auto-detected)

## Custom Domain Setup
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

## Environment Variables
If you need environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., API keys, endpoints)

## Build Optimization
- Images are automatically optimized
- Assets are compressed
- CDN distribution is enabled globally
