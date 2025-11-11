# Zarish – The Style Hub Deployment Guide

## Pre-Deployment Checklist

### 1. Images to Optimize/Replace
- [ ] Replace `images/bg_1.jpg`, `images/bg_2.jpg`, `images/bg_3.jpg` with jewelry-related hero images
- [ ] Replace `images/work-*.jpg` (work-1.jpg through work-6.jpg) with actual jewelry photos
- [ ] Replace `images/person_*.jpg` with team photos or remove if not needed
- [ ] Add `images/favicon.ico` (16x16, 32x32, 48x48 sizes)
- [ ] Add `images/og-image.jpg` (1200x630px for social media sharing)
- [ ] Consider converting images to WebP format for better performance

### 2. Content Updates Needed
- [ ] Update Google Maps API key in all HTML files (currently placeholder)
- [ ] Update social media links in footer (Twitter, Facebook, Instagram)
- [ ] Replace placeholder contact information:
  - Address: "123 Jewelry District, Fashion Avenue, New York, NY 10001"
  - Phone: "+1 (234) 567-8900"
  - Email: "info@zarishstylehub.com"
- [ ] Update domain name in sitemap.xml and Open Graph tags
- [ ] Update robots.txt with actual domain

### 3. SEO & Analytics Setup
- [ ] Add Google Analytics 4 tracking code
- [ ] Set up Google Search Console
- [ ] Install Facebook Pixel (if using Facebook ads)
- [ ] Update meta descriptions with actual business info
- [ ] Verify all internal links work correctly

### 4. Performance Optimization
- [ ] Compress all images (aim for <200KB each)
- [ ] Minify CSS and JavaScript files
- [ ] Enable Cloudflare's optimization features
- [ ] Test page load speeds with PageSpeed Insights

## Cloudflare Pages Deployment

### Step 1: Repository Setup
1. Create a new GitHub repository
2. Upload all website files to the repository
3. Ensure `_headers` file is in the root directory

### Step 2: Connect to Cloudflare Pages
1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project"
3. Connect your GitHub account
4. Select your repository
5. Use these settings:
   - **Framework preset**: None (Static HTML)
   - **Build command**: (leave empty)
   - **Build output directory**: (leave empty)
   - **Root directory**: (leave empty or specify if in subdirectory)

### Step 3: Custom Domain (Optional)
1. Go to your project in Cloudflare Pages
2. Click "Custom domains"
3. Add your domain name
4. Update DNS records as instructed

### Step 4: Environment Variables (If Needed)
- No environment variables needed for this static site

## Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build settings: Leave empty (static site)
3. Deploy directory: `/` (root)

### Vercel
1. Import GitHub repository
2. Framework: Other
3. No build command needed

### GitHub Pages
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)

## Post-Deployment Tasks

### 1. Testing
- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check all navigation links
- [ ] Test contact forms (if any)
- [ ] Verify social media links
- [ ] Test page loading speeds

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Set up Google My Business (for local SEO)
- [ ] Monitor Core Web Vitals

### 3. Analytics & Monitoring
- [ ] Set up Cloudflare Analytics
- [ ] Configure Google Analytics goals
- [ ] Set up uptime monitoring

### 4. Security
- [ ] Enable Cloudflare security features
- [ ] Set up SSL/TLS (automatic with Cloudflare)
- [ ] Configure firewall rules if needed

## Maintenance

### Regular Updates
- Update jewelry collections seasonally
- Refresh images with new pieces
- Update pricing and availability
- Monitor and fix broken links
- Update copyright year automatically (already implemented)

### Performance Monitoring
- Check PageSpeed Insights monthly
- Monitor Cloudflare Analytics
- Review and update meta descriptions
- Add new jewelry categories as needed

---

**🚀 Your Zarish – The Style Hub website is now ready for deployment!**

The website is fully responsive, SEO-optimized, and ready to showcase your exquisite jewelry collections to the world.
