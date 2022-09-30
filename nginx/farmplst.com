server {
    if ($host = www.farmplst.com) {
                return 301 https://$host$request_uri;
            } # managed by Certbot


            if ($host = farmplst.com) {
                return 301 https://$host$request_uri;
            } # managed by Certbot


        	listen 80 ;
        	listen [::]:80 ;
            server_name www.farmplst.com farmplst.com;
            return 404; # managed by Certbot
    location ~ /.well-known/acme-challenge {
        allow all;
        root /tmp/acme_challenge;
    }
}
server {
    server_name www.farmplst.com farmplst.com; # managed by Certbot
    listen [::]:443 ssl ipv6only=on; # managed by Certbot
            listen 443 ssl; # managed by Certbot
            ssl_certificate /etc/letsencrypt/live/farmplst.com/fullchain.pem; # managed by Certbot
            ssl_certificate_key /etc/letsencrypt/live/farmplst.com/privkey.pem; # managed by Certbot
            include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
            ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    root   /var/www/localhost/htdocs/build;
    index index.html index.htm;
    location / {
      try_files $uri /index.html;
    }
}

