# Portfolio CI/CD Setup

This repository includes automated deployment to `portfolio.direktdsp.com`.

## 🚀 Deployment Process

- **Automatic:** Every push to `main` branch triggers deployment
- **Manual:** Can be triggered from GitHub Actions tab
- **Target:** `portfolio.direktdsp.com` via cPanel FTP

## 🔧 Required Secrets

Make sure these GitHub repository secrets are configured:

- `FTP_HOST` - Your FTP hostname (e.g., `ftp.direktdsp.com`)
- `FTP_USERNAME` - Your cPanel username
- `FTP_PASSWORD` - Your cPanel password

## 📁 Build Output

The CI/CD process:
1. Builds the Vue.js application
2. Uploads files to `/public_html/portfolio/`
3. Preserves `.htaccess` configuration
4. Cleans up orphaned files

## 🔍 Monitoring

Check the Actions tab in GitHub to monitor deployment status and logs.
