"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function FatouLogo({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={t.nav.logoAria}>
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cocoa text-lg font-black text-cream shadow-soft">
        FS
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="text-2xl font-black tracking-normal text-cocoa">FatouShop</p>
          <p className="text-sm font-bold text-earth">{t.nav.logoSubtitle}</p>
        </div>
      )}
    </Link>
  );
}
