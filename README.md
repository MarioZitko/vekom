# Vekom — Website (Next.js + TypeScript + ShadCN UI)

A production website for Vekom (concrete building elements) — built to showcase a modern, accessible, and maintainable frontend implementation using Next.js, TypeScript and ShadCN UI. This repo is also a portfolio piece demonstrating component design, theming, accessibility, and practical integrations (email API, cookie consent, light/dark mode).

## Tech stack

- Next.js (App Router) — see [`src/app/layout.tsx`](src/app/layout.tsx)
- TypeScript
- Tailwind CSS — config: [`tailwind.config.ts`](tailwind.config.ts)
- ShadCN / Radix UI components — examples: [`src/components/ui/button.tsx`](src/components/ui/button.tsx), [`src/components/ui/carousel.tsx`](src/components/ui/carousel.tsx)
- Embla carousel + autoplay plugin (image carousels)
- Sonner for toast notifications — [`src/components/ui/sonner.tsx`](src/components/ui/sonner.tsx)

## What to look at (highlights)

- Home + component demo: [`src/app/page.tsx`](src/app/page.tsx) (uses [`CardWithCarousel`](src/components/custom/CardWithCarousel.tsx))
- Themed layout & global data loading: [`src/app/layout.tsx`](src/app/layout.tsx)
- Header / navigation: [`Header`](src/components/custom/Header.tsx) (`NavigationMenu` lives in [`src/components/ui/navigation-menu.tsx`](src/components/ui/navigation-menu.tsx))
- Reusable UI primitives: Button, Card, Dialog, Input, Textarea in [`src/components/ui/`](src/components/ui/)
  - [`Button`](src/components/ui/button.tsx)
  - [`Card`](src/components/ui/card.tsx)
  - [`Dialog`](src/components/ui/dialog.tsx)
  - [`Carousel` components](src/components/ui/carousel.tsx)
- Product pages & carousels: [`src/app/proizvodi/[slug]/[product]/page.tsx`](src/app/proizvodi/[slug]/[product]/page.tsx)
- Data loader used across pages: [`parseData`](src/lib/parseData.ts)
- Utility for classnames: [`cn`](src/lib/utils.ts)
- Theming variables: [`src/app/globals.css`](src/app/globals.css) + [`tailwind.config.ts`](tailwind.config.ts)
- Contact flow (client form + email API): form UI [`ContactDialog`](src/components/custom/ContactDialog.tsx) and server route [`src/app/api/send-email/route.ts`](src/app/api/send-email/route.ts)
- Cookie consent & preferences: [`CookieBanner`](src/components/custom/CookieBanner.tsx)
- Dark mode toggle: [`DarkModeToggle`](src/components/custom/DarkModeToggle.tsx)

## Run locally

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build
# Optional postbuild (sitemap/robots generation as used in this project)
npm run postbuild
```

Files you will use directly:

- Project config: [`package.json`](package.json), [`next.config.ts`](next.config.ts)
- Global styles & tokens: [`src/app/globals.css`](src/app/globals.css)
- Tailwind config: [`tailwind.config.ts`](tailwind.config.ts)

## How this showcases my skills

- Component-driven architecture: modular UI in [`src/components/ui/`](src/components/ui/) and feature components in [`src/components/custom/`](src/components/custom/)
- Theming & accessibility: CSS variables in [`src/app/globals.css`](src/app/globals.css) and accessible Radix primitives in dialogs, menus and accordions
- Client/server integration: contact form posts to [`src/app/api/send-email/route.ts`](src/app/api/send-email/route.ts)
- Performance & UX: optimized Image usage (`next/image`) on galleries and carousels (`src/components/ui/carousel.tsx`)
- Real-world concerns: cookie preferences, dark mode persistence, responsive design across layouts and components

## Customize / Extend

- Add components with shadcn-ui generator (project already organized): components live in [`src/components/ui/`](src/components/ui/)
- Update theme tokens in [`src/app/globals.css`](src/app/globals.css) and map into Tailwind in [`tailwind.config.ts`](tailwind.config.ts)
- Data: static JSON used by parser `parseData` in [`src/lib/parseData.ts`](src/lib/parseData.ts) (place files in `src/data/`)

## Deployment

Recommended: Vercel (App Router support, automatic edge builds). Example: link this repo and deploy with `vercel`.

## License

MIT — feel free to reuse patterns and components for other projects.
