"use client";

import { HeartHandshake, Store, UtensilsCrossed } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  const icons = [Store, UtensilsCrossed, HeartHandshake];
  const values = t.pages.about.values.map(([title, text], index) => ({ title, text, icon: icons[index] }));

  return (
    <main>
      <PageHeader
        eyebrow={t.pages.about.eyebrow}
        title={t.pages.about.title}
        description={t.pages.about.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft">
                <Icon className="h-7 w-7 text-orange" />
                <h2 className="mt-4 text-xl font-black text-cocoa">{value.title}</h2>
                <p className="mt-2 leading-7 text-charcoal/70">{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
