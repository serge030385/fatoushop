"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CalendarDays, ShoppingBag, Utensils } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useI18n } from "@/lib/i18n";
import { commonsImage } from "@/lib/media";

const heroImageUrl = commonsImage("Plat de Ndolè avec Plantains Tapés Frits +Poisson Frit.jpg");
const heroImageAlt = "Cuisine africaine avec ndolè, poisson braisé et plantain";

export function HeroSection() {
  const { t } = useI18n();
  const [imageFailed, setImageFailed] = useState(false);
  const actions = [
    { href: "/boutique", label: t.pages.home.shopButton, icon: ShoppingBag, className: "bg-cocoa text-cream" },
    { href: "/menu-camerounais", label: t.pages.home.menuButton, icon: Utensils, className: "bg-palm text-white" },
    { href: "/reservation", label: t.pages.home.reserveButton, icon: CalendarDays, className: "bg-orange text-white" }
  ];

  return (
    <section className="px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
        <div className="px-5 py-8 md:px-9 md:py-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-palm">{t.common.location}</p>
          <h1 className="mt-3 text-4xl font-black tracking-normal text-cocoa md:text-6xl">
            {t.pages.home.heroTitle}
          </h1>
          <p className="mt-5 text-lg leading-8 text-charcoal/72">
            {t.pages.home.heroSubtitle}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-lg px-5 text-center font-black shadow-button ${action.className}`}
                >
                  <Icon className="h-5 w-5" />
                  {action.label}
                </Link>
              );
            })}
            <WhatsAppButton
              label={t.pages.home.whatsappButton}
              className="min-h-14 bg-gold text-cocoa"
              message={t.whatsappMessages.order}
            />
          </div>
        </div>
        <div className="p-4 md:p-5">
          <div className="relative min-h-[22rem] overflow-hidden rounded-lg bg-gradient-to-br from-cocoa via-earth to-orange text-cream shadow-soft lg:h-full">
            {!imageFailed ? (
              <Image
                src={heroImageUrl}
                alt={heroImageAlt}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-cocoa via-earth to-orange">
                <div className="absolute inset-0 afro-pattern opacity-25" />
                <div className="relative grid grid-cols-2 gap-3 p-8">
                  {["🌿", "🐟", "🍌", "🍗"].map((emoji, index) => (
                    <div key={emoji} className="grid aspect-square min-h-24 place-items-center rounded-lg bg-cream/12 text-5xl backdrop-blur">
                      <span role="img" aria-label={`Cuisine africaine FatouShop ${index + 1}`}>{emoji}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="max-w-sm rounded-lg border border-cream/20 bg-cocoa/55 p-4 backdrop-blur">
                <p className="text-2xl font-black">{t.pages.home.heroCardTitle}</p>
                <p className="mt-2 text-sm font-bold text-cream/80">{t.pages.home.heroCardText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
