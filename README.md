# Macias Gabions Website

Modern, bilingual (English/Spanish) website for Macias Gabions S.A.S., featuring erosion control and fencing solutions for Central America, Mexico, and the Caribbean.

## 🌟 Features

- **Bilingual Support**: Full English and Spanish translations with easy language switching
- **Modern Design**: Clean, professional design with parallax effects and smooth animations
- **Responsive**: Fully mobile-responsive design that works on all devices
- **SEO Optimized**: Meta tags, structured data, and optimized content
- **Contact Form**: Integrated with Web3Forms for easy inquiries
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Fast Loading**: Optimized assets and lazy loading images
- **Analytics Ready**: Google Analytics and Tag Manager integration placeholders

## 📋 Pages

1. **Home** - Hero section with parallax effects
2. **About Us** - Company information and features
3. **Industries** - Sectors served (6 industries)
4. **Products** - 8 main product categories
5. **News** - Latest projects and updates
6. **Contact** - Contact form and company information

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **JavaScript (ES6+)** - Vanilla JS for animations and interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Lato (headings) and Roboto (body text)
- **Web3Forms** - Form submission handling

## 🚀 Quick Start

### Local Development with Docker

1. **Build and run the container:**
   ```bash
   docker-compose up -d
   ```

2. **Access the website:**
   Open your browser and navigate to `http://localhost:8080`

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Manual Setup (without Docker)

1. **Open the website:**
   Simply open `index.html` in your web browser, or use a local server:
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   
   # Node.js (with http-server)
   npx http-server -p 8080
   ```

2. **Access:**
   Navigate to `http://localhost:8080`

## 📦 Deployment

### AWS S3 + CloudFront Deployment

1. **Create S3 Bucket:**
   ```bash
   aws s3 mb s3://macias-gabions-website
   ```

2. **Configure bucket for static website hosting:**
   ```bash
   aws s3 website s3://macias-gabions-website --index-document index.html --error-document index.html
   ```

3. **Apply bucket policy:**
   ```bash
   aws s3api put-bucket-policy --bucket macias-gabions-website --policy file://s3-bucket-policy.json
   ```
   
   *Note: Update `YOUR-BUCKET-NAME` in `s3-bucket-policy.json` before applying*

4. **Upload website files:**
   ```bash
   aws s3 sync . s3://macias-gabions-website --exclude ".git/*" --exclude "README.md" --exclude "Dockerfile" --exclude "docker-compose.yml"
   ```

5. **Create CloudFront Distribution:**
   - Origin Domain: Your S3 bucket website endpoint
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Alternate Domain Names (CNAMEs): Add your custom domain
   - SSL Certificate: Request/use ACM certificate

6. **Configure DNS:**
   Point your domain to the CloudFront distribution URL

### Deployment Script

Create a deployment script `deploy.sh`:
```bash
#!/bin/bash
BUCKET_NAME="macias-gabions-website"
DISTRIBUTION_ID="YOUR_CLOUDFRONT_DISTRIBUTION_ID"

# Sync files to S3
aws s3 sync . s3://$BUCKET_NAME \
  --exclude ".git/*" \
  --exclude "README.md" \
  --exclude "Dockerfile" \
  --exclude "docker-compose.yml" \
  --exclude "deploy.sh" \
  --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment completed!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## ⚙️ Configuration

### 1. Web3Forms Setup

To enable the contact form:

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your Access Key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html` (line ~812):
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```

### 2. Google Analytics

Replace `GA_MEASUREMENT_ID` in `index.html` (lines ~44 & 47):
```javascript
gtag('config', 'GA_MEASUREMENT_ID');
```

### 3. Google Tag Manager

Replace `GTM-XXXXXXX` in `index.html` (lines ~51 & 58):
```javascript
'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX'
```

### 4. WhatsApp Number

The WhatsApp number is configured in `js/main.js` (line ~438):
```javascript
const phoneNumber = '573103449000';
```

Update if needed.

### 5. Email Addresses

Contact form submissions go to:
- info@amym.com
- comercial@amym.com

These are displayed in the contact section and footer.

## 🎨 Customization

### Colors

Colors are defined as CSS variables in `css/style.css` (lines 7-15):
```css
:root {
  --primary-blue: #1e3a8a;
  --primary-green: #059669;
  --accent-orange: #f97316;
  --dark-gray: #1f2937;
  --medium-gray: #6b7280;
  --light-gray: #f3f4f6;
  --white: #ffffff;
}
```

### Typography

Fonts are defined in CSS variables:
```css
--font-heading: 'Lato', sans-serif;
--font-body: 'Roboto', sans-serif;
```

### Images

Replace placeholder images with your own:
- Logo: `images/logo.png` (already included)
- Product images: Use Unsplash URLs or replace with your own
- Background images: Update in HTML or CSS

### Translations

All text content is managed in `js/main.js` (lines 7-284) in the `translations` object:
```javascript
const translations = {
  en: { /* English translations */ },
  es: { /* Spanish translations */ }
};
```

## 📱 Mobile Optimization

The website is fully responsive with breakpoints at:
- Desktop: > 968px
- Tablet: 641px - 968px
- Mobile: < 640px

## 🔍 SEO Features

- Semantic HTML5 markup
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (Schema.org)
- Sitemap ready
- Canonical URLs
- Alt text for images
- Optimized heading hierarchy

## 📊 Analytics & Tracking

The website is configured for:
- Google Analytics 4
- Google Tag Manager
- Custom event tracking (form submissions, button clicks)

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 File Structure

```
macias-gabions-website/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # All styles
├── js/
│   └── main.js               # All JavaScript
├── images/
│   └── logo.png              # Company logo
├── Dockerfile                # Docker configuration
├── docker-compose.yml        # Docker Compose config
├── s3-bucket-policy.json     # AWS S3 policy
├── deploy.sh                 # Deployment script
└── README.md                 # This file
```

## 🔒 Security Considerations

- No sensitive data in client-side code
- Form validation on both client and server side
- HTTPS enforced via CloudFront
- Content Security Policy headers (configure in CloudFront)
- Regular dependency updates

## 🐛 Troubleshooting

### Contact form not working
- Verify Web3Forms access key is correct
- Check browser console for errors
- Ensure form fields have correct `name` attributes

### Language switching not working
- Check browser console for JavaScript errors
- Verify `data-i18n` attributes match translation keys

### Images not loading
- Check image paths are correct
- Verify images are uploaded to server/S3
- Check file permissions

### WhatsApp button not working
- Verify phone number format (country code without + symbol)
- Test on mobile device with WhatsApp installed

## 📞 Support

For technical support or questions:
- Email: info@amym.com
- Phone: +57 310 344 9000
- WhatsApp: +57 310 344 9000

## 📝 License

Copyright © 2026 Macias Gabions S.A.S. All rights reserved.

## 🔄 Version History

- **v1.0.0** (February 2026) - Initial release
  - Bilingual website (EN/ES)
  - 5 main pages
  - 8 products
  - 6 industries
  - Contact form
  - WhatsApp integration
  - SEO optimization
  - Mobile responsive

## 🚧 Future Enhancements

- [ ] Add project gallery/portfolio section
- [ ] Implement blog with CMS
- [ ] Add product specification PDF downloads
- [ ] Create product comparison tool
- [ ] Add live chat support
- [ ] Implement case studies section
- [ ] Add technical documentation library
- [ ] Create client testimonials section
- [ ] Add video demonstrations
- [ ] Implement multi-language support (Portuguese, French)

---

**Built with ❤️ for Macias Gabions S.A.S.**
