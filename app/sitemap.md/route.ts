import { sitemapMarkdown } from "@/lib/markdown";

export function GET() {
  return new Response(sitemapMarkdown(), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
