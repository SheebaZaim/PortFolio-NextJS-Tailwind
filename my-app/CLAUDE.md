# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `PortFolio-NextJS-Tailwind/my-app/`:

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (ESLint is disabled during builds via next.config.mjs)
npm run lint     # Run ESLint manually
npm run start    # Start production server after build
```

There are no tests in this project.

## Architecture

This is a **Next.js 14 App Router** portfolio site using TypeScript and Tailwind CSS.

### Data layer — single source of truth

`src/constant/index.tsx` is where all content lives:
- `NAV_LINKS` — drives the Navbar and mobile menu
- `SKILLS` — drives the Skills page grid
- `PROJECTS` — drives the Projects page cards (includes `vercelLink`, `videoUrl`, `tags`)
- `SOCIAL` — drives the Footer social icons

**To update site content (text, links, projects), only edit this file** — components read from it automatically.

### Page/component structure

- **`src/app/layout.tsx`** — root layout; renders `<Navbar>` and `<Footer>` around every page. The home page (`page.tsx`) also renders them explicitly, which means they render twice on `/` — be aware of this duplication.
- **`src/app/page.tsx`** — home page, assembles all sections (Hero → About → Skills → Projects → Contact → Footer).
- **`src/app/components/`** — shared components: `Hero`, `Navbar`, `Footer`, `SocialLink`.
- **`src/app/Button/Button.tsx`** — reusable button; `variant` prop maps directly to a CSS class defined in `globals.css` (e.g. `btn_blue`, `btn_dark_rounded`).
- Each route (`/About`, `/Skills`, `/Projects`, `/Contact`) is a `page.tsx` inside its own folder under `src/app/`.

### Styling

- Tailwind utility classes are used inline throughout components.
- Custom utilities and button variants are defined in `src/app/globals.css` under `@layer utilities`.
- Custom Tailwind breakpoints (`xs`, `3xl`, `4xl`) and colors (`gray-10..90`, `green-50/90`) are in `tailwind.config.ts`.
- Color theme: indigo/violet for AI/tech sections, teal for education stats, amber for achievements.

### Images

Static images are in `public/Images/` (capital I). Always reference as `/Images/filename.ext` — lowercase `/images/` paths will fail on case-sensitive filesystems (Linux/Vercel).

### Project video/Vercel links

In `PROJECTS` inside `src/constant/index.tsx`, set `vercelLink` to the deployed URL and `videoUrl` to a YouTube embed URL (e.g. `https://www.youtube.com/embed/VIDEO_ID`). The Projects page renders an `<iframe>` when `videoUrl` is non-empty, or a placeholder when it is empty.
