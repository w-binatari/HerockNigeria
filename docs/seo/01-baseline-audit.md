# 01 · Baseline audit

- **Status:** completed
- **Date of evidence:** 2026-10-29
- **Scope:** https://herocknigeria.vercel.app (8 pages), the previous site https://www.herocknigeria.com, the subdomain https://new.herocknigeria.com
- **Owner:** Claude (site), Bina (accounts and domain)
- **Next:** [02 · Query ownership](02-query-ownership.md)

## Where Herock appears today (observed, not ranked by Google)

Google results could not be fetched from here without solving a CAPTCHA, and Ahrefs refused every request with "Insufficient plan". The check below used DuckDuckGo (Nigeria, English) on 2026-10-29. Treat it as a directional snapshot only; Google Search Console will be the source of truth once verified.

| Query | What showed | New site present? |
| --- | --- | --- |
| `herock` | Herock Workwear (herockworkwear.com, herock-shop.com, resellers), a European workwear brand, filled the first 10 results | No |
| `herock nigeria` | www.herocknigeria.com, its /about page, new.herocknigeria.com, Instagram, b2bhint, herockenvirotech.com, Facebook, the old contact page and an old profile PDF | No |
| `herock nigeria ltd port harcourt` | Old contact page, old home, b2bhint, businesslist.com.ng, herockenvirotech.com/contact, new.herocknigeria.com, ngex, tracxn | No |

## Findings

| ID | Severity | Finding | Evidence | Owner |
| --- | --- | --- | --- | --- |
| A1 | Critical | The new site lives on a `vercel.app` subdomain while every bit of Herock's search history, links and listings point at herocknigeria.com. The new site competes with the old one instead of inheriting it. | DNS for herocknigeria.com resolves to 91.238.160.176 (LiteSpeed WordPress); registrar Upperlink Limited, expires 2027-02-04; nameservers ns1–4.hpdns.net; MX at hostns.io | Bina: point the domain (see [07](07-domain-migration-runbook.md)) |
| A2 | Critical | A second WordPress copy is public at new.herocknigeria.com ("My Blog – Herock Nigeria") and is indexed for brand queries. It splits signals and looks unfinished. | DuckDuckGo results above; HTTP 200 on 2026-10-29 | Bina: remove it or redirect to the main site |
| A3 | High | Plain `herock` is a shared name. Herock Workwear is a long-established brand with many sites and resellers. Owning page one for `herock` worldwide is not realistic; owning it for searchers in Nigeria, and owning `herock nigeria` everywhere, is. | Results above | Plan in [05](05-roadmap.md) |
| A4 | High | No Google Search Console, Bing Webmaster Tools or Google Business Profile is connected, so nothing is measured and Google has no verified owner for the site. | No verification tokens in the site; no connector available | Bina |
| A5 | Medium | Structured data described a bare Organization with no alternate names, no WebSite entity and no link to the group companies, which are the strongest signals Google uses for the site name and brand panel. | Live JSON-LD on 2026-10-29 | Fixed in [04](04-implementation.md) |
| A6 | Medium | The home title was only "Herock Nigeria Ltd", without what the company does or where. | Live HTML | Fixed in [04](04-implementation.md) |
| A7 | Medium | Old WordPress URLs (/about/, /e-p-c-…/, /contact-us/, the old profile PDF) had no destination on the new site, so their links would break after a domain move. | Old site navigation | Fixed in [04](04-implementation.md) |
| A8 | Low | robots.txt and sitemap.xml were correct. All 8 pages were indexable, canonical, with unique titles, descriptions and one H1. Favicon and Apple icon present. Share image present. | Live checks | No action |
| A9 | Low | Thin third-party directory listings (b2bhint, businesslist.com.ng, ngex, tracxn) carry the old details and no link to the new site. | Results above | Bina, over weeks 2–6 |

## Facts versus inferences

- **Fact:** the old domain and subdomain are live and are what search engines show for Herock today.
- **Fact:** the Vercel address does not appear for any brand query tested.
- **Inference:** pointing herocknigeria.com at the new site with page-level redirects will transfer most of the old site's standing within weeks; this is how Google documents site moves, but timing is not guaranteed.
- **Unknown:** Google's own ranking for these queries, impressions and clicks. Search Console will answer this.
