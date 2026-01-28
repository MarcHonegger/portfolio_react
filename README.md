# Marc Honegger — Personal Portfolio (Vite + React)

This is a small personal portfolio site built with React + Vite (TypeScript). It is intentionally minimal and readable: a single-page landing with a few detail pages for personal topics and project notes.

Purpose

- A personal portfolio to share who Marc is, what he cares about, and short notes on projects and personal practice.
- Minimal, calm, and responsive layout with a focus on clarity over marketing language.

Tech stack

- React (TypeScript)
- Vite
- React-Bootstrap used for layout components
- Lightweight SPA router: `src/Router.tsx` and `src/utils/navigate.ts`

Quick start

1. Install dependencies

   ```bash
   npm install
   ```

2. Start dev server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   ```

4. Preview production build

   ```bash
   npm run preview
   ```

Important files & structure

- `index.html` — Vite entry
- `src/main.tsx` — app bootstrap
- `src/App.tsx` — landing page and main page sections
- `src/Router.tsx` — simple client router mapping paths to pages
- `src/utils/navigate.ts` — SPA navigation helper (handles hash fragments & smooth scroll)
- `src/components/NavBar.tsx` — top navigation
- `src/components/DetailPageLayout.tsx` — layout for personal detail pages
- `src/components/ProjectPageLayout.tsx` — layout for project detail pages
- `src/pages/personal/*` — personal detail pages (journaling, sport, coffee)
- `src/pages/projects/*` — project detail pages
- `public/assets/` — profile images and assets

Routing & "Back" behaviour

- Landing page cards have stable slug ids (e.g., `#journaling`, `#risk-signal-automator`).
- Detail pages pass a `backTo` prop (e.g., `/personal/journaling`) so the Back button maps to `/#<slug>` and scrolls to the matching card on the landing page.

Git & GitHub

- This repository was initialized locally and a remote `origin` was added for `git@github.com:MarcHonegger/portfolio_react.git`.
- To push via SSH, ensure you have an SSH key added to your GitHub account (or generate a new key and add it to GitHub).

Customizations

- Replace profile images in `public/assets/` (`profile.jpeg`, `big_profile.jpeg`).
- Update footer links in `src/App.tsx` for LinkedIn and GitHub.
- Edit copy in `src/App.tsx` and `src/pages/*` as needed.

Accessibility & small UX notes

- Cards are keyboard-navigable and use client navigation.
- Back buttons use client-side navigation and try to preserve the user's scroll position to the related card.

Want me to add more?

- I can add icons to footer links, improve keyboard accessibility (tabindex and aria labels), or add CI (GitHub Actions) to build on push — tell me which and I’ll add it.

License

- No license file included; add one if you plan to publish this repository.

---

If you'd like the README shorter or tailored for a deploy target (Vercel/Netlify/GitHub Pages), tell me which and I'll update it.
