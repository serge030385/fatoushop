import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CartProvider } from "@/components/cart-provider";
import { BottomNav } from "@/components/bottom-nav";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WHATSAPP_NUMBER } from "@/lib/format";
import { I18nProvider } from "@/lib/i18n";
import { pageMetadata, SITE_URL, SOCIAL_IMAGE } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(SITE_URL),
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png"
  }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Restaurant", "Store"],
  "@id": `${SITE_URL}/#business`,
  name: "FatouShop",
  alternateName: "Fatou Restaurant & Bar",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Izmir",
    addressCountry: "TR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6068,
    longitude: 27.06669
  },
  url: SITE_URL,
  image: new URL(SOCIAL_IMAGE, SITE_URL).toString(),
  telephone: `+${WHATSAPP_NUMBER}`
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
        />
        <I18nProvider>
          <CartProvider>
            <SiteHeader />
            <div className="safe-bottom mx-auto min-h-screen w-full">
              {children}
            </div>
            <div className="fixed bottom-20 right-4 z-40 hidden md:block">
              <WhatsAppButton label="WhatsApp" />
            </div>
            <BottomNav />
          </CartProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>

  );
}
