# Morrow Cafe — In-Store Campaign Experience

A mobile-first, high-converting campaign landing experience built for **Morrow Cafe** (Sector 104, Noida). When customers scan a QR code inside the Cafe, they land on a fast, clear, and tactile digital voucher experience to claim **₹150 OFF** their visit.

---

## 🚀 Live Demo & Repository
- **Live URL**: https://prozpekt.vercel.app/
- **Repository**: https://github.com/yogesh357/prozpekt-submission

---

## 🛠️ Tech Stack & Rationale

- **Framework**: **Next.js 15 (App Router)** + **React 19** + **TypeScript**
  - *Why*: Fast Server-Side Rendering, automatic font optimization with zero layout shift (`next/font`), built-in Route Handlers (`/api/claim`) matching the exact backend contract, and seamless zero-configuration deployments.
- **Styling**: **Tailwind CSS v4**
- **Icons**: **Lucide React** (tree-shaken, zero runtime bloat).
---

## 📐 Key Technical Decisions

1. **Mobile-First In-Store Funnel**:
   - Customers arrive via a table QR scan on mobile networks. The page answers the 5 critical questions (*What is this? What am I getting? Why claim? What do I do? What happens after?*) in under 3 seconds.
2. **Accessible Form Engineering**:
   - Explicit labels, `aria-invalid`, `aria-describedby`, and `role="alert"` live regions for screen readers.
3. **Idempotent API Contract (`POST /api/claim`)**:
   - Implemented exact JSON schema specifications:
     - Request: `{ "name": "...", "phone": "..." }`
     - Success: `{ "success": true, "claimCode": "MORROW-XXXX", "message": "..." }`
     - Error: `{ "success": false, "message": "..." }`
   - **Idempotency**: If a patron re-submits with the same phone number, it safely returns their previously generated voucher code rather than throwing a confusing error.
4. **Interactive Digital Pass UI**:
   - Perforated ticket styling, clear typography, one-tap clipboard copy with visual feedback, and instant Google Maps directions.
  
### Decision 2: Beyond the Happy Path (Scaling to Thousands of Users)
> *Selected Areas: 1) Spam & Abuse, 2) Duplicate Claims, 3) Rate Limiting.*

1. **Spam & Abuse Prevention**:
   - **Honeypot Field**: Add an invisible field hidden with CSS. Automated bots fill it out; legitimate users do not. If populated, silently drop or reject the submission.
   - **Cloudflare Turnstile**: Integrate zero-friction invisible challenge (CAPTCHA-free) to verify genuine human mobile traffic without adding friction to the ordering experience.
2. **Duplicate Claims from Same Phone Number**:
   - **Idempotent Voucher Retrieval**: Store unique normalized phone hashes (e.g. SHA-256 + salt) in Redis/PostgreSQL with a unique constraint. If a customer enters their number a second time, return their existing active voucher rather than creating duplicate discount codes.
   - **POS Redemption Sync**: Mark the voucher code as `REDEEMED` in the Cafe’s POS or database upon checkout to prevent re-use of the same code.
3. **Endpoint Rate Limiting & Resilience**:
   - **Token Bucket / IP Sliding Window**: Use Redis via Upstash or Cloudflare Workers rate limiting (e.g., maximum 5 requests per minute per IP) to block brute-force voucher generation scripts.
   - **Circuit Breaker**: If downstream services experience latency spikes, gracefully fallback to signed JWT voucher tokens that can be verified offline at the billing counter.

---

## ⏱️ Approximate Time Spent
- **Total Time**: ~2.5 hours
  - Architecture & Project Scaffolding: 20 mins
  - Component Architecture & UI/UX Styling: 60 mins
  - API Route, Validation & State Management: 45 mins
  - Testing, Accessibility, Performance & Documentation: 20 mins
