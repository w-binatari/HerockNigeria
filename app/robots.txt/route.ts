import { siteUrl } from "@/lib/site";

// Written by hand rather than with robots.ts so it can carry the Markdown guide comments.
export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `# Plain-text guide to this site: ${siteUrl}/llms.txt`,
    `# Every page as Markdown: ${siteUrl}/sitemap.md`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
