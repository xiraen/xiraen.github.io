# XIRAEN — Public Website

Official public landing page for **XIRAEN (XIRA Expert Network)**, maintained in the `xiraen` GitHub organization.

**Website:** https://xiraen.github.io/  
**Telegram bot:** https://t.me/xiraenbot  
**Telegram Mini App (web entry):** https://xiraen-mini-app.xiraen.workers.dev/

## Purpose

Explain the XIRAEN product and its long-term direction accurately to public visitors. The currently available XIRAEN experience is a Telegram Mini App combining:

- **Stream:** a social feed with profiles, posts, replies and following.
- **AI:** a native single-model assistant with consent and quota controls.
- **XIRA Energy:** internal non-transferable service credits, **not** cryptocurrency.

The idea of routing one question to multiple specialist AI agents, independently checking their results, and returning one verified response is **a product vision, not a production capability**. The multi-model network, automated fact verification and paid AI metering must not be presented as live.

## Implementation

- Static, dependency-free GitHub Pages website: `index.html` and `favicon.svg`.
- Responsive design, keyboard navigation, reduced-motion support, accessible mobile navigation, Open Graph metadata and basic search engine metadata.
- No analytics, cookies, external scripts, build dependencies, or user data collection in this repository.
- All product references are based on the main XIRAEN project's `README.md`, `VISI_XIRAEN.md`, and `docs/XIRA-ENERGY.md` as inspected on 13 November 2026.

## Publishing

This repository is named `xiraen.github.io` and GitHub reports Pages enabled. The intended publishing location is https://xiraen.github.io/ . When editing from GitHub, confirm **Settings → Pages** publishes the root of the `main` branch and verify the successful deployment before describing the site as live.

No build step is needed. Edit `index.html` directly and commit to the publishing branch. Keep descriptions of roadmap features separate from verified live capabilities.
