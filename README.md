This is a [Next.js](https://nextjs.org) starter template for **German craftsmen websites** (Handwerksbetriebe). Audience, copy guardrails, and SEO defaults are tuned for trades targeting customers in Germany.

## First-run checklist (after cloning)

Do these before generating any copy, SEO, or marketing pages:

1. **Fill in `.agents/product-marketing-context.md`** — replace every `TODO` with the real Betrieb's details (Gewerk, Standort, Leistungen, Meisterstatus, Impressum-Daten). The marketing skills read this file before asking the user; stale `TODO`s will leak into output.
2. **Update site metadata** in `app/layout.tsx` (title, description) and replace the placeholder home page in `app/page.tsx`.
3. **Replace placeholder proof points** (the "12+ years / 200+ clients" stats and "Anna R."-style testimonials are filler — remove or replace with real ones).
4. **Add legal pages** — `/impressum` (§5 TMG) and `/datenschutz` (DSGVO) are non-negotiable for German sites.
5. **Set up Google Business Profile** and link it from the footer; for craftsmen sites it's the single most important SEO asset.
6. **Seed the blog** — delete the placeholder `content/blog/willkommen.mdx` and add the first real articles (Ratgeber, Kostenfragen, Projekt-Einblicke). See the *Creating a blog article* section in `AGENTS.md` for slug rules and the `metadata` shape, or ask the agent to draft posts using the `copywriting` / `programmatic-seo` skills.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
