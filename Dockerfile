# Dockerfile for Macias Gabions Website
# This creates a simple Nginx container to serve the static website

FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Create directory structure
RUN mkdir -p css js images

# Copy website files to correct locations
COPY index.html .
COPY gavion-triple-torsion.html .
COPY robots.txt .
COPY sitemap.xml .
COPY style.css css/style.css
COPY main.js js/main.js
COPY logo.png images/logo.png

# Fix permissions so nginx can read the files
RUN chmod -R 644 * && chmod 755 css js images

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
