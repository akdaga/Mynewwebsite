# Daga Realty React site

A modular React rebuild of the Daga Realty website using Vite. Content is structured into small, easily editable data files so the
team can make frequent updates without touching component logic.

## Project structure

```
src/
  components/        # Reusable presentation components
  data/              # Editable content (company profile, services, listings, testimonials)
  App.jsx            # Page composition + SEO helpers
public/assets/       # Brand assets and listing imagery surfaced in the UI
```

Update copy and media by editing the files inside `src/data` and `public/assets`.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Managing listings

1. Open [`src/data/listings.json`](src/data/listings.json).
2. Duplicate an existing object or remove entries as needed.
3. Update the values:
   - `title`, `address`, `price`
   - `bedrooms`, `bathrooms`, `parking`, `landSize`
   - `description`, `features`
   - `image` – point to files saved in `public/assets/listings/`.
4. Add the corresponding image (SVG/JPEG/PNG) to `public/assets/listings/`.
5. Save changes – the UI and structured data will update automatically.

For contact details, social links, and copy that appears globally, edit [`src/data/company.js`](src/data/company.js).

## SEO helpers

- Core meta tags, Open Graph, and Twitter metadata live in [`index.html`](index.html).
- [`App.jsx`](src/App.jsx) augments `document.title`, description/keyword tags, and injects JSON-LD `RealEstateAgent` structured
  data for search engines.
- `public/sitemap.xml` and `public/robots.txt` are included with placeholders – update them with your GitHub Pages URL once the
  repository name is final.

## Deploying to GitHub Pages

1. Set the deployment base path before building:
   ```bash
   export BASE_URL=/YOUR_REPO_NAME/
   ```
   Replace `/YOUR_REPO_NAME/` with the repository path (e.g. `/dagarealty/`). For a user/organisation page, leave this unset so
   the site builds at the root.
2. Build and deploy:
   ```bash
   npm run deploy
   ```
   The `deploy` script compiles the site and publishes the `dist/` folder to the `gh-pages` branch via [`gh-pages`](https://www.npmjs.com/package/gh-pages).
3. Enable GitHub Pages in the repository settings, pointing to the `gh-pages` branch. Update DNS separately when ready.

## Linting & production build

```bash
npm run lint
npm run build
```

## Next steps

- Replace the placeholder copy in `src/data` with the official website text.
- Swap the temporary SVG listing imagery with property photography.
- Update contact details, licence information, and ABN in `src/data/company.js`.
- Adjust the highlight metrics in `Highlights.jsx` to reflect live performance figures.
