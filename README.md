# Marc Honegger — Personal Portfolio

Minimal personal portfolio built with React and Vite. The site is a single-page landing with a few focused detail pages for personal topics and selected projects.

Tech

- React (TypeScript)
- Vite
- React-Bootstrap

Quick start

1. Install dependencies

   ```bash
   npm install
   ```

2. Start development server

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

Project layout (key files)

- `index.html` — Vite entry
- `src/main.tsx` — app bootstrap
- `src/App.tsx` — landing page and sections
- `src/Router.tsx` — simple client-side router
- `src/utils/navigate.ts` — SPA navigation helper
- `src/components/` — NavBar and layout components
- `src/pages/` — personal and project detail pages
- `public/assets/` — profile images and static assets

Notes

- Cards on the landing page use stable slug IDs so detail pages can navigate back and scroll to the associated card.
- Update profile images in `public/assets/` and footer links in `src/App.tsx` to match your accounts.