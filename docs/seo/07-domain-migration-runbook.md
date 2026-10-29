# 07 · Domain move runbook: herocknigeria.com → new site

- **Status:** step 1 done (2026-10-29); waiting on the `www` DNS change in step 2
- **Owner:** Bina (DNS), Claude (Vercel and verification)
- **Why it matters most:** every search result for Herock today points at herocknigeria.com. Moving the domain to the new site carries that history over; leaving the new site on vercel.app means starting from zero.

## Where the DNS lives (checked 2026-10-29)

- The .com registry lists the nameservers as **ns1.thenextelgroup.com** and **ns2.thenextelgroup.com**, so the records are edited wherever Herock's hosting with **The Nextel Group** is managed (usually a cPanel "Zone Editor" or the provider's DNS page). An older lookup showed hpdns.net; that was out of date.
- Registrar: **Upperlink Limited**, renewal due **4 February 2027**. Renew early or set auto-renew.

## Owner decision (2026-10-29)

Change website records only; do not touch any mail record. Because `mail` is an alias of the bare domain, the bare domain also stays on the old server. That server already forwards `herocknigeria.com/<path>` to `www.herocknigeria.com/<path>` with a 301 (checked 2026-10-29 for /about/, /contact-us/ and the EPC page), so moving `www` alone is enough.

## Current records (read from ns1.thenextelgroup.com)

| Name | Type | Value | Action |
| --- | --- | --- | --- |
| `www` | CNAME | herocknigeria.com | **Change** (step 2) |
| `new` | A | 91.238.160.176 | Remove, optional (step 2) |
| `herocknigeria.com` | A | 91.238.160.176 | Keep: the old server forwards it to www |
| `mail` | CNAME | herocknigeria.com | Keep |
| `herocknigeria.com` | MX ×3 | entrap-01/02/03.hostns.io | Keep |
| `herocknigeria.com` | TXT | v=spf1 … | Keep |
| `default._domainkey` | TXT | v=DKIM1 … | Keep |
| `webmail`, `cpanel`, `ftp`, `autodiscover`, `autoconfig`, `cpcalendars`, `webdisk` | A | 91.238.160.176 | Keep |

## Steps

1. **Done (Claude, 2026-10-29).** Added `www.herocknigeria.com` (main address) and `herocknigeria.com` to the Vercel project. The bare-domain entry stays unused while its DNS points at the old server.
2. **You, in the DNS zone for herocknigeria.com:**
   - `www`: replace the CNAME `herocknigeria.com` with **CNAME** `89053a5402130a02.vercel-dns-017.com` (the older `cname.vercel-dns.com` also works).
   - Optional: delete the `new` A record so the old WordPress copy at new.herocknigeria.com goes offline.
3. **Claude**, once DNS is visible: confirm Vercel shows www as valid with HTTPS; set `NEXT_PUBLIC_SITE_URL=https://www.herocknigeria.com` for Production and redeploy; redirect `herocknigeria.vercel.app` to www.
4. **Claude** verifies the chain: `herocknigeria.com/about/` → (old server) `www.herocknigeria.com/about/` → (new site) `/company`, and the same for the other old URLs; sitemap, canonicals and llms.txt show www.herocknigeria.com.
5. **Search Console** (you, or Claude with access): verify a Domain property for `herocknigeria.com` with the TXT record Google gives (add it as a new TXT; do not edit the SPF one), submit `https://www.herocknigeria.com/sitemap.xml`, and inspect the home page. Bing Webmaster Tools: import from Search Console.

## What this choice depends on

- **Keep the old hosting account paid and the WordPress install in place.** It now only does one job, forwarding the bare domain to www. If the hosting lapses or WordPress is removed, `herocknigeria.com` without www stops working, though www keeps working.
- The forward costs one extra redirect for anyone who types the bare domain; search engines follow it without trouble.
- Later, if the mail setup is ever reviewed (for example `mail` changed to its own A record), the bare domain can move to Vercel too and the old hosting can be retired.

## Rollback

Put the `www` CNAME back to `herocknigeria.com`. Changes spread within minutes to a few hours (record TTLs are 4 hours).

## What to expect

Google usually reflects a site move within days to a few weeks. Brand searches recover first, and some movement in the first two weeks is normal. Not guaranteed; Search Console is how we watch it.
