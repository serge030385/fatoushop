"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { FatouLogo } from "@/components/fatou-logo";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useCart } from "@/components/cart-provider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useCart();
  const { t } = useI18n();
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/boutique", label: t.nav.shop },
    { href: "/restaurant", label: t.nav.restaurant },
    { href: "/menu-camerounais", label: t.nav.menu },
    { href: "/bar", label: t.nav.bar },
    { href: "/reservation", label: t.nav.reservation },
    { href: "/contact", label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-cream/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <FatouLogo />
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-black ${
                  active ? "bg-cocoa text-cream" : "text-cocoa hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <Link href="/panier" className="relative grid h-12 w-12 place-items-center rounded-lg bg-white text-cocoa shadow-soft">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-orange px-1 text-xs font-black text-white">
                {count}
              </span>
            )}
          </Link>
          <WhatsAppButton label={t.nav.order} className="hidden h-12 md:inline-flex" />
        </div>
      </div>
    </header>
  );
}
