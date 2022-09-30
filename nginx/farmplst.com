server {
    listen 80;
    listen [::]:80;
    server_name farmplst.com;

    root   /farmplast/front/build;
        index index.html index.htm;
    location / {
      try_files $uri /index.html;
    }
    location ~ /.well-known/acme-challenge {
        allow all;
        root /tmp/acme_challenge;
    }
}