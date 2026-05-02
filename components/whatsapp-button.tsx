"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton({
  message,
  label,
  className = ""
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  const { t } = useI18n();
  const finalMessage = message ?? t.whatsappMessages.order;
  const finalLabel = label ?? t.nav.whatsapp;

  return (
    <a
      href={whatsappUrl(finalMessage)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-palm px-5 py-3 font-black text-white shadow-button ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {finalLabel}
    </a>
  );
}
