"use client";

import Link from "next/link";
import { Bike, Martini, ShoppingBag, Star, Utensils } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { SpecialtiesCarousel } from "@/components/specialties-carousel";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useI18n();
  const icons = [ShoppingBag, Utensils, Martini, Bike];
  const sections = t.pages.home.sections.map(([title, text], index) => ({ title, text, icon: icons[index] }));

  return (
    <main>
      <HeroSection />
      <SpecialtiesCarousel />

      <section className="px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft">
                <Icon className="h-7 w-7 text-orange" />
                <h2 className="mt-4 text-xl font-black text-cocoa">{section.title}</h2>
                <p className="mt-2 leading-7 text-charcoal/70">{section.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-cocoa p-6 text-cream shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">{t.pages.home.testimonialsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black">{t.pages.home.testimonialsTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.pages.home.testimonials.map((quote) => (
              <article key={quote} className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <p className="mt-4 font-bold leading-7 text-cocoa">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-lg border border-cocoa/10 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-palm">{t.pages.home.ctaEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-cocoa">{t.pages.home.ctaTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/panier" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-cocoa px-5 font-black text-cream shadow-button">
              <ShoppingBag className="h-5 w-5" />
              {t.common.viewCart}
            </Link>
            <WhatsAppButton label={t.common.writeWhatsapp} className="h-14" />
          </div>
        </div>
      </section>
    </main>
  );
}
