import type { Dish } from "@/lib/types";
import { DishCard } from "@/components/dish-card";

export function MenuSection({ title, items }: { title: string; items: Dish[] }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-2xl font-black text-cocoa">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
