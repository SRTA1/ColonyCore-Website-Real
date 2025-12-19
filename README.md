# ColonyCore Website

A static website for ColonyCore - the operational backbone for professional drone service providers.

## 🚀 Quick Start

### Option 1: Python HTTP Server (Python 3)
```bash
python3 -m http.server 8000
```
Then visit: http://localhost:8000/pages/index.html

### Option 2: Python HTTP Server (Python 2)
```bash
python -m SimpleHTTPServer 8000
```
Then visit: http://localhost:8000/pages/index.html

### Option 3: Node.js HTTP Server
```bash
npx serve .
```

### Option 4: PHP Built-in Server
```bash
php -S localhost:8000
```
Then visit: http://localhost:8000/pages/index.html

## 📁 Project Structure

```
.
├── css/                    # Global styles
│   └── global.css         # Main stylesheet
├── pages/                 # Main website pages
│   ├── index.html        # Homepage
│   ├── features.html     # Features page
│   ├── contact.html      # Contact/early access page
│   └── pricing.html      # Pricing page
├── resources/            # Resource articles
│   ├── battery-management-for-drone-fleets.html
│   ├── drone-flight-logs-best-practices.html
│   ├── how-to-price-drone-services.html
│   ├── how-to-scale-drone-operation.html
│   └── how-to-start-a-drone-business.html
└── industries/           # Industry-specific pages
    └── solar-roofing.html
```

## 🌐 Pages

- **Homepage** (`/pages/index.html`) - Main landing page
- **Features** (`/pages/features.html`) - Product features and resources
- **Pricing** (`/pages/pricing.html`) - Pricing information
- **Contact** (`/pages/contact.html`) - Request early access form

## 🎨 Styling

The website uses a custom CSS file (`css/global.css`) with:
- Dark theme with gradient backgrounds
- Responsive design
- Modern UI components (cards, buttons, grids)
- Yellow accent color (#facc15)

## 🧪 Testing

To test the website locally:
1. Start a local HTTP server using one of the methods above
2. Open your browser to the specified URL
3. Navigate through all pages to verify functionality
4. Test responsive design by resizing the browser window
5. Check all internal links work correctly

## � SEO & Assets

- **Meta Descriptions**: All pages include SEO-friendly descriptions for search results.
- **Favicon**: Custom icon in `icons/favicon.svg` linked from all pages.
- **Sitemap**: `sitemap.xml` includes all main pages and resources for search engines.
- **Robots**: `robots.txt` controls crawler access.
- **404 Page**: `404.html` handles not-found routes with a user-friendly fallback.
- **Canonical URLs**: Placeholder domain `https://colonycore.example` used in `<link rel="canonical">` tags. **Update to your production domain before deploying.**

## 🚢 Deployment

### Before You Deploy
1. Replace all canonical URL placeholders in HTML files:
   - Change `https://colonycore.example` to your actual domain (e.g., `https://colonycore.com`)
   - Search: `colonycore.example`
   - Replace with: your production domain
2. Verify `sitemap.xml` and `robots.txt` contain your production domain.

### Option 1: Netlify (Recommended)
1. Push this repo to GitHub, GitLab, or Bitbucket.
2. Connect repo in [Netlify](https://netlify.com).
3. Build command: `# (none — this is a static site)`
4. Publish directory: `.` (or project root)
5. Deploy.
6. Netlify will automatically serve `404.html` for not-found routes.

### Option 2: GitHub Pages
1. Push this repo to GitHub as `colonycore-website` (or your org name).
2. Go to Settings → Pages.
3. Set Source to `main` branch.
4. GitHub will serve the site at `https://<username>.github.io/colonycore-website/`.
5. Update canonical URLs to match.
6. Custom domain: Point DNS to GitHub and configure in Settings → Pages.

### Option 3: Azure Static Web Apps
1. Connect your GitHub repo in [Azure Portal](https://portal.azure.com).
2. Select root directory: `/` (or auto-detect).
3. Deploy — Azure automatically serves static files.
4. 404 handling: Ensure `404.html` is at root.

### Option 4: AWS S3 + CloudFront
1. Create S3 bucket and enable static website hosting.
2. Upload all files (including `404.html`, `robots.txt`, `sitemap.xml`).
3. Set error document to `404.html`.
4. (Optional) Attach CloudFront distribution for CDN caching.

## 📝 Notes

- This is a static HTML website, no build process required
- All pages use relative paths for CSS linking
- Some pages contain placeholders (e.g., form blocks, media)
- Open Graph / Twitter Card meta tags can be added later for rich link previews
