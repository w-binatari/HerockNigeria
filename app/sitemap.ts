import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.href === "/" ? "" : page.href}`,
    lastModified: "2026-10-24",
  }));
}
