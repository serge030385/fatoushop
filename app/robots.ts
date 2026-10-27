import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Cart and confirmation routes remain crawlable so their noindex is visible.
      disallow: ["/api/"]
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
