# AI Usage

## Tools used
- **Antigravity IDE & Assistant**
- **Claude / Gemini 3.7** 

## What I used AI for 
- Designing the editorial Cafe aesthetic (warm cream/terracotta palette, typography pairings, and perforated voucher styling).
- Scaffolding the accessible React component structure with ARIA live regions and keyboard focus management.

## One useful thing AI helped with 
AI drafted a clean sanitization regex pipeline for Indian phone numbers (handling `+91`, leading `0`, and digit bounds) without requiring bloated third-party regex libraries.

## One thing AI got wrong or that I changed
AI initially suggested generic Tailwind dark mode styling with heavy dark backgrounds and standard blue button elements. Since this is an artisanal, warm aesthetic for a physical Cafe, I adjusted the design system to a tailored warm cream, rich espresso text, and terracotta accents. 

## What I personally reviewed
- Confirmed full keyboard navigation (accessible skip-to-content link and explicit focus rings).
- Tested edge-case inputs in `/api/claim` (e.g. empty strings, non-digit characters, short names, dummy numbers like `0000000000`). 
- Verified Next.js 15 production build runs cleanly with zero linting or type errors.
