# Quick Setup Checklist

## ✅ Completed
- [x] Contact form with Netlify Forms integration
- [x] Social meta tags (Open Graph + Twitter Cards)
- [x] Homepage value proposition improvements
- [x] Visual polish with hover effects
- [x] GA4 tracking code scaffolded
- [x] OG preview image placeholder created

## ⏳ To Complete (5 min each)

### 1. Activate Google Analytics (REQUIRED for tracking)
```powershell
# 1. Get your GA4 Measurement ID from analytics.google.com
# 2. Run this command (replace YOUR-ID):
cd "C:\Users\silve\Desktop\droneops_platform\ColonyCore-Wesbite"
(Get-ChildItem -Path pages -Filter *.html) | ForEach-Object {
    (Get-Content $_.FullName) -replace 'G-XXXXXXXXXX', 'G-YOUR-ACTUAL-ID' | Set-Content $_.FullName
}
git add pages/*.html
git commit -m "feat: activate GA4 tracking with measurement ID"
git push origin main
```

### 2. Verify Netlify Deployment
- Go to [app.netlify.com](https://app.netlify.com)
- Check deploy status (should show "Published")
- Note your temporary URL: `https://YOUR-SITE.netlify.app`
- Test that URL while DNS propagates

### 3. Test Contact Form
Once site is live:
- Visit `https://colonycore.io/pages/contact.html` (or temp Netlify URL)
- Submit a test form
- Check Netlify Dashboard → Forms tab to see submission
- Set up email notifications: Forms → Notifications → Add notification

### 4. Improve OG Preview Image (OPTIONAL)
Current: Basic SVG placeholder at `images/og-preview.svg`

**To upgrade to professional PNG:**
1. Go to [Canva.com](https://canva.com) → "Open Graph Image" template
2. Add ColonyCore branding (dark bg, yellow accent)
3. Export as PNG (1200×630)
4. Save as `images/og-preview.png`
5. Update HTML references from `.svg` to `.png`
6. Commit and push

**Or convert existing SVG to PNG:**
```powershell
# Option: Use online converter like cloudconvert.com
# Upload images/og-preview.svg → convert to PNG → download
```

### 5. Check DNS Propagation
```powershell
# Check if DNS has propagated:
nslookup colonycore.io

# Or use online tool: https://dnschecker.org
```

## 📊 Current Status

- **GitHub**: ✅ All code pushed
- **Netlify**: ✅ Auto-deploying from GitHub
- **DNS**: ⏳ Propagating (up to 48 hours, usually 10-30 min)
- **Analytics**: ⚠️ Needs your GA4 ID
- **Forms**: ✅ Ready to capture leads
- **Social Preview**: ✅ SVG placeholder (upgrade to PNG recommended)

## 🚀 What's Live

Your site includes:
- Functional contact form
- Rich social previews (Open Graph + Twitter Cards)
- Improved homepage with feature grid
- Hover effects and visual polish
- GA4 ready (just needs your ID)

## Next Priorities

1. **Get GA4 ID** and activate tracking (highest priority)
2. **Test form** once DNS is live
3. **Create professional OG image** for social shares
4. **Add demo video** to homepage placeholder
