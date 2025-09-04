# Portfolio CI/CD Setup

This repository includes automated deployment to `portfolio.direktdsp.com`.

## Deployment Process

- **Automatic:** Every push to `main` branch triggers deployment and puts it on my site
- **Manual:** Can be triggered from GitHub Actions tab
- **Target:** `portfolio.direktdsp.com` via FTP or some other way of uploading files

## Required Secrets

Make sure these GitHub repository secrets are configured:

- `FTP_HOST` - Your FTP hostname (e.g. `ftp.example.com`)
- `FTP_USERNAME` - Your cPanel username
- `FTP_PASSWORD` - Your cPanel password

## Build Output

The CI/CD process:

1. Builds the Vue.js application
2. Uploads files to `/public_html/portfolio/`
3. Preserves `.htaccess` configuration
