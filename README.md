# Portfolio Website

This is my portfolio website using Hugo and the Blowfish theme.

## Development

To build the site for production:

```bash
npm run build
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when you push to the `main` branch.

### GitHub Pages Setup

1. Go to your repository **Settings**
2. Navigate to **Pages**
3. Set **Source** to "GitHub Actions"

The workflow will automatically:
- Install Hugo (extended version)
- Install Dart Sass for SCSS processing
- Fetch the Blowfish theme submodule
- Install npm dependencies (including blowfish-tools)
- Build the site with minification
- Deploy to GitHub Pages

## Technologies Used

- [Hugo](https://gohugo.io/) - Static site generator
- [Blowfish Theme](https://blowfish.page/) - Hugo theme
- [blowfish-tools](https://www.npmjs.com/package/blowfish-tools) - Development tools
- GitHub Actions - CI/CD pipeline
- GitHub Pages - Hosting

## Project Structure

- `content/` - Markdown content files
- `config/` - Hugo configuration files
- `themes/blowfish/` - Blowfish theme (git submodule)
- `static/` - Static assets
- `layouts/` - Custom layout templates
- `public/` - Generated site (not in git)
