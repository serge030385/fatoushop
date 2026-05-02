"use client";

import { useMemo, useState } from "react";
import { CategoryTabs } from "@/components/category-tabs";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { productCategories } from "@/lib/categories";
import { products } from "@/lib/products";
import type { ProductCategory } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

export default function BoutiquePage() {
  const { t, categoryLabel } = useI18n();
  const [active, setActive] = useState<ProductCategory | "Tout">("Tout");
  const filtered = useMemo(
    () => (active === "Tout" ? products : products.filter((product) => product.category === active)),
    [active]
  );

  return (
    <main>
      <PageHeader
        eyebrow={t.pages.shop.eyebrow}
        title={t.pages.shop.title}
        description={t.pages.shop.description}
      />
      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-6xl">
          <CategoryTabs categories={productCategories} active={active} onChange={setActive} allLabel={t.common.all} getLabel={categoryLabel} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
