<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# This is a template for German craftsmen sites

This repo is the starter template that gets cloned for each new Handwerksbetrieb website. Audience and SEO are tuned for German craftsmen targeting customers in Germany.

**First task on any cloned instance:** open `.agents/product-marketing-context.md` and replace every `TODO` with real project details (trade, location, services, proof points, Impressum data) before generating copy, SEO, or marketing pages. The marketing skills (`copywriting`, `programmatic-seo`, `seo-audit`) read this file before asking the user — stale `TODO`s will leak into output.

If the user starts a marketing/copy/SEO task and the file still contains `TODO`s in load-bearing sections, prompt them to fill those in (or fill in the obvious ones from context) before proceeding.
