"use client";

import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const FATOU_LATITUDE = "38.60680";
const FATOU_LONGITUDE = "27.06669";
const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${FATOU_LATITUDE},${FATOU_LONGITUDE}`;
const GOOGLE_MAPS_EMBED_URL = `${GOOGLE_MAPS_URL}&output=embed`;

export function GoogleMapEmbed() {
  const { t } = useI18n();

  return (
    <section className="px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <div className="rounded-lg border border-cocoa/10 bg-white p-5 shadow-soft md:p-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-palm">{t.location.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-cocoa">FatouShop / Fatou Restaurant & Bar</h2>
          <div className="mt-4 flex gap-3 rounded-lg bg-cream p-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
            <div>
              <p className="font-black text-cocoa">{t.location.city}</p>
              <p className="mt-1 text-sm font-bold text-charcoal/60">
                {t.location.gps}: {FATOU_LATITUDE}, {FATOU_LONGITUDE}
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 min-h-13 items-center justify-center gap-2 rounded-lg bg-cocoa px-4 py-3 font-black text-cream shadow-button"
            >
              <ExternalLink className="h-5 w-5" />
              {t.location.open}
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 min-h-13 items-center justify-center gap-2 rounded-lg border border-palm/20 bg-palm/10 px-4 py-3 font-black text-palm"
            >
              <Navigation className="h-5 w-5" />
              {t.location.directions}
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-cocoa/10 bg-white shadow-soft">
          <iframe
            title="FatouShop Google Maps"
            src={GOOGLE_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[22rem] w-full border-0 md:h-[26rem]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
