"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ItemVisual } from "@/components/item-visual";
import { useCart } from "@/components/cart-provider";
import { cartTotal, createOrderNumber, formatTry } from "@/lib/format";
import type { LocalOrder, OrderType, PaymentMethod } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

export default function PanierPage() {
  const { t, language } = useI18n();
  const router = useRouter();
  const { items, updateQuantity, removeItem, clearCart, saveOrder } = useCart();
  const total = useMemo(() => cartTotal(items), [items]);
  const [form, setForm] = useState({
    customerName: "",
    whatsapp: "",
    orderType: "pickup" as OrderType,
    address: "",
    requestedAt: "",
    note: "",
    paymentMethod: "cash_pickup" as PaymentMethod
  });

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const order: LocalOrder = {
      id: crypto.randomUUID(),
      orderNumber: createOrderNumber(),
      customerName: form.customerName,
      whatsapp: form.whatsapp,
      orderType: form.orderType,
      address: form.orderType === "delivery" ? form.address : undefined,
      requestedAt: form.requestedAt,
      note: form.note,
      paymentMethod: form.orderType === "delivery" ? "cash_delivery" : form.paymentMethod,
      totalTry: total,
      createdAt: new Date().toISOString(),
      items
    };
    saveOrder(order);
    window.localStorage.setItem("fatoushop.lastOrder", JSON.stringify(order));
    clearCart();
    router.push(`/confirmation/${order.orderNumber}`);
  }

  return (
    <main>
      <PageHeader
        eyebrow={t.pages.cart.eyebrow}
        title={t.pages.cart.title}
        description={t.pages.cart.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <form onSubmit={submit} className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-3">
            {items.length === 0 && (
              <div className="rounded-lg border border-cocoa/10 bg-white p-6 text-center font-bold text-charcoal/65 shadow-soft">
                {t.common.emptyCart}
              </div>
            )}
            {items.map((item) => (
              <article key={item.id} className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft">
                <div className="flex items-start gap-3">
                  <ItemVisual
                    {...item.visual}
                    label={item.name}
                    className="h-16 w-16 shrink-0 rounded-lg"
                    aspectClassName="aspect-square"
                    sizes="64px"
                  />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-black text-cocoa">{item.name}</h2>
                    <p className="text-sm font-bold text-palm">{formatTry(item.priceTry, language)}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} className="grid h-10 w-10 place-items-center rounded-lg bg-red-50 text-red-700" title={t.common.delete}>
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-lg border border-cocoa/10 bg-cream">
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="grid h-11 w-11 place-items-center" title={t.common.decrease}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-black text-cocoa">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="grid h-11 w-11 place-items-center" title={t.common.increase}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-lg font-black text-cocoa">{formatTry(item.priceTry * item.quantity, language)}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft md:p-5">
            <h2 className="text-2xl font-black text-cocoa">{t.pages.cart.validation}</h2>
            <div className="mt-4 space-y-4">
              <div>
                <span className="text-sm font-black text-cocoa">{t.pages.cart.type}</span>
                <div className="mt-2 grid gap-2">
                  {[
                    ["pickup", t.orderType.pickup],
                    ["delivery", t.orderType.delivery],
                    ["reservation", t.orderType.reservation]
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setForm({ ...form, orderType: value as OrderType })}
                      className={`h-12 rounded-lg font-black ${
                        form.orderType === value ? "bg-cocoa text-cream" : "border border-cocoa/10 bg-cream text-cocoa"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <label className="block">
                <span className="text-sm font-black text-cocoa">{t.forms.name}</span>
                <input required value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-cocoa">{t.forms.whatsappPhone}</span>
                <input required value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+90..." className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm" />
              </label>
              {form.orderType === "delivery" && (
                <label className="block">
                  <span className="text-sm font-black text-cocoa">{t.forms.address}</span>
                  <textarea required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1 min-h-24 w-full rounded-lg border border-cocoa/15 p-3 outline-none focus:border-palm" />
                </label>
              )}
              <label className="block">
                <span className="text-sm font-black text-cocoa">{t.forms.requestedAt}</span>
                <input required type="datetime-local" value={form.requestedAt} onChange={(e) => setForm({ ...form, requestedAt: e.target.value })} className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm" />
              </label>
              <label className="block">
                <span className="text-sm font-black text-cocoa">{t.forms.note}</span>
                <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="mt-1 min-h-20 w-full rounded-lg border border-cocoa/15 p-3 outline-none focus:border-palm" />
              </label>
              <div className="rounded-lg bg-cream p-3">
                <p className="font-black text-cocoa">{t.common.payment}</p>
                <p className="mt-1 text-sm font-bold text-charcoal/65">
                  {form.orderType === "delivery" ? t.common.cashDelivery : t.common.cashPickup}
                </p>
              </div>
            </div>
            <div className="mt-5 border-t border-cocoa/10 pt-4">
              <div className="flex items-center justify-between text-xl font-black text-cocoa">
                <span>{t.common.total}</span>
                <span>{formatTry(total, language)}</span>
              </div>
              <button disabled={!items.length} className="mt-4 h-14 w-full rounded-lg bg-palm text-lg font-black text-white shadow-button disabled:bg-palm/35">
                {t.pages.cart.submit}
              </button>
            </div>
          </section>
        </form>
      </section>
    </main>
  );
}
