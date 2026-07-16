<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:build-agent-rules -->
# BUILD
Our build will use modular components for easier debugging and reusability.
<!-- END:build-agent-rules -->

<!-- BEGIN:frontend-practices -->
# Frontend Development Practices

## Component Architecture
- **One component per file.** Each component lives in `src/app/components/` with a PascalCase filename (e.g., `HeroSection.tsx`).
- **Keep components small and focused.** A component should do one thing well. Split any component that exceeds ~150 lines.
- **Server Components by default.** Only add `"use client"` when the component needs browser APIs, event listeners, `useState`, or `useEffect`. Never add it preemptively.
- **Co-locate related files.** If a component has its own types, constants, or sub-components, place them alongside it in the same directory.

## Styling — Tailwind CSS v4
- **Use `@theme` tokens, not arbitrary values.** All brand colors, fonts, and spacings are registered in `globals.css` under `@theme inline`. Use the generated utility classes (e.g., `bg-adia-violet`, `text-adia-gold`) rather than hardcoded hex values.
- **Never use inline `style={{}}` for colors or spacing** that are part of the design system. Reserve inline styles only for truly dynamic values (e.g., computed widths from JS).
- **Responsive design is mobile-first.** Write base styles for mobile, then override with `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- **Prefer `clamp()` for fluid typography.** Use `text-[clamp(1rem,2.5vw,1.5rem)]` for headings that scale gracefully across viewport sizes.
- **Avoid fixed margins.** Do not use fixed margins so that the layout remains dynamic and responsive across different screen sizes, unless decided otherwise.

## Typography
- **Use the brand font variable.** Always reference the font via `font-[family-name:var(--font-cormorant)]` (or the equivalent CSS variable once Moara is installed). Never hardcode `font-family` strings in JSX.
- **Maintain a clear type hierarchy.** One `<h1>` per page. Use `<h2>` for section headings, `<h3>` for card headings, `<p>` for body text.
- **Generous letter-spacing for display text.** Luxury brand headings should use `tracking-widest` or custom `tracking-[0.25em]` to reinforce the premium feel.

## Images
- **Always use `next/image`** (`import Image from "next/image"`). Never use `<img>` tags directly.
- **Always provide `alt` text** that describes the image content meaningfully. Empty `alt=""` is only acceptable for purely decorative images.
- **Use `priority` on above-the-fold images** (e.g., the hero portrait) to prevent LCP delay.
- **Use `fill` + `object-cover`** for images that must fill a container; provide explicit `width` and `height` for fixed-size images.
- **Store static assets in `public/`.** Images go in `public/images/`, fonts in `src/app/fonts/`.

## Navigation & Links
- **Always use `next/link`** (`import Link from "next/link"`) for internal navigation. Never use raw `<a href>` for internal routes.
- **Use raw `<a>` only for external links**, and always include `target="_blank" rel="noopener noreferrer"`.

## Accessibility (a11y)
- **Every interactive element must be keyboard-focusable** and have a visible focus ring (use Tailwind's `focus-visible:ring-*` utilities).
- **Use semantic HTML.** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` — never a `<div>` where a semantic element fits.
- **Label all nav elements** with `aria-label` (e.g., `aria-label="Primary navigation"`).
- **Buttons that only contain icons** must have `aria-label` text.
- **Color contrast.** Ensure text against backgrounds meets WCAG AA (4.5:1 for normal text, 3:1 for large text). The `adia-gold` on `adia-violet` and `adia-cream` on `adia-violet` pairings are pre-approved.
- **Button & CTA Readability.** Always ensure buttons and critical text avoid excessively light font weights (`font-light`). Use `font-medium` or `font-semibold` with solid colors (like `text-black` or `text-adia-charcoal`) instead of light or transparent styles to ensure maximum contrast and readability.

## Performance
- **Lazy-load below-the-fold images** (Next.js `<Image>` does this by default — do not override with `loading="eager"` unless the image is above the fold).
- **Avoid layout shift.** Always provide `width` + `height` or use `fill` on `<Image>` components.
- **Minimize `"use client"` boundaries.** Each client component adds to the JS bundle. Push interactivity as low in the tree as possible.
- **Do not import heavy libraries for small tasks** (e.g., don't import all of `lodash` for one utility function).

## State & Data
- **Prefer Server Components for data fetching.** Use `async/await` directly in Server Components rather than `useEffect` + `useState` for API calls.
- **Use `useState` and `useEffect` only when necessary** (scroll listeners, toggling UI state, form inputs).
- **Never fetch data in Client Components** unless it is truly user-triggered (e.g., search-as-you-type). Use React Server Components + `fetch` for initial data.

## Code Quality
- **No magic numbers.** Extract repeated values into named constants or CSS tokens.
- **Descriptive `id` attributes on key elements.** Every major section and interactive element should have a unique, descriptive `id` (e.g., `id="hero-cta-primary"`) to aid testing and analytics.
- **Meaningful variable and function names.** Avoid `data`, `item`, `temp`, `x`. Use names that describe intent.
- **No commented-out code** in committed files unless it serves as documentation with a clear explanation.
- **TypeScript strict mode is on.** All props must be typed. Never use `any` — use `unknown` and narrow the type if needed.

## Copywriting & Naming
- **French Elegance.** When appropriate, recommend alternative French names for design elements, component names, or UI copy to add a more elegant appeal and feel. Do not automatically apply them to everything; propose them to the user first for approval or denial.

## File & Folder Conventions
```
src/
  app/
    components/     ← Shared UI components (PascalCase)
    fonts/          ← Local font files
    (routes)/       ← Page routes follow Next.js App Router conventions
    globals.css     ← Global styles & @theme tokens
    layout.tsx      ← Root layout (font, metadata)
    page.tsx        ← Home page
public/
  images/           ← Static image assets
```
<!-- END:frontend-practices -->