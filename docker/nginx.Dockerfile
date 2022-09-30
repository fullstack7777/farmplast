FROM nginx:1.23.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY /config/nginx.conf /etc/nginx/conf.d
COPY . /var/www/localhost/htdocs
RUN apk add nodejs && \
    apk add npm && \
    cd /var/www/localhost/htdocs && \
    npm install && \
    npm run build && \
    apk del nodejs && \
    apk del npm && \
    mv /var/www/localhost/htdocs/build /var/www/localhost && \
    cd /var/www/localhost/htdocs && \
    rm -rf * && \
    mv /var/www/localhost/build /var/www/localhost/htdocs;
WORKDIR /var/www/localhost/htdocs
