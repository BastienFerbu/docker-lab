# Use a lightweight web server
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom configuration
COPY default.conf /etc/nginx/conf.d/

# Copy static assets to the web server's public directory
COPY . /usr/share/nginx/html