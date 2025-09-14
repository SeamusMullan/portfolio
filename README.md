# Seamus Mullan - Portfolio Website

A simple portfolio site made with Vuejs and shadcn.

All projects are populated using a json file on my webserver. That file is automatically generated using information from my GitHub account so expect some small inconsistencies / errors.

**Live Site:** [portfolio.direktdsp.com](https://portfolio.direktdsp.com)

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Deployment

This project uses automated CI/CD deployment to `portfolio.direktdsp.com`

## Project Structure

- `src/pages/` - Vue page components
- `src/components/` - Reusable Vue components
- `src/data/` - JSON data files
- `public/` - Static assets
