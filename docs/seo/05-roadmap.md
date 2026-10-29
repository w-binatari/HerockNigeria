# 05 · Roadmap

- **Status:** active
- **Start:** 2026-10-29
- **Owner:** Claude (site work), Bina (items O1–O10 in [06](06-owner-actions.md))

Rankings follow from the work below over weeks to months. Nothing here guarantees a position; each stage has a check so we know whether it is working.

## Week 0 (done, 2026-10-29)

- Baseline audit, query ownership, on-site fixes, structured data, redirects for the old site, llms.txt and Markdown copies. See [04](04-implementation.md).

## Week 1: move the domain and start measuring

| Who | Task | Depends on |
| --- | --- | --- |
| Bina | O1 DNS access, O2 Search Console, O4 remove new.herocknigeria.com | — |
| Claude | Run the [domain move](07-domain-migration-runbook.md), switch `NEXT_PUBLIC_SITE_URL`, verify redirects and canonicals live | O1 |
| Claude | Record the first Search Console baseline: brand queries, impressions, clicks, indexed pages | O2 |

**Check:** www.herocknigeria.com serves the new site; all 8 pages "Indexed" in Search Console within about two weeks.

## Weeks 2–3: confirm the entity

| Who | Task |
| --- | --- |
| Bina | O3 Business Profile, O5 social profiles and LinkedIn, O6 sister-site links, O8 confirm facts |
| Claude | Add confirmed facts to structured data (registration number, hours, LinkedIn in `sameAs`); add breadcrumb structured data on inner pages; check the site name shown in Google |

**Check:** `herock nigeria` shows only Herock-owned results on page one; Business Profile verified.

## Weeks 3–6: authority and citations

| Who | Task |
| --- | --- |
| Bina | O9 directory clean-up and industry listings |
| Claude | Track new links (with O7 data), fix any mismatched details found, review Search Console for crawl or indexing problems |

**Check:** `herock` searched from Nigeria shows herocknigeria.com on page one; brand panel appears (often takes longer).

## Weeks 4–12: category content

| Who | Task |
| --- | --- |
| Bina | O10 project write-ups, photos and permissions |
| Claude | Projects / case studies page; one page per QHSE course with who it is for, duration and outcomes (needs real details); a Port Harcourt manpower supply page if the business wants that market; keyword research against real volumes once O7 is in place |

**Check:** impressions growing for non-brand queries such as "hse training port harcourt" and "manpower supply companies in port harcourt".

## Monthly from month 3

- Search Console review: queries, pages, indexing, Core Web Vitals.
- One new piece of real content (project, course, news) a month.
- Re-run brand checks; update [01](01-baseline-audit.md) with dated results rather than overwriting them.

## Measurement

| Measure | Source | First baseline |
| --- | --- | --- |
| Brand query impressions, clicks, position | Search Console | After O2 |
| Indexed pages, crawl errors | Search Console | After O2 |
| Local views and calls | Business Profile | After O3 |
| Referring domains | Ahrefs or alternative | After O7 |
| Brand results snapshot | Manual check, dated | 2026-10-29 in [01](01-baseline-audit.md) |

These stay separate; there is no combined score.
