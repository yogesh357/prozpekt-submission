# AI Usage

## Tools used
- **Antigravity IDE & Assistant**
- **Claude / Gemini 3.7**
- **21st AI & Modern Component References**

## What I used AI for
- Brainstorming the mobile-first hierarchy to answer the 5 essential in-store customer questions above the fold.
- Designing the editorial Cafe aesthetic (warm cream/terracotta palette, typography pairings, and perforated voucher styling).
- Scaffolding the accessible React component structure with ARIA live regions and keyboard focus management.
- Writing the Next.js App Router API Route Handler with input validation and idempotent voucher retrieval logic.

## One useful thing AI helped with
AI generated the initial boilerplate for the perforated voucher ticket styling (`.ticket-edge-left`, `.ticket-edge-right`) and drafted a clean sanitization regex pipeline for Indian phone numbers (handling `+91`, leading `0`, and digit bounds) without requiring bloated third-party regex libraries.

## One thing AI got wrong or that I changed
AI initially suggested generic Tailwind dark mode styling with heavy dark backgrounds and standard blue button elements. Since this is an artisanal, warm aesthetic for a physical Cafe, I adjusted the design system to a tailored warm cream (`#FAF7F2`), rich espresso text (`#1F1A17`), and terracotta accents (`#D96B27`). Additionally, AI initially set the copy-to-clipboard timeout without error handling for browser permission boundaries, which I refactored to include try/catch fallbacks and clear visual state changes.

## What I personally reviewed
- Verified that all form fields include semantic HTML `<label>` elements linked via `htmlFor`/`id` pairs.
- Checked color contrast compliance across text and background layers to meet WCAG AA standards.
- Confirmed full keyboard navigation (accessible skip-to-content link and explicit focus rings).
- Tested edge-case inputs in `/api/claim` (e.g. empty strings, non-digit characters, short names, dummy numbers like `0000000000`).
- Validated that `prefers-reduced-motion` is strictly respected before triggering canvas confetti animations.
- Verified Next.js 15 production build runs cleanly with zero linting or type errors.
