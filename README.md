# Veloxa

A Next.js 14 storefront for buying and renting bikes — built to replace a
WordPress/WooCommerce bike-shop theme with a custom, brand-owned stack.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Prisma + Postgres ·
Stripe Checkout · NextAuth (scaffolded) · Zustand (cart state) · react-day-picker
(rental availability calendar)

## What's built

- Home, Shop (with type/category/brand filters), Product detail
- Rental booking calendar (date range, blocked-date awareness) + Buy box
- Cart drawer + full cart page (Zustand, persisted to localStorage)
- Checkout → Stripe Checkout Session → success page
- Prisma schema modeling Products, Categories, Brands, RentalBooking,
  BlockedDate, Order, OrderItem, User
- API routes: `/api/checkout` (Stripe session), `/api/bookings` (rental
  reservation + date blocking), `/api/webhooks/stripe` (marks orders paid),
  `/api/register` (create account), `/api/auth/[...nextauth]` (credentials
  sign-in, JWT sessions, Prisma-backed)
- Account page: real sign up / sign in / sign out via NextAuth, backed by
  bcrypt-hashed passwords in Postgres
- Blog (list + post), Dealers directory + dealer application form,
  About, Contact

Product/blog/dealer data currently lives in `src/lib/data.ts` as typed mock
data so the site runs immediately without a database. Swap those reads for
Prisma queries (`prisma.product.findMany()`, etc.) once your DB is seeded —
the shapes already match the schema.

## 1. Open in VS Code

```bash
cd veloxa
code .
```

Install the recommended extensions if prompted: **Tailwind CSS IntelliSense**,
**Prisma**, **ESLint**.

## 2. Install dependencies

```bash
npm install
```

## 3. Set up environment variables

```bash
cp .env.example .env
```

Fill in:
- `DATABASE_URL` — a free Postgres instance from [Neon](https://neon.tech) or
  [Supabase](https://supabase.com) works well with Vercel
- `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — from your
  [Stripe dashboard](https://dashboard.stripe.com/test/apikeys) (test mode)
- `STRIPE_WEBHOOK_SECRET` — from `stripe listen` locally, or your webhook
  endpoint in the Stripe dashboard once deployed
- `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`

## 4. Set up the database

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Optionally open `npx prisma studio` to add real products, or write a
`prisma/seed.ts` to load the mock data from `src/lib/data.ts`.

## 5. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

To test Stripe webhooks locally:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## 6. Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add the same environment variables from `.env` in the Vercel project
   settings (Settings → Environment Variables). Set `NEXT_PUBLIC_SITE_URL`
   and `NEXTAUTH_URL` to your production domain.
4. Deploy. Vercel auto-detects Next.js — no build config needed.
5. In the Stripe dashboard, add a webhook endpoint pointing to
   `https://your-domain.vercel.app/api/webhooks/stripe`, subscribed to
   `checkout.session.completed`, and copy the signing secret into
   `STRIPE_WEBHOOK_SECRET` in Vercel.

## Next steps to round it out

- Wire `src/lib/data.ts` reads over to Prisma once bikes are seeded in the DB
- Optionally add an OAuth provider (Google, etc.) alongside credentials in
  `src/app/api/auth/[...nextauth]/route.ts`
- Replace `MOCK_BLOCKED_DATES` in `booking-calendar.tsx` with a real
  `/api/availability?productId=` fetch backed by `BlockedDate`
- Add an admin view (or use Prisma Studio) for managing inventory and
  reviewing bookings
- Add real blog content via MDX or a headless CMS if the team publishes often
- Swap placeholder Unsplash photography for real product shots once you have
  them
