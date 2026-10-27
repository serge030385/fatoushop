import { publicPages, SITE_URL, type PublicPath } from "@/lib/seo";

export function SeoBreadcrumbs({ path }: { path: PublicPath }) {
  const page = publicPages.find((entry) => entry.path === path)!;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.name, item: new URL(path, SITE_URL).toString() }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
