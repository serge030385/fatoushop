"use client";

import { languages, useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useI18n();

  return (
    <div className={`inline-flex rounded-lg border border-cocoa/10 bg-white p-1 shadow-soft ${compact ? "h-10" : "h-12"}`} aria-label="Language selector">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={`rounded-md px-2 text-xs font-black transition sm:px-3 ${
            language === item.code ? "bg-cocoa text-cream" : "text-cocoa/65 hover:bg-cream"
          }`}
          aria-pressed={language === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
