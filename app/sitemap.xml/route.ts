import { pages, siteUpdated, siteUrl } from "@/lib/site";

// Written by hand rather than with sitemap.ts so it can carry the Markdown guide comment.
export function GET() {
  const urls = pages
    .map((page) => `  <url>\n    <loc>${siteUrl}${page.href === "/" ? "" : page.href}</loc>\n    <lastmod>${siteUpdated}</lastmod>\n  </url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- A Markdown guide to these pages is at ${siteUrl}/sitemap.md and ${siteUrl}/llms.txt -->
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
