# Website Testing Guide

## Quick Start Testing

The ColonyCore website is now ready for testing! Follow these steps:

### 1. Launch the Website

**Option A: Using the launch script (Recommended)**
```bash
./launch.sh
```

**Option B: Manual Python server**
```bash
python3 -m http.server 8000
```

### 2. Access the Website

Open your browser and navigate to:
- **Homepage**: http://localhost:8000/pages/index.html
- **Features**: http://localhost:8000/pages/features.html
- **Pricing**: http://localhost:8000/pages/pricing.html
- **Contact**: http://localhost:8000/pages/contact.html

### 3. Testing Checklist

#### Visual Testing
- [ ] Homepage displays correctly with gradient background
- [ ] Yellow accent color (#facc15) is visible on buttons
- [ ] Text is readable with proper contrast
- [ ] Responsive design works (resize browser window)
- [ ] Dark theme is applied consistently

#### Navigation Testing
- [ ] Click "Request Early Access" button on homepage → goes to contact page
- [ ] Click resource links on features page → loads resource articles
- [ ] Click "How to Scale a Drone Operation" link on pricing page → loads article
- [ ] All internal links work without 404 errors

#### Content Testing
- [ ] All pages have correct titles
- [ ] Content is readable and formatted properly
- [ ] CSS styling is applied to all pages
- [ ] Media placeholders are visible

#### Resource Pages Testing
Visit each resource page to ensure they load:
- http://localhost:8000/resources/how-to-start-a-drone-business.html
- http://localhost:8000/resources/how-to-price-drone-services.html
- http://localhost:8000/resources/drone-flight-logs-best-practices.html
- http://localhost:8000/resources/how-to-scale-drone-operation.html
- http://localhost:8000/resources/battery-management-for-drone-fleets.html

#### Industry Pages Testing
- http://localhost:8000/industries/solar-roofing.html

### 4. Browser Compatibility Testing

Test in multiple browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Edge

### 5. Mobile Testing

Test responsive design by:
1. Resizing browser window to mobile dimensions (e.g., 375px width)
2. Using browser DevTools device emulation
3. Testing on actual mobile device

### Known Placeholders

The following items are intentionally placeholders:
- Product walkthrough video on homepage
- Squarespace form block on contact page
- Detailed pricing tiers on pricing page

## Stopping the Server

To stop the test server, press `Ctrl+C` in the terminal where it's running.

## Troubleshooting

### Port Already in Use
If you see "Address already in use" error:
```bash
# Find and kill the process
lsof -ti:8000 | xargs kill -9
```

### CSS Not Loading
If styles aren't appearing:
1. Check browser console for errors
2. Verify the CSS file exists at `css/global.css`
3. Clear browser cache and refresh

### 404 Errors
If you get 404 errors:
1. Ensure you're accessing pages with `.html` extension
2. Verify file paths are relative (use `../` for parent directories)
3. Check that files actually exist in the repository

## Production Deployment Notes

For production deployment, consider:
1. Using a proper web server (Nginx, Apache)
2. Setting up proper routing to handle URLs without `.html`
3. Adding a proper domain and SSL certificate
4. Implementing the placeholder forms and media
5. Adding analytics and monitoring
6. Setting up CDN for static assets
