import { commonsImage } from "@/lib/media";
import type { Drink } from "@/lib/types";

const gradients = {
  red: "from-orange/85 via-gold/55 to-cream",
  green: "from-palm/85 via-gold/55 to-cream",
  dark: "from-cocoa/85 via-earth/70 to-gold/40",
  light: "from-gold/75 via-cream to-white"
};

function visual(emoji: string, gradient: string, fileName: string, imageAlt: string) {
  return { emoji, gradient, imageUrl: commonsImage(fileName), imageAlt };
}

export const drinks: Drink[] = [
  { id: "drink-bissap", type: "drink", category: "Jus naturels", name: "Jus de bissap", description: "Hibiscus, menthe légère, servi frais.", priceTry: 85, availability: "available", visual: visual("🌺", gradients.red, "Hibiscus tea Wonjo.jpg", "Jus de bissap rouge servi frais") },
  { id: "drink-gingembre", type: "drink", category: "Jus naturels", name: "Jus de gingembre", description: "Fort, frais, très parfumé.", priceTry: 85, availability: "available", visual: visual("🫚", gradients.light, "Jus de gingembre-2025.jpg", "Jus de gingembre frais") },
  { id: "drink-folere", type: "drink", category: "Boissons africaines", name: "Foléré", description: "Boisson rouge camerounaise maison.", priceTry: 90, availability: "available", visual: visual("🍷", gradients.red, "Bissap ou carcadé 01.jpg", "Foléré, boisson à base d’hibiscus") },
  { id: "drink-baobab", type: "drink", category: "Jus naturels", name: "Jus de baobab", description: "Doux, lacté, selon disponibilité.", priceTry: 95, availability: "preorder", visual: visual("🥛", gradients.light, "Baobab Drink.jpg", "Jus de baobab") },
  { id: "drink-malta", type: "drink", category: "Boissons africaines", name: "Malta", description: "Boisson maltée fraîche.", priceTry: 70, availability: "available", visual: visual("🍺", gradients.dark, "Malta Goya.jpg", "Boisson maltée Malta") },
  { id: "drink-topino", type: "drink", category: "Boissons africaines", name: "Topino", description: "Boisson africaine selon arrivage.", priceTry: 70, availability: "preorder", visual: visual("🥤", gradients.green, "Bottle of juice.jpg", "Boisson fraîche en bouteille") },
  { id: "drink-cocktail", type: "drink", category: "Cocktails sans alcool", name: "Cocktail maison sans alcool", description: "Fruits, gingembre, touche FatouShop.", priceTry: 120, availability: "available", visual: visual("🍹", gradients.red, "Fruit cocktail.JPG", "Cocktail maison sans alcool") },
  { id: "drink-the", type: "drink", category: "Café / thé", name: "Thé chaud", description: "Simple, doux ou épicé.", priceTry: 55, availability: "available", visual: visual("🍵", gradients.green, "Mint tea.jpg", "Thé chaud à la menthe") },
  { id: "drink-cafe", type: "drink", category: "Café / thé", name: "Café", description: "Café chaud pour pause rapide.", priceTry: 60, availability: "available", visual: visual("☕", gradients.dark, "A small cup of coffee.JPG", "Tasse de café chaud") },
  { id: "drink-water", type: "drink", category: "Boissons fraîches", name: "Eau", description: "Bouteille fraîche.", priceTry: 25, availability: "available", visual: visual("💧", gradients.light, "Water bottle.jpg", "Bouteille d’eau fraîche") },
  { id: "drink-sodas", type: "drink", category: "Boissons fraîches", name: "Sodas", description: "Sélection fraîche selon stock.", priceTry: 55, availability: "available", visual: visual("🥤", gradients.red, "Sodas.JPG", "Sodas frais") }
];
