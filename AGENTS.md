<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# This is a template for German craftsmen sites

This repo is the starter template that gets cloned for each new Handwerksbetrieb website. Audience and SEO are tuned for German craftsmen targeting customers in Germany.

**First task on any cloned instance:** open `.agents/product-marketing-context.md` and replace every `TODO` with real project details (trade, location, services, proof points, Impressum data) before generating copy, SEO, or marketing pages. The marketing skills (`copywriting`, `programmatic-seo`, `seo-audit`) read this file before asking the user — stale `TODO`s will leak into output.

If the user starts a marketing/copy/SEO task and the file still contains `TODO`s in load-bearing sections, prompt them to fill those in (or fill in the obvious ones from context) before proceeding.

# Creating a blog article

The blog is wired up as MDX. Each post is a single `.mdx` file in `content/blog/`. The filename is the URL slug (`content/blog/dachreinigung-kosten.mdx` → `/blog/dachreinigung-kosten`). The index at `/blog` and the per-post route at `/blog/[slug]` pick up new files automatically — no registry to update.

**Workflow when the user asks for a new article:**

1. **Confirm the topic and intent** if not obvious. Articles for craftsmen sites should target a real customer search (Ratgeber, Kostenfrage, Projekt-Einblick). If the user gave you a keyword, treat it as the search intent.
2. **Read `.agents/product-marketing-context.md`** before drafting — Gewerk, Standort, Leistungen, Tonalität, Differenzierung. If load-bearing fields are still `TODO`, ask the user to fill them in first.
3. **Draft the body using the `copywriting` skill.** It enforces clarity, specificity, customer language, and the right tone. For SEO-driven topics (Stadt × Leistung pages, ranking-Ratgeber), use `programmatic-seo` instead. After a draft, run `seo-audit` if SEO is the goal.
4. **Write the file as MDX** at `content/blog/<slug>.mdx`. The slug must be lowercase, ASCII, hyphen-separated, and reflect the primary search term in German (e.g. `fassadenanstrich-altbau-berlin.mdx`, not `mein-erster-post.mdx`).
5. **Front-matter is exported as `metadata`** (not YAML — `@next/mdx` doesn't parse YAML frontmatter here). The shape is enforced by `lib/blog.ts` (`PostMetadata`):

   ```mdx
   export const metadata = {
     title: "Fassadenanstrich im Altbau: Worauf es in Berlin ankommt",
     description:
       "Was Altbau-Fassaden in Berlin besonders macht, welche Farben halten und wie ein Festpreis-Angebot zustande kommt.",
     publishedAt: "2026-05-08",      // ISO date — sorts the index, descending
     updatedAt: "2026-05-12",         // optional
     author: "Max Mustermann",        // optional
     tags: ["Fassade", "Altbau"],     // optional
     draft: false,                    // optional — drafts only show in dev
   };

   Body starts here as normal Markdown / MDX.
   ```

   - `title` and `description` are reused as the `<title>` and meta description (see `app/blog/[slug]/page.tsx`). Keep `title` ≤ 60 chars, `description` ≤ 155 chars.
   - **Don't** repeat the H1 in the body — `PageShell` already renders the title from `metadata.title`. Start the body with prose or an `## H2`.
6. **Use the global MDX components** in `mdx-components.tsx` for typography. Internal links work as plain Markdown links (`[Kontakt](/contact)`) and route through `next/link` automatically. For images, drop them in `public/blog/<slug>/...` and reference with `![alt](/blog/<slug>/foo.jpg)`.
7. **End with a soft CTA** to `/contact` or a phone link — the site's primary conversion goals.
8. **Verify** with `bun run dev` (or `next build`) that the new post appears in `/blog` and renders at `/blog/<slug>`.

**Don't** create a page file under `app/blog/` for a new post — the dynamic route handles it. **Don't** add the post to a manual list — the index reads `content/blog/` from disk.
