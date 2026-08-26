# sushen.dev

Personal website for Sushen, built with Eleventy and hosted as static files on Vercel.

## Local development

Install dependencies and start the Eleventy development server:

```sh
npm install
npm run dev
```

Then open <http://localhost:4173>.

## Publishing a field note

1. Copy an existing file in `src/content/notes/`.
2. Set its title, date, tags, reading time, and summary in the front matter.
3. Write the post in Markdown below the front matter.
4. Run `npm run dev` to preview it, then commit and push to `main`.

The note automatically appears on the homepage and is published at `/notes/<filename>/`. Set `draft: true` to keep a note out of production.

Desk entries work the same way in `src/content/desk/`. Homepage identity copy lives in `src/_data/site.json`, and badge/logo entries live in `src/_data/credentials.json`.

## Deployment

Import this GitHub repository into Vercel with the framework preset set to **Other**. `vercel.json` runs `npm run build` and serves the generated `_site` directory. Every push to `main` becomes a production deployment; pull requests receive preview deployments.
