# AutoElite

AutoElite is a car dealership frontend rebuilt from a static HTML/CSS landing page into a React + Vite + Tailwind CSS project.

The current version keeps the original visual style, color palette, and overall flow while reorganizing the UI into reusable React components, multiple pages, and a deploy-ready frontend structure.

## Features

- Multi-page React experience for the main dealership pages plus support pages
- Tailwind CSS styling that preserves the original look and color palette
- Shared AVIF hero background across page hero sections
- Translucent fixed navbar layered over the hero image
- GSAP-powered page-load and scroll animations
- Hash-based navigation that works well on static hosting
- Contact form that opens a prefilled email draft in the user's default mail app
- Reusable page sections, shared layout components, and deploy-friendly build output

## Tech Stack

- React
- Vite
- Tailwind CSS
- GSAP

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deployment

Build the project with:

```bash
npm run build
```

The production-ready files are generated in `dist/`.

This project uses:

- hash-based routing for static hosting compatibility
- a relative Vite base path for easier deployment to static hosts
- an optimized `hero.avif` asset for page hero backgrounds

## Available Pages

- `#/` - Home
- `#/inventory` - Inventory
- `#/sell-your-car` - Sell Your Car
- `#/financing` - Financing
- `#/about-us` - About Us
- `#/contact` - Contact
- `#/faq` - FAQ
- `#/warranty` - Warranty
- `#/privacy-policy` - Privacy Policy
- `#/terms-of-service` - Terms of Service
- `#/login` - Login

## Project Structure

```text
src/
  assets/
  components/
  data/
  hooks/
  pages/
  utils/
  App.jsx
  main.jsx
```

## Routing

The project uses hash-based routing, so page navigation works without additional server configuration. Navbar links point to hash routes such as `#/inventory` and `#/contact`.

## Notes

- `node_modules/` and `dist/` are ignored through `.gitignore`
- The navbar styling and original design language were preserved during the React conversion
- The fixed navbar overlays the hero image across the site
- The shared hero image is loaded from `src/assets/hero.avif`
- Page animations respect reduced-motion preferences
- The frontend has been prepared for static deployment with `vite build`
