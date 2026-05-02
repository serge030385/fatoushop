"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WHATSAPP_NUMBER } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHeader
        eyebrow={t.pages.contact.eyebrow}
        title={t.pages.contact.title}
        description={t.pages.contact.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-black text-cocoa">{t.pages.contact.details}</h2>
            <div className="mt-5 space-y-3">
              <div className="flex gap-3 rounded-lg bg-cream p-3">
                <Phone className="h-5 w-5 text-palm" />
                <p className="font-bold text-cocoa">+{WHATSAPP_NUMBER}</p>
              </div>
              <div className="flex gap-3 rounded-lg bg-cream p-3">
                <MapPin className="h-5 w-5 text-orange" />
                <p className="font-bold text-cocoa">{t.pages.contact.city}</p>
              </div>
              <div className="flex gap-3 rounded-lg bg-cream p-3">
                <MessageCircle className="h-5 w-5 text-palm" />
                <p className="font-bold text-cocoa">{t.pages.contact.response}</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-cocoa p-5 text-cream shadow-soft md:p-7">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">{t.pages.contact.prefill}</p>
            <h2 className="mt-3 text-3xl font-black">{t.whatsappMessages.order}</h2>
            <p className="mt-4 leading-8 text-cream/75">
              {t.pages.contact.text}
            </p>
            <WhatsAppButton label={t.common.openWhatsapp} message={t.whatsappMessages.order} className="mt-6 h-14 bg-gold text-cocoa" />
          </div>
        </div>
      </section>
    </main>
  );
}
