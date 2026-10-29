# Herock Nigeria SEO: work index

Private working notes for the Herock Nigeria website's search programme. Not served by the site (only `public/` and app routes are). Start here when picking the work back up.

- **Goal:** searching `herock nigeria`, or `herock` from Nigeria, finds the new Herock Nigeria website; then grow into category searches.
- **Started:** 2026-10-29
- **Site:** https://herocknigeria.vercel.app, moving to https://www.herocknigeria.com

## Steps

| Step | Status | Owner | Outcome |
| --- | --- | --- | --- |
| [01 · Baseline audit](01-baseline-audit.md) | completed | Claude | New site absent from brand results; old domain and a stray WordPress subdomain hold them; `herock` alone belongs to a workwear brand |
| [02 · Query ownership](02-query-ownership.md) | provisional | Claude | One owning page per query family; brand track and category track. Needs search data to firm up |
| [03 · Decision record](03-decision-record.md) | completed | Bina | Canonical home is www.herocknigeria.com; implementation and release granted; provider steps pending |
| [04 · Implementation](04-implementation.md) | delivered and verified | Claude | Schema graph, titles, old-site redirects, robots/sitemap comments, llms.txt and Markdown copies |
| [05 · Roadmap](05-roadmap.md) | active | Claude + Bina | Week-by-week plan with checks |
| [06 · Owner actions](06-owner-actions.md) | open | Bina | O1–O10: domain, Search Console, Business Profile, profiles, links, facts, data access, content |
| [07 · Domain move runbook](07-domain-migration-runbook.md) | in progress | Bina + Claude | Domains added in Vercel; waiting on one DNS change (`www`); mail records untouched by decision |

## Live verification of round 1

Verified live on 2026-10-29; details at the end of this file.

## Coverage of the SEO toolkit (screened 2026-10-29)

The formal ledger validator needs Python 3.11; this machine has 3.9, so this screen is recorded here by hand and is provisional.

| Area | State | Note |
| --- | --- | --- |
| Coordination (seo) | completed | This index |
| Keyword research (seo-research) | completed, provisional | [02](02-query-ownership.md); volumes blocked on O7 |
| AI-search research | not applicable now | No AI-answer evidence requested; revisit once brand is indexed |
| Search measurement (seo-performance) | blocked | Needs O2 Search Console |
| AI visibility monitoring | deferred | Worth a baseline after the domain move |
| Site audit (seo-audit) | completed | [01](01-baseline-audit.md) |
| Page review (seo-page) | completed | Titles, descriptions, H1s, canonicals checked on all 8 pages |
| Technical (seo-technical) | completed | Indexability, robots, sitemap, favicon, redirects, llms.txt |
| Content (seo-content) | partial | Copy is factual; real project content needs O10 |
| Structured data (seo-schema) | completed | Organization + WebSite graph; more after O8 |
| Images (seo-images) | completed | All images have alt text and fixed dimensions (earlier rounds) |
| Sitemaps (seo-sitemap) | completed | XML unchanged in content; sitemap.md added |
| International (seo-hreflang) | not applicable | One language, one country |
| Architecture (seo-architecture) | completed | 8 pages, all linked from header and footer, depth 1 |
| Authority (seo-authority) | blocked | Needs O6, O9 and O7 data |
| Answer readiness (seo-aeo) | partial | Markdown copies give direct answers; no formal audit without research data |
| Entity readiness (seo-geo) | completed for site | Same name, address and phone across site, schema and Markdown; off-site needs O3, O5, O9 |
| Commerce | not applicable | No products sold online |
| Local (seo-local) | blocked | Needs O3 Business Profile |
| Video | not applicable | No video |
| News / Discover | not applicable | No news section yet |
| Agentic journeys | not applicable | No forms or transactions; contact is phone, email, WhatsApp |
| Programmatic | not applicable | 8 hand-written pages |
| Competitor pages | not applicable | Not requested |
| Roadmap (seo-plan) | completed | [05](05-roadmap.md) |
| Action plan (seo-action-plan) | completed | [03](03-decision-record.md), [06](06-owner-actions.md) |
| Implementation (optimise-seo) | completed | [04](04-implementation.md) |

## Live verification, round 1 (2026-10-29, commit 119155c)

Checked on https://herocknigeria.vercel.app about 30 seconds after release:

- robots.txt, sitemap.xml, llms.txt, sitemap.md and all 8 `/md/*.md` copies return 200 with UTF-8 text types; Markdown copies carry `Link: rel="canonical"` to their HTML page.
- The robots `#` comments and the sitemap `<!-- -->` comment survive delivery; robots rules and the 8 sitemap URLs are unchanged.
- All 8 pages: one H1, intended title, self-referencing canonical, JSON-LD graph with Organization and WebSite.
- Old WordPress paths redirect to the mapped page (2 hops for trailing-slash paths, 1 for the PDF).

State: **delivered and verified** on the Vercel address. **Provider outcomes pending**: nothing has been submitted to Google or Bing yet (needs O2), so indexing and rankings are not yet observed.
