# Configuration Guide - Macias Gabions Website

This document provides step-by-step instructions for configuring the website before deployment.

## 🔧 Required Configurations

### 1. Web3Forms (Contact Form)

**Purpose:** Enable the contact form to receive submissions

**Steps:**
1. Visit [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form
4. Copy your Access Key
5. Open `index.html`
6. Find line ~812: `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">`
7. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
8. Configure email notifications in your Web3Forms dashboard:
   - Add: info@amym.com
   - Add: comercial@amym.com

**Testing:**
- Fill out and submit the contact form
- Check if emails arrive at configured addresses

---

### 2. Google Analytics 4

**Purpose:** Track website traffic and user behavior

**Steps:**
1. Visit [https://analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Open `index.html`
5. Find line ~44: `<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>`
6. Replace both instances of `GA_MEASUREMENT_ID` with your actual ID (lines 44 and 47)

**Example:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

---

### 3. Google Tag Manager (Optional)

**Purpose:** Advanced tracking and marketing pixel management

**Steps:**
1. Visit [https://tagmanager.google.com](https://tagmanager.google.com)
2. Create a new container
3. Copy your Container ID (format: GTM-XXXXXXX)
4. Open `index.html`
5. Find line ~51: Replace `GTM-XXXXXXX` with your Container ID
6. Find line ~58: Replace `GTM-XXXXXXX` again in the noscript section

---

### 4. AWS S3 Bucket Policy

**Purpose:** Allow public access to website files

**Steps:**
1. Choose your bucket name (e.g., `macias-gabions-website`)
2. Open `s3-bucket-policy.json`
3. Replace `YOUR-BUCKET-NAME` with your actual bucket name
4. Apply the policy when creating your S3 bucket

---

### 5. AWS CloudFront Distribution

**Purpose:** CDN for fast global delivery and HTTPS

**Steps:**
1. Create CloudFront distribution in AWS Console
2. Note your Distribution ID (e.g., `E1234ABCD5678`)
3. Open `deploy.sh`
4. Replace `YOUR_CLOUDFRONT_DISTRIBUTION_ID` with actual ID (line 8)

---

### 6. Domain Configuration

**Purpose:** Connect your custom domain

**Steps:**
1. In CloudFront, add your domain as an Alternate Domain Name (CNAME)
2. Request/upload SSL certificate in AWS Certificate Manager
3. In your DNS provider:
   - Create a CNAME record
   - Point to your CloudFront distribution URL
   - Example: `www.maciasgabions.com` → `d1234abcd5678.cloudfront.net`

---

### 7. Update URLs in Code

**Files to update:**

#### index.html
- Line ~39: Update `og:url` with your actual domain
- Line ~45: Update `twitter:url` with your actual domain
- Line ~49: Update canonical URL
- Line ~62-87: Update Schema.org URLs

#### sitemap.xml
- Replace all instances of `https://maciasgabions.com/` with your actual domain

---

## 🎨 Optional Customizations

### Update Company Information

**Contact Details:**
- Phone: +57 310 344 9000 (update in `index.html` and `js/main.js`)
- Emails: info@amym.com, comercial@amym.com
- Location: Bogotá, Colombia

**Social Media Links (Footer):**
- Facebook: https://www.facebook.com/metalesymallas
- LinkedIn: https://www.linkedin.com/company/aceros-metales-y-mallas-ltda
- Instagram: https://www.instagram.com/acerosmetalesymallasltda

### Modify Colors

Edit `css/style.css` (lines 7-15):
```css
:root {
  --primary-blue: #1e3a8a;    /* Main brand color */
  --primary-green: #059669;    /* Accent color */
  --accent-orange: #f97316;    /* Call-to-action buttons */
}
```

### Update Statistics

Edit `index.html` (lines ~421-438):
```html
<div class="stat-number" data-target="38">38+</div>
<div class="stat-label">Years of Experience</div>
```

Change the `data-target` value and text as needed.

---

## 📋 Pre-Deployment Checklist

Before deploying to production:

- [ ] Web3Forms access key configured
- [ ] Google Analytics ID added
- [ ] Google Tag Manager ID added (if using)
- [ ] S3 bucket name updated in `s3-bucket-policy.json`
- [ ] CloudFront distribution ID updated in `deploy.sh`
- [ ] All URLs updated to actual domain
- [ ] Contact information verified
- [ ] Social media links verified
- [ ] Company logo is correct (`images/logo.png`)
- [ ] Tested contact form locally
- [ ] Tested language switching
- [ ] Tested all navigation links
- [ ] Verified WhatsApp button works
- [ ] Mobile responsive design tested
- [ ] All images loading correctly
- [ ] SEO meta tags complete

---

## 🧪 Testing Checklist

### Functionality Tests
- [ ] Contact form submits successfully
- [ ] Email notifications received
- [ ] WhatsApp button opens correctly
- [ ] Language switching works (EN/ES)
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Mobile menu toggles correctly

### Cross-Browser Tests
- [ ] Chrome (desktop & mobile)
- [ ] Firefox
- [ ] Safari (desktop & mobile)
- [ ] Edge

### Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Images lazy load
- [ ] Animations smooth (60fps)
- [ ] No console errors

### SEO Tests
- [ ] Meta descriptions present
- [ ] All images have alt text
- [ ] Structured data validates (Google Rich Results Test)
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible

---

## 🚀 Deployment Process

### Local Testing (Docker)
```bash
docker-compose up -d
# Visit http://localhost:8080
# Test all functionality
docker-compose down
```

### Deploy to AWS S3
```bash
# Configure AWS credentials first
aws configure

# Update bucket name in deploy.sh
# Update CloudFront ID in deploy.sh

# Run deployment
./deploy.sh
```

### Verify Deployment
1. Visit your S3 website URL
2. Test CloudFront URL (if configured)
3. Test custom domain (if configured)
4. Submit a test contact form
5. Check Google Analytics Real-Time reports

---

## 📞 Support

If you need assistance with configuration:
- Technical Support: info@amym.com
- Phone: +57 310 344 9000

---

## 📝 Notes

- Keep your Web3Forms access key private
- Never commit API keys to Git repositories
- Update sitemap.xml after making significant changes
- Monitor Google Analytics for traffic and issues
- Regularly check form submissions
- Update copyright year in footer annually

---

**Last Updated:** February 2026
