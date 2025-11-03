npm run build
ssh cgsa-server "rm -rf /var/www/newsite/"
scp -r dist/ cgsa-server:/var/www/newsite