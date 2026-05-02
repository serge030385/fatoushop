"use client";

import { ReservationForm } from "@/components/reservation-form";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export default function ReservationPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHeader
        eyebrow={t.pages.reservation.eyebrow}
        title={t.pages.reservation.title}
        description={t.pages.reservation.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg bg-cocoa p-5 text-cream shadow-soft">
            <h2 className="text-3xl font-black">{t.pages.reservation.beforeTitle}</h2>
            <p className="mt-3 leading-8 text-cream/78">
              {t.pages.reservation.beforeText}
            </p>
            <div className="mt-5 grid gap-3">
              {t.pages.reservation.chips.map((item) => (
                <div key={item} className="rounded-lg border border-cream/15 bg-cream/10 p-3 font-black">
                  {item}
                </div>
              ))}
            </div>
          </aside>
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
