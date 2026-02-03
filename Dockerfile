# Dockerfile for Macias Gabions Website
# This creates a simple Nginx container to serve the static website

FROM nginx:alpine

# Copy website files to Nginx html directory
COPY . /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
