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

## 📝 Notes

- This is a static HTML website, no build process required
- All pages use relative paths for CSS linking
- Some pages contain placeholders (e.g., form blocks, media)
