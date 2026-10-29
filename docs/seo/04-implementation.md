# 04 · Implementation (round 1)

- **Status:** implemented locally and released; live verification recorded at the end
- **Date:** 2026-10-29
- **Owner:** Claude
- **Next:** [05 · Roadmap](05-roadmap.md)

## Changes

| Finding | Change | Files |
| --- | --- | --- |
| A1 | The site address comes from `NEXT_PUBLIC_SITE_URL`, falling back to the Vercel address. Canonicals, Open Graph URLs, sitemap, robots, structured data and Markdown copies all follow it. | `lib/site.ts` |
| A5 | Structured data is now one graph: an `Organization` (with `alternateName` Herock / Herock Nigeria / Herock Nigeria Limited, logo, address, contact point, area served, services it knows about, OGTAN membership and the four group companies as `subOrganization`) and a `WebSite` (site name "Herock Nigeria", which Google uses for the site name shown in results). `sameAs` drops any link to the site's own domain after the move. | `lib/site.ts` |
| A6 | Home title: "Herock Nigeria Ltd \| EPC, training and man power supply in Port Harcourt". Home, EPC and training descriptions now say where Herock works. | `app/page.tsx`, `lib/site.ts` |
| A7 | Permanent redirects for the old WordPress paths: `/about` → `/company`, `/e-p-c-engineering-procurement-and-construction` → EPC, `/equipment-leasing-manpower-supply` → training and manpower, `/environmental-circular-economy-services` → environment, `/contact-us` → contact, feeds → home, `/wp-content/uploads/*` → company. | `next.config.ts` |
| — | robots.txt and sitemap.xml are now route handlers so they can carry comments pointing to the Markdown guide. Rules, `Sitemap:` line and URL list are unchanged; `lastmod` comes from one `siteUpdated` date. | `app/robots.txt/route.ts`, `app/sitemap.xml/route.ts` |
| — | `/llms.txt`, `/sitemap.md` and one Markdown copy per page at `/md/<page>.md`, each with a `Link: rel="canonical"` header pointing to its HTML page. Generated from the same content as the pages. | `lib/markdown.ts`, `app/llms.txt`, `app/sitemap.md`, `app/md/[file]` |
| — | The EPC stages, project management topics and research steps moved from the page files into `lib/site.ts`, so the pages and Markdown copies share one source. | `lib/site.ts` and three pages |

## Maintenance rule

When page content changes, edit it in `lib/site.ts` and update `siteUpdated`. If a page has copy written directly in its `page.tsx`, mirror the change in `lib/markdown.ts`. Adding a page means adding it to `pages` in `lib/site.ts` and a body in `lib/markdown.ts`; the sitemap, llms.txt and sitemap.md pick it up.

## Local acceptance (2026-10-29)

- `tsc`, `eslint` and `next build` pass.
- robots.txt keeps `Allow: /` and `Sitemap:`; sitemap.xml lists the 8 pages; comments present.
- `/md/human-capital-development.md` returns 200, `text/markdown; charset=utf-8`, canonical Link header; `/md/nope.md` returns 404.
- `/about/`, `/contact-us`, the old profile PDF path redirect (308) to their mapped pages. Trailing-slash paths take one extra hop, which search engines follow.
- Home title and JSON-LD graph render as intended.

## Live verification

Recorded in [index](index.md) after release.
