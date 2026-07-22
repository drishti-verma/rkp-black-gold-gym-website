# RKP BLACK GOLD GYM

Premium cinematic Next.js website for **RKP BLACK GOLD GYM - The Old Skool Arena**.

## Tech

- Next.js App Router with JavaScript
- React
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Three.js
- Lenis smooth scrolling
- Swiper
- React Hook Form
- Server-side API validation for inquiry/newsletter forms

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, use `npm.cmd` if script execution blocks `npm.ps1`:

```bash
npm.cmd install
npm.cmd run dev
```

## Build

```bash
npm run build
npm run start
```

## Editable content

Most business content lives in `lib/data.js`:

- Phone, address, hours, Google Maps query, Instagram URL
- Navigation and search records
- Membership plans and offer toggle
- Trainers
- Gallery and transformations
- Blog posts
- FAQs

## Environment

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_MAPS_EMBED=
NEXT_PUBLIC_INSTAGRAM_PROFILE=https://www.instagram.com/rkp_blackgold_/
FORM_RATE_LIMIT_WINDOW_MS=60000
FORM_RATE_LIMIT_MAX=5
```

The form API currently validates and accepts inquiries without exposing credentials. To send email, connect a secure server-side provider inside `app/api/inquiry/route.js`; do not put private keys in frontend code.

## Media

Original generated assets are stored in `public/images`:

- `hero-arena.png`
- `bajrangbali-mural.png`
- `training-floor.png`

Replace placeholders with approved real gym photos, verified trainer images and client-approved transformation media before publishing claims.

## Compliance notes

- Pricing is displayed as "Contact for Pricing" until approved rates are supplied.
- Testimonials and transformations avoid fake claims.
- Nutrition and supplement sections include general-guidance disclaimers.
- The Bajrangbali-inspired artwork is treated respectfully and is not overlaid with pricing or promotional buttons.
