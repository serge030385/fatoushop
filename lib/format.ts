import type { Availability, CartItem, LocalOrder, ReservationRequest } from "@/lib/types";
import type { Language } from "@/lib/i18n";

export const WHATSAPP_NUMBER = "905376781196";

export function formatTry(value: number, language: Language = "fr") {
  const locale = { fr: "fr-FR", en: "en-US", tr: "tr-TR" }[language];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0
  }).format(value);
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.priceTry * item.quantity, 0);
}

export function availabilityLabel(availability: Availability) {
  return {
    available: "Disponible aujourd’hui",
    preorder: "Sur commande",
    unavailable: "Indisponible"
  }[availability];
}

export function availabilityClass(availability: Availability) {
  return {
    available: "border-palm/20 bg-palm/10 text-palm",
    preorder: "border-gold/30 bg-gold/15 text-cocoa",
    unavailable: "border-red-100 bg-red-50 text-red-700"
  }[availability];
}

export function whatsappUrl(message: string, phone = WHATSAPP_NUMBER) {
  const cleaned = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(order: LocalOrder) {
  const lines = order.items.map((item) => `- ${item.quantity} x ${item.name}`);
  return [
    `Bonjour FatouShop, je souhaite passer une commande.`,
    `Commande: ${order.orderNumber}`,
    ...lines,
    `Total: ${formatTry(order.totalTry)}`,
    `Type: ${order.orderType === "delivery" ? "livraison" : order.orderType === "reservation" ? "réservation restaurant" : "retrait sur place"}`
  ].join("\n");
}

export function reservationMessage(request: ReservationRequest) {
  return [
    request.mode === "table"
      ? "Bonjour FatouShop, je souhaite réserver une table."
      : "Bonjour FatouShop, je souhaite réserver ce plat.",
    `Nom: ${request.name}`,
    `WhatsApp: ${request.whatsapp}`,
    `Personnes: ${request.people}`,
    `Date: ${request.date}`,
    `Heure: ${request.time}`,
    request.message ? `Message: ${request.message}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

export function createOrderNumber() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `FS-${date}-${Math.floor(1000 + Math.random() * 9000)}`;
}
