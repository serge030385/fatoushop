"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { formatTry } from "@/lib/format";
import { localizedOrderMessage, useI18n } from "@/lib/i18n";
import type { LocalOrder } from "@/lib/types";

export default function ConfirmationPage() {
  const { t, language } = useI18n();
  const params = useParams<{ orderNumber: string }>();
  const [order, setOrder] = useState<LocalOrder | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("fatoushop.lastOrder");
    if (saved) setOrder(JSON.parse(saved));
  }, []);

  return (
    <main>
      <PageHeader
        eyebrow={t.pages.confirmation.eyebrow}
        title={t.pages.confirmation.title}
        description={t.pages.confirmation.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-palm">{t.pages.confirmation.number}</p>
          <h2 className="mt-2 text-3xl font-black text-cocoa">{order?.orderNumber || params.orderNumber}</h2>
          <span className="mt-4 inline-flex rounded-full border border-palm/20 bg-palm/10 px-3 py-1 text-sm font-black text-palm">
            {t.common.statusReceived}
          </span>
          {order && (
            <div className="mt-5 space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between gap-3 rounded-lg bg-cream p-3 font-bold text-cocoa">
                  <span>{item.quantity} x {item.name}</span>
                  <span>{formatTry(item.priceTry * item.quantity, language)}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-cocoa/10 pt-4 text-xl font-black text-cocoa">
                <span>{t.common.total}</span>
                <span>{formatTry(order.totalTry, language)}</span>
              </div>
            </div>
          )}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <WhatsAppButton label={t.common.sendWhatsapp} message={order ? localizedOrderMessage(order, language, (value) => formatTry(value, language)) : t.whatsappMessages.order} className="h-14" />
            <Link href="/" className="inline-flex h-14 items-center justify-center rounded-lg bg-cream font-black text-cocoa">
              {t.common.backHome}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
