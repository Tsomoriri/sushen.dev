# sushen.dev

Personal research and portfolio website built with [Eleventy](https://www.11ty.dev/) and deployed as static files on Vercel.

## Local development

Requirements: Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open <http://localhost:4173>. The development server watches content and templates and rebuilds automatically.

Before pushing a change, run the production build:

```sh
npm run build
```

The generated site is written to `_site/`. That directory is build output and is not committed.

## Writing a Field Note

Create a Markdown file in `src/content/notes/`. Its filename becomes its public URL:

```text
src/content/notes/physics-informed-nowcasting.md
                         ↓
https://sushen.dev/notes/physics-informed-nowcasting/
```

Start with this front matter:

````markdown
---
layout: layouts/note.njk
title: A clear article title
date: 2026-08-26
tags: [machine-learning, research]
readingTime: 5 min
summary: One sentence shown beneath the article title.
sourceUrl: https://www.linkedin.com/posts/...
draft: false
---

Write the article here using Markdown.

## A section heading

Inline code looks like `context.Context`.

```go
func main() {
    fmt.Println("Fenced code blocks are formatted automatically")
}
```
````

Front-matter fields:

| Field | Required | Purpose |
| --- | --- | --- |
| `layout` | Yes | Use `layouts/note.njk` for Field Notes. |
| `title` | Yes | Homepage link and article heading. |
| `date` | Yes | Sort order and published date, in `YYYY-MM-DD`. |
| `tags` | Recommended | Topics associated with the note. |
| `readingTime` | Optional | Human-readable estimate such as `5 min`. |
| `kind` | Optional | Set to `note` for shorter entries; otherwise it is a post. |
| `summary` | Recommended | Short article introduction. |
| `sourceUrl` | Optional | Original LinkedIn post or external source. |
| `draft` | Optional | Set to `true` to exclude the article from production. |

Eleventy automatically adds non-draft notes to the homepage, sorts them newest-first and creates `/notes/<filename>/`. Code blocks receive the site styling and an interactive copy button.

## Other editable content

- Homepage identity and email: `src/_data/site.json`
- Desk/current-work cards: `src/content/desk/*.md`
- Credentials and badge cards: `src/_data/credentials.json`
- Credential images and logos: `assets/`
- Homepage structure and visual styling: `src/index.njk`
- Shareable contact card at `/card/`: `src/card.njk`
- Article layout: `src/_includes/layouts/note.njk`

## CI flow

GitHub Actions runs `.github/workflows/ci.yml` for every pull request and every push to `main`.

```text
push or pull request
        ↓
checkout repository
        ↓
Node.js 22 + npm cache
        ↓
npm ci
        ↓
npm run build
```

A failed dependency installation or Eleventy build makes CI fail. Keep a pull request unmerged until this check passes.

## Vercel deployment flow

Import the GitHub repository into Vercel using:

- Framework preset: **Other**
- Build command: `npm run build`
- Output directory: `_site`
- Production branch: `main`

The build and output values are also declared in `vercel.json`.

```text
feature branch / pull request
        ↓
GitHub Actions build check
        ↓
Vercel preview deployment
        ↓
review preview URL
        ↓
merge to main
        ↓
GitHub Actions build + Vercel production deployment
        ↓
sushen.dev
```

Vercel serves the generated HTML, CSS, JavaScript and images from its CDN. There is no database, server function or runtime CMS.

## Recommended publishing workflow

1. Create a branch: `git switch -c post/article-slug`.
2. Add the Markdown file and preview with `npm run dev`.
3. Validate with `npm run build`.
4. Commit and push the branch.
5. Open a pull request and review its Vercel preview.
6. Merge only after CI passes and the preview looks correct.
7. Vercel deploys the merged `main` commit to production.
