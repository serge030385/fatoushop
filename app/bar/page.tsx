"use client";

import { Music, Sofa, Trophy, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryTabs } from "@/components/category-tabs";
import { DishCard } from "@/components/dish-card";
import { PageHeader } from "@/components/page-header";
import { drinkCategories } from "@/lib/categories";
import { drinks } from "@/lib/drinks";
import type { DrinkCategory } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

export default function BarPage() {
  const { t, categoryLabel } = useI18n();
  const [active, setActive] = useState<DrinkCategory | "Tout">("Tout");
  const filtered = useMemo(() => (active === "Tout" ? drinks : drinks.filter((drink) => drink.category === active)), [active]);
  const icons = [Music, Trophy, Sofa, Users];
  const ambiance = t.pages.bar.ambiance.map((title, index) => ({ title, icon: icons[index] }));

  return (
    <main>
      <PageHeader
        eyebrow={t.pages.bar.eyebrow}
        title={t.pages.bar.title}
        description={t.pages.bar.description}
      />
      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-6xl">
          <CategoryTabs categories={drinkCategories} active={active} onChange={setActive} allLabel={t.common.all} getLabel={categoryLabel} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((drink) => (
              <DishCard key={drink.id} item={drink} />
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto max-w-6xl rounded-lg bg-cocoa p-5 text-cream shadow-soft md:p-7">
          <h2 className="text-3xl font-black">{t.pages.bar.ambianceTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ambiance.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-cream/15 bg-cream/10 p-4">
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="mt-3 font-black">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
