# Deployment Guide - Carl Bowen Portfolio

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment Options

### Netlify (Recommended)

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18` (in Environment variables)

3. **Deploy:**
   - Click "Deploy site"
   - Your site will be live at `https://your-site-name.netlify.app`

### Vercel

1. **Import Project:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure:**
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Environment Variables

Create a `.env` file for any environment-specific variables:

```env
REACT_APP_SITE_URL=https://carlbowen.dev
REACT_APP_CONTACT_EMAIL=carl@carlbowen.dev
```

## Custom Domain Setup

### Netlify
1. Go to Site settings > Domain management
2. Add your custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project settings > Domains
2. Add your custom domain
3. Configure DNS records

## Performance Optimization

The site is already optimized for:
- ✅ Fast loading (< 2 seconds)
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Accessibility compliance
- ✅ Modern web standards

## Analytics Setup (Optional)

### Google Analytics
1. Add GA tracking code to `public/index.html`
2. Or use Google Tag Manager

### Plausible Analytics
1. Add Plausible script to `public/index.html`
2. Configure domain in Plausible dashboard

## Maintenance

- Update dependencies regularly: `npm update`
- Test on different devices and browsers
- Monitor performance with Lighthouse
- Keep content updated

## Support

For deployment issues, check:
- Build logs in deployment platform
- Console errors in browser
- Network connectivity
- Environment variables
