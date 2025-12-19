# Analytics & Social Setup

## Google Analytics 4 Setup

**Current State**: GA4 tracking code is scaffolded but needs your measurement ID.

**Steps to activate:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a GA4 property for `colonycore.io`
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Find/replace `G-XXXXXXXXXX` in all HTML files with your actual ID
5. Deploy → analytics start tracking immediately

**Files to update:**
- pages/index.html
- pages/features.html
- pages/pricing.html
- pages/contact.html

**Quick command:**
```powershell
# Replace G-XXXXXXXXXX with your actual GA4 ID
(Get-ChildItem -Path pages -Filter *.html -Recurse) | ForEach-Object {
    (Get-Content $_.FullName) -replace 'G-XXXXXXXXXX', 'G-YOUR-ACTUAL-ID' | Set-Content $_.FullName
}
```

---

## Open Graph Preview Image

**Current State**: All pages reference `https://colonycore.io/images/og-preview.png` (not yet created).

**To add a preview image:**
1. Create a 1200×630 px image with:
   - ColonyCore logo
   - Tagline: "Drone Service Business Software"
   - Brand colors (dark bg, yellow accent)
2. Save as `images/og-preview.png` in your repo
3. Commit and push

**Tools to create:**
- Canva (template: "Open Graph Image")
- Figma
- Photoshop

**Fallback**: If you don't create one, social platforms will show text-only previews (still functional).

---

## What's Now Live

✅ **Homepage enhancements:**
- Improved headline: "Stop Juggling Spreadsheets"
- Feature grid with icons
- Gradient hero section
- Secondary CTA ("See Features")
- Placeholder for demo video

✅ **Social meta tags:**
- Open Graph for Facebook/LinkedIn
- Twitter Cards for better tweet previews
- All main pages covered

✅ **Visual polish:**
- Button hover effects (lift + glow)
- Card hover animations
- Enhanced spacing and layout

✅ **Analytics ready:**
- GA4 tracking code in place (needs your ID)

---

## Next Steps (Optional)

1. **Replace demo placeholder**: Add a Loom/YouTube walkthrough video
2. **Create OG preview image**: 1200×630 design for social shares
3. **Activate GA4**: Replace placeholder ID
4. **Add testimonials**: Social proof from beta users
