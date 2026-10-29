# 03 · Decision record

- **Status:** completed
- **Date:** 2026-10-29
- **Decision owner:** Bina (for Herock Nigeria Ltd)
- **Next:** [04 · Implementation](04-implementation.md)

## Desired end state

Someone searching `herock nigeria`, or `herock` from Nigeria, finds the new Herock Nigeria website, with a correct brand panel and the right contact details, and the site is set up to grow into category searches over the following months.

## Authorisation

| Phase | State | Source |
| --- | --- | --- |
| On-site implementation in the repo | Granted | "please carry out a coordinated seo implementation … begin" |
| Release to production (Vercel, main branch) | Granted | Same request; standing practice in this project is to deploy to production |
| Provider operations (Search Console, Bing, Business Profile, DNS, adding the domain in Vercel) | **Not granted yet** | These need Bina's accounts or approval; listed in [06](06-owner-actions.md) |

## Decisions

1. **The canonical home of the site will be `https://www.herocknigeria.com`.** It already carries Herock's search history. Until DNS moves, the site keeps `herocknigeria.vercel.app` as its canonical, and switching is one setting (`NEXT_PUBLIC_SITE_URL`).
2. **Old WordPress addresses redirect permanently** to their closest new page, set up in advance so the move does not break links.
3. **Structured data identifies the company and website** with the names people search (`Herock`, `Herock Nigeria`, `Herock Nigeria Limited`) and lists the group companies. No registration number, opening hours or ratings are published until confirmed.
4. **Markdown copies of every page** are published at `/md/*.md` with `/llms.txt` and `/sitemap.md` as guides. They are generated from the same content as the pages and point search engines back to the HTML page as canonical. This is a convenience for AI tools; it is not a ranking lever.
5. **Equipment leasing stays off the site** (not in the 2026 profile); the old leasing URL redirects to the training and manpower page.

## Acceptance criteria

- Build, type check and lint pass.
- All 8 pages keep one H1, a unique title and description, and a self-referencing canonical.
- Structured data parses as valid JSON-LD with an Organization and a WebSite.
- robots.txt keeps `Allow: /` and its `Sitemap:` line; sitemap.xml lists the same 8 URLs.
- Every Markdown copy returns 200 with `text/markdown; charset=utf-8` and a canonical `Link` header.
- Old WordPress paths return a permanent redirect to the mapped page.

## Rollback

Revert the commit on `main` (Vercel redeploys the previous build in about a minute), or promote the previous production deployment in Vercel. No data or external accounts are touched by this release.
