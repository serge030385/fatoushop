"use client";

import { FormEvent, useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import type { ReservationRequest } from "@/lib/types";
import { whatsappUrl } from "@/lib/format";
import { localizedReservationMessage, useI18n } from "@/lib/i18n";

export function ReservationForm() {
  const { t, language } = useI18n();
  const [form, setForm] = useState<ReservationRequest>({
    mode: "table",
    people: 2,
    date: "",
    time: "",
    name: "",
    whatsapp: "",
    message: ""
  });

  const href = useMemo(() => whatsappUrl(localizedReservationMessage(form, language)), [form, language]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-cocoa/10 bg-white p-4 shadow-soft md:p-6">
      <div className="grid grid-cols-2 gap-2">
        {[
          ["table", t.pages.reservation.modeTable],
          ["dish", t.pages.reservation.modeDish]
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setForm({ ...form, mode: value as ReservationRequest["mode"] })}
            className={`h-12 rounded-lg font-black ${
              form.mode === value ? "bg-cocoa text-cream" : "border border-cocoa/10 bg-cream text-cocoa"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-cocoa">{t.forms.people}</span>
          <input
            type="number"
            min={1}
            value={form.people}
            onChange={(event) => setForm({ ...form, people: Number(event.target.value) })}
            className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-black text-cocoa">{t.forms.date}</span>
          <input
            required
            type="date"
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
            className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-black text-cocoa">{t.forms.time}</span>
          <input
            required
            type="time"
            value={form.time}
            onChange={(event) => setForm({ ...form, time: event.target.value })}
            className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-black text-cocoa">{t.forms.name}</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-cocoa">{t.nav.whatsapp}</span>
          <input
            required
            value={form.whatsapp}
            onChange={(event) => setForm({ ...form, whatsapp: event.target.value })}
            placeholder="+90..."
            className="mt-1 h-12 w-full rounded-lg border border-cocoa/15 px-3 outline-none focus:border-palm"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-cocoa">{t.forms.specialMessage}</span>
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="mt-1 min-h-28 w-full rounded-lg border border-cocoa/15 p-3 outline-none focus:border-palm"
            placeholder={t.forms.messagePlaceholder}
          />
        </label>
      </div>
      <button className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-palm text-lg font-black text-white shadow-button">
        <MessageCircle className="h-5 w-5" />
        {t.common.sendWhatsapp}
      </button>
    </form>
  );
}
