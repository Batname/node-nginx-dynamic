# Nginx config

server {
 listen 80;
 server_name node-nginx-static.dev;
  location / {
     proxy_pass http://node-nginx-static.dev:3000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
   }

  location /public/ {
    root /home/bat/node_projects/node-nginx-dynamic;
  }
}
