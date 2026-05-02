import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CartProvider } from "@/components/cart-provider";
import { BottomNav } from "@/components/bottom-nav";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FatouShop | Boutique africaine et cuisine camerounaise à Izmir",
  description: "Produits africains, cuisine camerounaise, bar sans alcool et réservations à Izmir."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
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
      </body>
    </html>
  );
}
