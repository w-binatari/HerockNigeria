# 07 · Domain move runbook: herocknigeria.com → new site

- **Status:** ready, waiting on DNS access
- **Owner:** Bina (DNS and registrar), Claude (Vercel and verification)
- **Why it matters most:** every search result for Herock today points at herocknigeria.com. Moving the domain to the new site carries that history over; leaving the new site on vercel.app means starting from zero.

## Before you start

- DNS is managed at **hpdns.net** (nameservers ns1–ns4.hpdns.net), domain registered with **Upperlink Limited**, renewal due **4 February 2027**. Renew early or set auto-renew.
- Email runs through MX records at **hostns.io**. **Do not change or delete the MX, SPF, DKIM or other TXT records**, or company email stops.
- Keep the old WordPress hosting for at least 30 days after the move in case anything needs checking.
- Download the old profile PDF if it should be kept (it will redirect to the company page).

## Steps

1. **Claude** adds `www.herocknigeria.com` and `herocknigeria.com` to the Vercel project and sets `herocknigeria.com` to redirect to `www`. (Needs your go-ahead; Vercel will show the exact records.)
2. **You** change only these DNS records at hpdns.net:
   - `herocknigeria.com` (apex, `@`) → **A** record `76.76.21.21` (replace the existing A record 91.238.160.176)
   - `www` → **CNAME** `cname.vercel-dns.com` (replace whatever `www` points to now)
   - Use the values Vercel shows if they differ from these.
3. **Claude** sets `NEXT_PUBLIC_SITE_URL=https://www.herocknigeria.com` for Production in Vercel and redeploys, so canonicals, sitemap and structured data switch to the real domain. The vercel.app address then redirects to www.
4. **You** decide on `new.herocknigeria.com`: delete the DNS record, or point it at Vercel too so it redirects. Do not leave the WordPress copy live.
5. **Claude** verifies: old URLs (`/about/`, `/contact-us/`, etc.) return a permanent redirect to the right new page over HTTPS; sitemap and canonicals show www.herocknigeria.com; email still flows (you send and receive a test).
6. **You** (or Claude with access) in Google Search Console: verify the **Domain property** `herocknigeria.com` by DNS TXT, submit `https://www.herocknigeria.com/sitemap.xml`, and inspect the home page. Bing Webmaster Tools: import from Search Console.

## Rollback

Put the old A record (91.238.160.176) and old `www` record back. DNS changes take from minutes to a few hours to spread.

## What to expect

Google usually reflects a site move within days to a few weeks. Brand searches recover first; expect some movement in the first two weeks. Not guaranteed, and Search Console is how we watch it.
