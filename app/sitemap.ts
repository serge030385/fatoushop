import type { MetadataRoute } from "next";
import { publicPages, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map((page) => ({ url: new URL(page.path, SITE_URL).toString() }));
}
