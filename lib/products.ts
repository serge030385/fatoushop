import { commonsImage } from "@/lib/media";
import type { Product } from "@/lib/types";

const gradients = [
  "from-orange/80 via-gold/70 to-cream",
  "from-palm/80 via-gold/60 to-cream",
  "from-earth/85 via-orange/65 to-cream",
  "from-cocoa/85 via-earth/70 to-gold/40"
];

function visual(emoji: string, gradient: string, fileName: string, imageAlt: string) {
  return { emoji, gradient, imageUrl: commonsImage(fileName), imageAlt };
}

function directVisual(emoji: string, gradient: string, imageUrl: string, imageAlt: string) {
  return { emoji, gradient, imageUrl, imageAlt };
}

export const products: Product[] = [
  { id: "prod-ndole", type: "product", name: "Ndolè", category: "Produits frais", priceTry: 180, availability: "available", description: "Feuilles préparées pour cuisine camerounaise.", visual: visual("🌿", gradients[1], "Ndolé SAWA.jpg", "Feuilles de ndolè camerounais préparées") },
  { id: "prod-bobolo", type: "product", name: "Bobolo", category: "Farines & féculents", priceTry: 75, availability: "available", description: "Accompagnement traditionnel prêt à réchauffer.", visual: visual("🍘", gradients[2], "Fabrication des gros bâtons de manioc (Bobolo).jpg", "Bobolo, bâtons de manioc traditionnels") },
  { id: "prod-batons", type: "product", name: "Bâtons de manioc", category: "Farines & féculents", priceTry: 80, availability: "available", description: "Lot familial selon arrivage.", visual: visual("🥖", gradients[3], "Bâtons de manioc.jpg", "Bâtons de manioc africains") },
  { id: "prod-plantain", type: "product", name: "Plantain", category: "Produits frais", priceTry: 130, availability: "available", description: "Plantains mûrs ou verts selon stock.", visual: visual("🍌", gradients[0], "Banane Plantain.jpg", "Bananes plantain fraîches") },
  { id: "prod-gombo", type: "product", name: "Gombo", category: "Produits frais", priceTry: 110, availability: "preorder", description: "Frais ou surgelé, idéal pour sauces.", visual: visual("🥬", gradients[1], "Gombo, Okra, Okro.jpg", "Gombos frais") },
  { id: "prod-piment", type: "product", name: "Piment africain", category: "Épices africaines", priceTry: 95, availability: "available", description: "Piment fort parfumé, sachet 100 g.", visual: visual("🌶️", gradients[0], "Red Chili peppers.JPG", "Piments rouges forts") },
  { id: "prod-arachides", type: "product", name: "Arachides", category: "Produits secs", priceTry: 120, availability: "available", description: "Arachides pour sauce, snack ou pâte.", visual: visual("🥜", gradients[2], "Arachides-Tayap (1).jpg", "Arachides africaines") },
  { id: "prod-poisson-fume", type: "product", name: "Poisson fumé", category: "Produits sur commande", priceTry: 260, availability: "preorder", description: "Saveur intense pour ndolè, gombo et sauces.", visual: visual("🐟", gradients[3], "Le poisson fumée.jpg", "Poisson fumé africain") },
  { id: "prod-huile-rouge", type: "product", name: "Huile rouge", category: "Conserves africaines", priceTry: 210, availability: "available", description: "Bouteille 1 L, cuisine d’Afrique centrale.", visual: visual("🫙", gradients[0], "Huile de palme ou huile rouge.jpg", "Huile rouge de palme en bouteille") },
  { id: "prod-farine-manioc", type: "product", name: "Farine de manioc", category: "Farines & féculents", priceTry: 135, availability: "available", description: "Sachet 1 kg pour préparations maison.", visual: visual("🌾", gradients[2], "Cassava flour.jpg", "Farine de manioc") },
  { id: "prod-tapioca", type: "product", name: "Tapioca", category: "Produits secs", priceTry: 105, availability: "available", description: "Pour dessert, bouillie et petit déjeuner.", visual: visual("🥣", gradients[1], "Tapioca pearls and cranberry seeds.jpg", "Perles de tapioca") },
  { id: "prod-gingembre", type: "product", name: "Gingembre", category: "Produits frais", priceTry: 90, availability: "available", description: "Frais, puissant, parfait pour jus maison.", visual: visual("🫚", gradients[0], "Ginger Root.jpg", "Racines de gingembre frais") },
  { id: "prod-bissap", type: "product", name: "Bissap", category: "Boissons africaines", priceTry: 85, availability: "available", description: "Hibiscus séché pour jus naturel.", visual: visual("🌺", gradients[3], "Hibiscus sabdariffa dried.jpg", "Fleurs d’hibiscus séchées pour bissap") },
  { id: "prod-folere", type: "product", name: "Foléré", category: "Boissons africaines", priceTry: 85, availability: "available", description: "Base traditionnelle pour boisson rouge.", visual: visual("🍷", gradients[0], "Bissap ou carcadé 01.jpg", "Foléré, fleurs d’hibiscus rouges") },
  { id: "prod-safou", type: "product", name: "Safou si disponible", category: "Produits sur commande", priceTry: 220, availability: "preorder", description: "Selon saison et arrivage spécial.", visual: visual("🫒", gradients[1], "Dacryodes edulis, ripe fruit - nsafu, safoutier, African pear.jpg", "Safou, prunes africaines mûres") },
  { id: "prod-epices-ndole", type: "product", name: "Épices pour ndolè", category: "Épices africaines", priceTry: 115, availability: "available", description: "Mélange maison pour une sauce plus profonde.", visual: visual("✨", gradients[2], "Spice Market in Istanbul.JPG", "Mélange d’épices pour ndolè") },
  { id: "prod-epices-poisson", type: "product", name: "Épices pour poisson braisé", category: "Épices africaines", priceTry: 125, availability: "available", description: "Marinade sèche pour braisage parfumé.", visual: visual("🔥", gradients[3], "SpiceMarket-MisirCarsisi-Istanbul.jpg", "Épices pour poisson braisé") },
  { id: "prod-meches-naturelles", type: "product", name: "Mèches naturelles", category: "Mèches et perruques", priceTry: 450, availability: "available", description: "Mèches effet naturel pour coiffures afro et poses élégantes.", visual: directVisual("💇", gradients[3], "https://cdn.pixabay.com/photo/2016/01/17/00/48/weft-extension-1144298_1280.jpg", "mèches naturelles afro") },
  { id: "prod-meches-synthetiques", type: "product", name: "Mèches synthétiques", category: "Mèches et perruques", priceTry: 280, availability: "available", description: "Mèches légères pour tresses, vanilles et styles protecteurs.", visual: directVisual("✨", gradients[0], "https://cdn.pixabay.com/photo/2016/01/17/00/48/tape-extension-1144296_1280.jpg", "mèches synthétiques pour coiffure afro") },
  { id: "prod-perruque-longue", type: "product", name: "Perruque longue", category: "Mèches et perruques", priceTry: 950, availability: "preorder", description: "Perruque longue pour un look féminin, soigné et facile à porter.", visual: directVisual("👩", gradients[2], "https://images.unsplash.com/photo-1767249624002-74a73e6f58cc?auto=format&fit=crop&w=1200&q=80", "perruque longue afro portée") },
  { id: "prod-perruque-courte", type: "product", name: "Perruque courte", category: "Mèches et perruques", priceTry: 780, availability: "available", description: "Perruque courte pratique, moderne et confortable au quotidien.", visual: directVisual("💁", gradients[1], "https://images.unsplash.com/photo-1763771444803-64684b6cae65?auto=format&fit=crop&w=1200&q=80", "perruques courtes en boutique") },
  { id: "prod-perruque-bouclee", type: "product", name: "Perruque bouclée", category: "Mèches et perruques", priceTry: 980, availability: "preorder", description: "Perruque bouclée avec volume, idéale pour styles afro glamour.", visual: directVisual("🌀", gradients[3], "https://images.unsplash.com/photo-1770445612539-1a49772a1c3f?auto=format&fit=crop&w=1200&q=80", "perruque bouclée afro") },
  { id: "prod-perruque-lisse", type: "product", name: "Perruque lisse", category: "Mèches et perruques", priceTry: 920, availability: "available", description: "Perruque lisse, finition propre, pour une coiffure rapide.", visual: directVisual("💆", gradients[2], "https://images.unsplash.com/photo-1763771444803-64684b6cae65?auto=format&fit=crop&w=1200&q=80", "perruque lisse en vitrine") },
  { id: "prod-tissage-afro", type: "product", name: "Tissage afro", category: "Mèches et perruques", priceTry: 520, availability: "available", description: "Tissage afro pour volume, longueur et coiffures protectrices.", visual: directVisual("🧵", gradients[1], "https://cdn.pixabay.com/photo/2016/01/17/00/48/weft-extension-1144298_1280.jpg", "tissage afro en mèches") },
  { id: "prod-braids-meches", type: "product", name: "Braids / mèches pour tresses", category: "Mèches et perruques", priceTry: 240, availability: "available", description: "Mèches pour braids, box braids et tresses longues.", visual: directVisual("🤎", gradients[0], "https://images.unsplash.com/photo-1634225605000-d02176a12d24?auto=format&fit=crop&w=1200&q=80", "mèches pour tresses afro braids") },
  { id: "prod-malta", type: "product", name: "Malta", category: "Boissons africaines", priceTry: 70, availability: "available", description: "Boisson maltée fraîche.", visual: visual("🍺", gradients[3], "Malta Goya.jpg", "Bouteille de boisson maltée Malta") },
  { id: "prod-jus-bissap", type: "product", name: "Jus de bissap", category: "Boissons africaines", priceTry: 85, availability: "available", description: "Jus rouge d’hibiscus servi frais.", visual: visual("🌺", gradients[0], "Hibiscus tea Wonjo.jpg", "Verre de jus de bissap rouge") },
  { id: "prod-jus-gingembre", type: "product", name: "Jus de gingembre", category: "Boissons africaines", priceTry: 85, availability: "available", description: "Jus de gingembre frais et tonique.", visual: visual("🫚", gradients[2], "Jus de gingembre-2025.jpg", "Jus de gingembre frais") }
];
