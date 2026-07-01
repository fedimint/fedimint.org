# fedimint.org

The Fedimint documentation and marketing website, built with [Docusaurus](https://docusaurus.io/).

## Running locally

```bash
npm install
npm run start
```

Opens a dev server at `http://localhost:3000`. Most content changes — markdown edits, config tweaks, CSS — hot-reload instantly without restarting the server. Component or config changes may require a manual browser refresh.

## Verifying your changes

Before opening a PR, run a full build:

```bash
npm run build
```

The build is configured to throw on any broken internal link, so a passing build means the site is internally consistent. This is the most important check to run — the dev server is permissive and won't catch broken links.

If you want to browse the built output exactly as it will be deployed:

```bash
npm run serve
```

## Making changes

Most content lives in markdown files. Edit them directly — the site reflects changes without any compilation step in dev mode.

For the wallets page, wallet data is maintained in a JavaScript source file rather than markdown. Adding or updating a wallet means editing that file and dropping a screenshot image into the appropriate folder alongside it. Follow the pattern of existing entries.

For diagrams, the site uses exported PNG/SVG files as the rendered output. The editable source files (Excalidraw format, opened in Obsidian) live in `figures-src/` and are not deployed. Edit the source there, re-export, and commit the updated PNG/SVG.

## Using Claude Code

Claude Code works well with this repo for content edits, adding wallets, adjusting styles, and modifying page layouts. A few things that are non-obvious:

- **Developers nav link is external.** The Developers item in the navbar points to an external SDK documentation site, not local content. Don't create local docs expecting them to appear under that nav item.
- **Wallets are code, not markdown.** The wallets listing is a React page with data hardcoded in the source. Ask Claude to edit the wallets source file directly rather than creating a markdown file.
- **Diagram sources are separate from outputs.** The `figures-src/` directory contains Excalidraw source files that are not served by the site. Only the exported images in `static/` are deployed. Claude should edit the exported files if making minor tweaks, or flag that a diagram needs re-export from source.
- **Sidebar behavior differs by section.** One docs section auto-generates its sidebar from the filesystem — adding a file is enough. Another is manually ordered in a config file. Ask Claude which applies before adding a new page.
- **Design palette exists but isn't implemented.** `DESIGN.md` at the repo root documents the intended color system with CSS variable names and hex values. The variables are not yet wired into the stylesheet. Claude can use it as a reference when working on styling, but should check what's actually defined in the CSS before referencing a variable.

## Deployment

Deployment is fully automated. Every push to `main` triggers a GitHub Actions workflow that builds the site and publishes it to GitHub Pages. There is no manual deploy step.

PRs run the build for validation but do not deploy. Merging to `main` is the deploy.
