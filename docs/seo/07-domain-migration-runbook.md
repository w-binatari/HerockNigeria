# 07 · Domain move runbook: herocknigeria.com → new site

- **Status:** step 1 done (2026-10-29); waiting on the DNS changes in step 2
- **Owner:** Bina (DNS), Claude (Vercel and verification)
- **Why it matters most:** every search result for Herock today points at herocknigeria.com. Moving the domain to the new site carries that history over; leaving the new site on vercel.app means starting from zero.

## Where the DNS lives (checked 2026-10-29)

- The .com registry lists the nameservers as **ns1.thenextelgroup.com** and **ns2.thenextelgroup.com**, so the records are edited wherever Herock's hosting with **The Nextel Group** is managed (usually a cPanel "Zone Editor" or the provider's DNS page). An older lookup showed hpdns.net; that was out of date.
- Registrar: **Upperlink Limited**, renewal due **4 February 2027**. Renew early or set auto-renew.

## Current records (read from ns1.thenextelgroup.com)

| Name | Type | Value | Action |
| --- | --- | --- | --- |
| `herocknigeria.com` | A | 91.238.160.176 | **Change** (step 2b) |
| `www` | CNAME | herocknigeria.com | **Change** (step 2c) |
| `mail` | CNAME | herocknigeria.com | **Change first** (step 2a), or email apps lose their server |
| `new` | A | 91.238.160.176 | Remove (step 2d) |
| `herocknigeria.com` | MX ×3 | entrap-01/02/03.hostns.io | **Keep** |
| `herocknigeria.com` | TXT | v=spf1 … (includes 91.238.160.176) | **Keep** |
| `default._domainkey` | TXT | v=DKIM1 … | **Keep** |
| `webmail`, `cpanel`, `ftp`, `autodiscover`, `autoconfig`, `cpcalendars`, `webdisk` | A | 91.238.160.176 | **Keep** |

## Steps

1. **Done (Claude, 2026-10-29).** Added `www.herocknigeria.com` (main address) and `herocknigeria.com` (308 redirect to www) to the Vercel project. Both show as verified for the project and "waiting for DNS".
2. **You, in the DNS zone for herocknigeria.com, in this order:**
   - a. `mail`: delete the CNAME and add an **A** record `mail` → `91.238.160.176`. This keeps email apps pointing at the mail server.
   - b. Apex (`@` or `herocknigeria.com`): replace the A record `91.238.160.176` with **two A records**: `216.198.79.1` and `64.29.17.1`. If only one is allowed, use `216.198.79.1`. Older alternative accepted by Vercel: `76.76.21.21`.
   - c. `www`: replace the CNAME `herocknigeria.com` with **CNAME** `89053a5402130a02.vercel-dns-017.com` (the older `cname.vercel-dns.com` also works).
   - d. `new`: delete the A record, so the old WordPress copy goes offline.
   - Leave everything else in the table above untouched.
3. **Claude**, once DNS is visible: confirm Vercel shows both domains as valid and HTTPS certificates are issued; set `NEXT_PUBLIC_SITE_URL=https://www.herocknigeria.com` for Production and redeploy, so canonicals, the sitemap and structured data switch to the real domain; redirect `herocknigeria.vercel.app` to www.
4. **Claude** verifies: `/about/`, `/contact-us/`, the old service URLs and the profile PDF path each redirect permanently to their new page over HTTPS; sitemap, canonicals and llms.txt show www.herocknigeria.com.
5. **You** send and receive a test email on an @herocknigeria.com address, and check any email app that uses `mail.herocknigeria.com`.
6. **Search Console** (you, or Claude with access): verify a Domain property for `herocknigeria.com` with the TXT record Google gives (add it as a new TXT; do not edit the SPF one), submit `https://www.herocknigeria.com/sitemap.xml`, and inspect the home page. Bing Webmaster Tools: import from Search Console.

## Rollback

Put back the apex A record `91.238.160.176` and the `www` CNAME `herocknigeria.com`. Changes spread within minutes to a few hours (record TTLs are 4 hours).

## What to expect

Google usually reflects a site move within days to a few weeks. Brand searches recover first, and some movement in the first two weeks is normal. Not guaranteed; Search Console is how we watch it.
