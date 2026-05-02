"use client";

import Link from "next/link";
import { Home, MessageCircle, ShoppingBag, ShoppingCart, Utensils } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { whatsappUrl } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

export function BottomNav() {
  const pathname = usePathname();
  const { count } = useCart();
  const { t } = useI18n();
  const nav = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/boutique", label: t.nav.shop, icon: ShoppingBag },
    { href: "/menu-camerounais", label: t.nav.menuShort, icon: Utensils },
    { href: "/panier", label: t.nav.cart, icon: ShoppingCart },
    {
      href: whatsappUrl(t.whatsappMessages.order),
      label: t.nav.whatsapp,
      icon: MessageCircle
    }
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-cocoa/10 bg-cream/95 shadow-[0_-12px_30px_rgba(75,36,24,0.10)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-5">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = item.href.startsWith("/") && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));
          const isCart = item.href === "/panier";
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-black ${
                active ? "text-palm" : "text-cocoa/55"
              }`}
            >
              <Icon className="h-5 w-5" />
              {isCart && count > 0 && (
                <span className="absolute right-5 top-2 grid h-5 min-w-5 place-items-center rounded-full bg-orange px-1 text-[10px] text-white">
                  {count}
                </span>
              )}
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
