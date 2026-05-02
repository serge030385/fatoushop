"use client";

import { CalendarPlus, Plus } from "lucide-react";
import type { Dish, Drink } from "@/lib/types";
import { availabilityClass, formatTry, whatsappUrl } from "@/lib/format";
import { useCart } from "@/components/cart-provider";
import { ItemVisual } from "@/components/item-visual";
import { useI18n } from "@/lib/i18n";

export function DishCard({ item }: { item: Dish | Drink }) {
  const { addItem } = useCart();
  const { t, language, availabilityLabel: labelAvailability, itemText } = useI18n();
  const disabled = item.availability === "unavailable";
  const isDish = item.type === "dish";
  const text = itemText(item);

  return (
    <article className="overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-soft">
      <ItemVisual {...item.visual} label={text.name} />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-cocoa">{text.name}</h2>
            <p className="mt-1 text-sm leading-6 text-charcoal/70">{text.description}</p>
          </div>
          <p className="text-lg font-black text-palm">{formatTry(item.priceTry, language)}</p>
        </div>
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${availabilityClass(item.availability)}`}>
          {labelAvailability(item.availability)}
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={disabled}
            onClick={() =>
              addItem({
                id: item.id,
                sourceType: item.type,
                name: text.name,
                priceTry: item.priceTry,
                visual: item.visual
              })
            }
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cocoa font-black text-cream disabled:bg-cocoa/30"
          >
            <Plus className="h-5 w-5" />
            {t.common.add}
          </button>
          <a
            href={whatsappUrl(
              isDish
                ? `${t.whatsappMessages.dish}\n${t.whatsappMessages.dishLabel}: ${text.name}`
                : `${t.whatsappMessages.order}\n${t.whatsappMessages.drinkLabel}: ${text.name}`
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-orange/25 bg-orange/10 font-black text-earth"
          >
            <CalendarPlus className="h-5 w-5" />
            {isDish ? t.common.reserve : t.nav.whatsapp}
          </a>
        </div>
      </div>
    </article>
  );
}
