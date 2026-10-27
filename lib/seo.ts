import type { Metadata } from "next";

export const SITE_URL = "https://fatoushop.vercel.app";
export const HERO_IMAGE = "/images/ndole-hero.webp";
export const SOCIAL_IMAGE = "/images/fatoushop-social.jpg";

// Only real, public, canonical routes belong in this list. Aliases are excluded.
export const publicPages = [
  { path: "/", name: "Accueil", title: "FatouShop Izmir | Restaurant et boutique africaine", description: "Découvrez FatouShop à Izmir : restaurant africain, plats camerounais, ndolé, poisson braisé, produits alimentaires africains, mèches et perruques." },
  { path: "/boutique", name: "Boutique", title: "Boutique africaine à Izmir | Produits, mèches et perruques", description: "Retrouvez chez FatouShop à Izmir des produits alimentaires africains, épices, plantain, manioc, boissons, mèches et perruques. Commandez sur WhatsApp." },
  { path: "/restaurant", name: "Restaurant", title: "Restaurant africain à Izmir | Cuisine camerounaise FatouShop", description: "Découvrez la cuisine camerounaise de FatouShop à Izmir : ndolé, Poulet DG, poisson braisé et plats maison. Réservez ou commandez à emporter." },
  { path: "/menu-camerounais", name: "Menu camerounais", title: "Menu camerounais à Izmir | Ndolé, Poulet DG et poisson braisé", description: "Explorez le menu camerounais FatouShop à Izmir : entrées, ndolé, Poulet DG, poisson braisé, plantain et plats sur réservation via WhatsApp." },
  { path: "/bar", name: "Bar et boissons", title: "Boissons africaines à Izmir | Bissap et gingembre FatouShop", description: "Découvrez les jus de bissap et de gingembre, boissons africaines et cocktails sans alcool FatouShop à Izmir, dans une ambiance conviviale." },
  { path: "/reservation", name: "Réservation", title: "Réserver une table à Izmir | Restaurant africain FatouShop", description: "Réservez une table ou un plat camerounais à l'avance chez FatouShop à Izmir. Envoyez votre date et le nombre de personnes sur WhatsApp." },
  { path: "/contact", name: "Contact", title: "Contact et localisation à Izmir | FatouShop", description: "Contactez FatouShop à Izmir au +90 531 781 87 95 pour commander ou réserver. Retrouvez la localisation GPS et la carte du restaurant et de la boutique." },
  { path: "/a-propos", name: "À propos", title: "À propos de FatouShop | Boutique et restaurant africain à Izmir", description: "Découvrez FatouShop à Izmir : boutique de produits africains, cuisine camerounaise familiale et lieu de rencontre convivial en Turquie." }
] as const;

export type PublicPath = (typeof publicPages)[number]["path"];

export function pageMetadata(path: PublicPath): Metadata {
  const page = publicPages.find((entry) => entry.path === path)!;
  const url = new URL(page.path, SITE_URL).toString();
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "FatouShop",
      locale: "fr_FR",
      type: "website",
      images: [{ url: new URL(SOCIAL_IMAGE, SITE_URL).toString(), width: 1200, height: 630, alt: "Ndolè camerounais, poisson et plantain chez FatouShop à Izmir" }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [new URL(SOCIAL_IMAGE, SITE_URL).toString()]
    }
  };
}

export const privateMetadata: Metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null
};
