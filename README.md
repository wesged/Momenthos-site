# Momenthos site

Support, privacy policy and user guide for the Momenthos iOS app. Built with [VitePress](https://vitepress.dev) and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The site is served at `https://wesged.github.io/Momenthos-site/`. If the repo name changes, update `base` in `docs/.vitepress/config.mts` and the links in its footer.

## App Store Connect URLs

- Privacy Policy URL: `https://wesged.github.io/Momenthos-site/privacy`
- Support URL: `https://wesged.github.io/Momenthos-site/support`
- Marketing URL (optional): `https://wesged.github.io/Momenthos-site/`
