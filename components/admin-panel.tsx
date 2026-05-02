"use client";

import { useMemo, useState } from "react";
import { Plus, Save } from "lucide-react";
import { dishes as initialDishes } from "@/lib/dishes";
import { products as initialProducts } from "@/lib/products";
import { commonsImage } from "@/lib/media";
import { useCart } from "@/components/cart-provider";
import { formatTry } from "@/lib/format";
import type { Availability, Dish, Product } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

const availabilityOptions: Availability[] = ["available", "preorder", "unavailable"];

export function AdminPanel() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [newProductName, setNewProductName] = useState("");
  const { orders } = useCart();
  const { t, language, categoryLabel, availabilityLabel: labelAvailability, itemText } = useI18n();

  const stats = useMemo(
    () => [
      { label: t.pages.admin.stats[0], value: products.length },
      { label: t.pages.admin.stats[1], value: dishes.length },
      { label: t.pages.admin.stats[2], value: orders.length },
      { label: t.pages.admin.stats[3], value: formatTry(orders.reduce((sum, order) => sum + order.totalTry, 0), language) }
    ],
    [products.length, dishes.length, orders, language, t]
  );

  function addDemoProduct() {
    if (!newProductName.trim()) return;
    setProducts((current) => [
      {
        id: `local-${crypto.randomUUID()}`,
        type: "product",
        name: newProductName,
        category: "Produits sur commande",
        priceTry: 100,
        availability: "preorder",
        description: t.pages.admin.localProductDescription,
        visual: {
          emoji: "🛍️",
          gradient: "from-earth/85 via-gold/60 to-cream",
          imageUrl: commonsImage("Echantillon des produits disponibles.jpg"),
          imageAlt: t.pages.admin.localProductAlt
        }
      },
      ...current
    ]);
    setNewProductName("");
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft">
            <p className="text-sm font-black text-cocoa/55">{stat.label}</p>
            <p className="mt-2 text-3xl font-black text-palm">{stat.value}</p>
          </article>
        ))}
      </div>

      <section className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft">
        <h2 className="text-2xl font-black text-cocoa">{t.pages.admin.addProduct}</h2>
        <div className="mt-3 flex gap-2">
          <input
            value={newProductName}
            onChange={(event) => setNewProductName(event.target.value)}
            placeholder={t.forms.productName}
            className="h-12 min-w-0 flex-1 rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm"
          />
          <button onClick={addDemoProduct} className="grid h-12 w-12 place-items-center rounded-lg bg-palm text-white" title={t.common.add}>
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </section>

      <LocalList
        title={t.pages.admin.productList}
        items={products}
        categoryLabel={categoryLabel}
        itemText={itemText}
        availabilityText={labelAvailability}
        language={language}
        onAvailability={(id, availability) =>
          setProducts((current) => current.map((item) => (item.id === id ? { ...item, availability } : item)))
        }
      />
      <LocalList
        title={t.pages.admin.dishList}
        items={dishes}
        categoryLabel={categoryLabel}
        itemText={itemText}
        availabilityText={labelAvailability}
        language={language}
        onAvailability={(id, availability) =>
          setDishes((current) => current.map((item) => (item.id === id ? { ...item, availability } : item)))
        }
      />

      <section className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft">
        <h2 className="text-2xl font-black text-cocoa">{t.pages.admin.fakeOrders}</h2>
        <div className="mt-3 space-y-3">
          {orders.length === 0 && <p className="text-sm font-bold text-charcoal/60">{t.pages.admin.emptyOrders}</p>}
          {orders.map((order) => (
            <article key={order.id} className="rounded-lg bg-cream p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-black text-cocoa">{order.orderNumber}</p>
                  <p className="text-sm font-bold text-charcoal/60">{order.customerName} - {order.whatsapp}</p>
                </div>
                <p className="font-black text-palm">{formatTry(order.totalTry, language)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function LocalList<T extends Product | Dish>({
  title,
  items,
  onAvailability,
  categoryLabel,
  itemText,
  availabilityText,
  language
}: {
  title: string;
  items: T[];
  onAvailability: (id: string, availability: Availability) => void;
  categoryLabel: (category: string) => string;
  itemText: (item: T) => { name: string; description: string };
  availabilityText: (availability: Availability) => string;
  language: "fr" | "en" | "tr";
}) {
  return (
    <section className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft">
      <h2 className="text-2xl font-black text-cocoa">{title}</h2>
      <div className="mt-3 space-y-3">
        {items.slice(0, 14).map((item) => (
          <article key={item.id} className="grid gap-3 rounded-lg bg-cream p-3 md:grid-cols-[1fr_13rem] md:items-center">
            <div>
              <p className="font-black text-cocoa">{itemText(item).name}</p>
              <p className="text-sm font-bold text-charcoal/60">{categoryLabel(item.category)} - {formatTry(item.priceTry, language)}</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={item.availability}
                onChange={(event) => onAvailability(item.id, event.target.value as Availability)}
                className="h-11 min-w-0 flex-1 rounded-lg border border-cocoa/15 bg-white px-3 text-sm font-black text-cocoa"
              >
                {availabilityOptions.map((availability) => (
                  <option key={availability} value={availability}>
                    {availabilityText(availability)}
                  </option>
                ))}
              </select>
              <button className="grid h-11 w-11 place-items-center rounded-lg bg-cocoa text-cream" title="Modification locale">
                <Save className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
