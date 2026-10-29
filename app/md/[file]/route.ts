import { htmlUrl, markdownSlug, pageMarkdown } from "@/lib/markdown";
import { pages } from "@/lib/site";

const find = (file: string) => pages.find((page) => `${markdownSlug(page.href)}.md` === file);

export function generateStaticParams() {
  return pages.map((page) => ({ file: `${markdownSlug(page.href)}.md` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const page = find((await params).file);
  if (!page) {
    return new Response("Not found\n", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
  return new Response(pageMarkdown(page), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // The HTML page stays the version search engines should index.
      Link: `<${htmlUrl(page.href)}>; rel="canonical"`,
    },
  });
}
