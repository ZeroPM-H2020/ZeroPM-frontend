# ZeroPM Global Chemical Inventory Frontend

React + Vite frontend for the ZeroPM Global Chemical Inventory. The app renders the public landing page, FAQ, and data download flows, and builds SQL queries used to fetch CSV exports from the ZeroPM Datasette instance.

## Features

- Landing page with accordion content and FAQ
- CSV downloads by country/region with query-driven filters
- Config-driven UI content (countries, regions, accordion items)

## Tech stack

- React 18 + TypeScript + Vite
- MUI (Material UI) + Emotion
- Sass/SCSS styling

## Getting started

```bash
nvm use
npm install
npm run dev
```

The dev server runs on port 8080 by default.

## Scripts

- `npm run dev` — start Vite dev server on port 8080
- `npm run build` — typecheck and build production assets
- `npm run preview` — preview the production build on port 8080
- `npm run lint` — run ESLint
- `npm run format` — format the codebase with Prettier

## Configuration

The dev server proxies `/zeropm` to the ZeroPM Datasette host. Update the proxy in `vite.config.ts` if you need a different backend.

## Project structure

- `src/components` — UI components (header, footer, accordions, content blocks)
- `src/components/Content/configs` — content configs (countries, regions, copy)
- `src/hooks` — query builder hook
- `src/styles` — theme and shared SCSS variables
- `src/assets` — static assets used by the app

## License

MIT. See `LICENSE`.
