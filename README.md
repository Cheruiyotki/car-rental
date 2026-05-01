# AutoElite

AutoElite is a car dealership website rebuilt from a static HTML/CSS landing page into a React + Vite + Tailwind CSS project.

The current version keeps the original visual style, color codes, and general behavior while reorganizing the UI into reusable React components and multiple pages.

## Features

- Multi-page React experience for `Home`, `Inventory`, `Sell Your Car`, `Financing`, `About Us`, and `Contact`
- Tailwind CSS styling that preserves the original look and color palette
- GSAP-powered page-load and scroll animations
- Hash-based navigation that works well on static hosting
- Reusable page sections and shared layout components

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

## Available Pages

- `#/` - Home
- `#/inventory` - Inventory
- `#/sell-your-car` - Sell Your Car
- `#/financing` - Financing
- `#/about-us` - About Us
- `#/contact` - Contact

## Project Structure

```text
src/
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
- The navbar styling and the original design language were preserved during the React conversion
- Page animations respect reduced-motion preferences
