"use client";

import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react";
import { fr } from "@/lib/translations/fr";
import { en } from "@/lib/translations/en";
import { tr } from "@/lib/translations/tr";
import type { Availability, CatalogItemBase, Dish, Drink, LocalOrder, Product, ReservationRequest } from "@/lib/types";

export type Language = "fr" | "en" | "tr";

export const languages: Array<{ code: Language; label: string }> = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" }
];

const STORAGE_KEY = "fatoushop.language";

type Dictionary = typeof fr;
const dictionaries: Record<Language, Dictionary> = {
  fr,
  en: en as unknown as Dictionary,
  tr: tr as unknown as Dictionary
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
  categoryLabel: (category: string) => string;
  availabilityLabel: (availability: Availability) => string;
  itemText: (item: Pick<CatalogItemBase, "id" | "name" | "description">) => { name: string; description: string };
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) setLanguageState(saved);
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(() => {
    const current = dictionaries[language] ?? fr;
    return {
      language,
      setLanguage,
      t: current,
      categoryLabel: (category) => categoryLookup(current, category),
      availabilityLabel: (availability) => current.availability[availability] ?? fr.availability[availability],
      itemText: (item) => {
        const translated = current.catalog[item.id as keyof typeof current.catalog] ?? fr.catalog[item.id as keyof typeof fr.catalog];
        return {
          name: translated?.[0] ?? item.name,
          description: translated?.[1] ?? item.description
        };
      }
    };
  }, [language]);

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}

export function isLanguage(value: unknown): value is Language {
  return value === "fr" || value === "en" || value === "tr";
}

export function getDictionary(language: Language = "fr") {
  return dictionaries[language] ?? fr;
}

export function categoryLookup(dictionary: Dictionary, category: string) {
  return dictionary.categories[category as keyof typeof dictionary.categories] ?? fr.categories[category as keyof typeof fr.categories] ?? category;
}

export function localizeItem<T extends Product | Dish | Drink>(item: T, language: Language): T {
  const dictionary = dictionaries[language] ?? fr;
  const translated = dictionary.catalog[item.id as keyof typeof dictionary.catalog] ?? fr.catalog[item.id as keyof typeof fr.catalog];
  return translated ? { ...item, name: translated[0], description: translated[1] } : item;
}

export function localizedOrderMessage(order: LocalOrder, language: Language, formatCurrency: (value: number) => string) {
  const dictionary = dictionaries[language] ?? fr;
  const w = dictionary.whatsappMessages;
  const lines = order.items.map((item) => `- ${item.quantity} x ${item.name}`);
  return [
    w.order,
    `${w.orderNumber}: ${order.orderNumber}`,
    ...lines,
    `${dictionary.common.total}: ${formatCurrency(order.totalTry)}`,
    `${w.type}: ${dictionary.orderType[order.orderType]}`
  ].join("\n");
}

export function localizedReservationMessage(request: ReservationRequest, language: Language) {
  const dictionary = dictionaries[language] ?? fr;
  const w = dictionary.whatsappMessages;
  return [
    request.mode === "table" ? w.table : w.dish,
    `${w.name}: ${request.name}`,
    `${w.whatsapp}: ${request.whatsapp}`,
    `${w.people}: ${request.people}`,
    `${w.date}: ${request.date}`,
    `${w.time}: ${request.time}`,
    request.message ? `${w.message}: ${request.message}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}
