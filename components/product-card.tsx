"use client";

import { MessageCircle, Plus } from "lucide-react";
import type { Product } from "@/lib/types";
import { availabilityClass, formatTry, whatsappUrl } from "@/lib/format";
import { useCart } from "@/components/cart-provider";
import { ItemVisual } from "@/components/item-visual";
import { useI18n } from "@/lib/i18n";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t, language, availabilityLabel: labelAvailability, itemText } = useI18n();
  const disabled = product.availability === "unavailable";
  const text = itemText(product);

  return (
    <article className="overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-soft">
      <ItemVisual {...product.visual} label={text.name} />
      <div className="space-y-3 p-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-black text-cocoa">{text.name}</h2>
            <p className="text-lg font-black text-palm">{formatTry(product.priceTry, language)}</p>
          </div>
          <p className="mt-1 text-sm leading-6 text-charcoal/70">{text.description}</p>
        </div>
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${availabilityClass(product.availability)}`}>
          {labelAvailability(product.availability)}
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={disabled}
            onClick={() =>
              addItem({
                id: product.id,
                sourceType: product.type,
                name: text.name,
                priceTry: product.priceTry,
                visual: product.visual
              })
            }
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cocoa font-black text-cream disabled:bg-cocoa/30"
          >
            <Plus className="h-5 w-5" />
            {t.common.add}
          </button>
          <a
            href={whatsappUrl(`${t.whatsappMessages.order}\n${t.whatsappMessages.productLabel}: ${text.name}`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-palm/20 bg-palm/10 font-black text-palm"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
