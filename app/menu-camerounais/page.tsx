"use client";

import { MenuSection } from "@/components/menu-section";
import { PageHeader } from "@/components/page-header";
import { dishCategories } from "@/lib/categories";
import { dishes } from "@/lib/dishes";
import { useI18n } from "@/lib/i18n";

export default function MenuCamerounaisPage() {
  const { t, categoryLabel } = useI18n();
  return (
    <main>
      <PageHeader
        eyebrow={t.pages.menu.eyebrow}
        title={t.pages.menu.title}
        description={t.pages.menu.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          {dishCategories.map((category) => (
            <MenuSection key={category} title={categoryLabel(category)} items={dishes.filter((dish) => dish.category === category)} />
          ))}
        </div>
      </section>
    </main>
  );
}
