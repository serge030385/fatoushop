"use client";

import Link from "next/link";
import { Bike, CalendarDays, ChefHat, Clock, PartyPopper, Utensils } from "lucide-react";
import { DishCard } from "@/components/dish-card";
import { PageHeader } from "@/components/page-header";
import { dishes } from "@/lib/dishes";
import { useI18n } from "@/lib/i18n";

export default function RestaurantPage() {
  const { t } = useI18n();
  const popular = dishes.filter((dish) => ["dish-ndole-plantain", "dish-poulet-dg", "dish-poisson-braise"].includes(dish.id));
  const icons = [Clock, ChefHat, Utensils, CalendarDays, PartyPopper, Bike];
  const sections = t.pages.restaurant.sections.map(([title, text], index) => ({ title, text, icon: icons[index] }));

  return (
    <main>
      <PageHeader
        eyebrow={t.pages.restaurant.eyebrow}
        title={t.pages.restaurant.title}
        description={t.pages.restaurant.description}
      />
      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-palm">{t.pages.restaurant.today}</p>
              <h2 className="text-3xl font-black text-cocoa">{t.pages.restaurant.popular}</h2>
            </div>
            <Link href="/menu-camerounais" className="hidden rounded-lg bg-cocoa px-5 py-3 font-black text-cream md:inline-flex">
              {t.common.viewFullMenu}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((dish) => (
              <DishCard key={dish.id} item={dish} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
