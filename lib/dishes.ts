import { commonsImage } from "@/lib/media";
import type { Dish } from "@/lib/types";

const g = {
  green: "from-palm/85 via-gold/60 to-cream",
  orange: "from-orange/85 via-gold/70 to-cream",
  cocoa: "from-cocoa/85 via-earth/75 to-gold/40",
  earth: "from-earth/85 via-orange/60 to-cream"
};

function visual(emoji: string, gradient: string, fileName: string, imageAlt: string) {
  return { emoji, gradient, imageUrl: commonsImage(fileName), imageAlt };
}

export const dishes: Dish[] = [
  { id: "dish-beignets-haricots", type: "dish", category: "Entrées", name: "Beignets haricots", description: "Beignets dorés servis avec haricots épicés.", priceTry: 150, availability: "available", visual: visual("🫘", g.orange, "Beignets KOKI.jpg", "Beignets de haricots camerounais") },
  { id: "dish-pastels", type: "dish", category: "Entrées", name: "Pastels africains", description: "Chaussons croustillants, sauce tomate relevée.", priceTry: 140, availability: "available", visual: visual("🥟", g.earth, "Fataya.jpg", "Pastels africains frits") },
  { id: "dish-brochettes", type: "dish", category: "Entrées", name: "Brochettes", description: "Petites brochettes marinées façon maison.", priceTry: 170, availability: "preorder", visual: visual("🍢", g.cocoa, "Vendeur brochettes.jpg", "Brochettes de viande grillées") },
  { id: "dish-salade-avocat", type: "dish", category: "Entrées", name: "Salade avocat-crevettes", description: "Fraîche, douce, idéale avant un plat braisé.", priceTry: 190, availability: "preorder", visual: visual("🥑", g.green, "Shrimp and Avocado Salad (13329194373).jpg", "Salade avocat-crevettes") },
  { id: "dish-ndole-plantain", type: "dish", category: "Plats principaux", name: "Ndolè plantain", description: "Ndolè camerounais, arachides, plantain mûr.", priceTry: 320, availability: "available", visual: visual("🌿", g.green, "Plat de Ndolè avec Plantains Tapés Frits +Poisson Frit.jpg", "Ndolè camerounais avec plantain frit") },
  { id: "dish-poulet-dg", type: "dish", category: "Plats principaux", name: "Poulet DG", description: "Poulet, légumes sautés et plantain frit.", priceTry: 350, availability: "available", visual: visual("🍗", g.orange, "Poulet DG.JPG", "Poulet DG camerounais avec plantain") },
  { id: "dish-eru", type: "dish", category: "Plats principaux", name: "Eru", description: "Feuilles, viande/poisson, garri ou water fufu.", priceTry: 380, availability: "preorder", visual: visual("🥬", g.green, "Le Eru, un plat camerounais.jpg", "Eru camerounais avec fufu") },
  { id: "dish-koki", type: "dish", category: "Plats principaux", name: "Koki", description: "Gâteau de haricots, huile rouge, plantain.", priceTry: 300, availability: "preorder", visual: visual("🍲", g.orange, "Koki and ripe plantains.jpg", "Koki camerounais avec plantain") },
  { id: "dish-taro", type: "dish", category: "Plats principaux", name: "Taro sauce jaune", description: "Taro pilé et sauce jaune traditionnelle.", priceTry: 390, availability: "preorder", visual: visual("🥔", g.earth, "Achu and Yellow Soup with vegetable.jpg", "Taro sauce jaune camerounais") },
  { id: "dish-achu", type: "dish", category: "Plats principaux", name: "Achu", description: "Spécialité généreuse, sauce jaune parfumée.", priceTry: 390, availability: "preorder", visual: visual("🍛", g.cocoa, "Achu, a traditional meal from the North West and West Regions of Cameroon.jpg", "Achu camerounais avec sauce jaune") },
  { id: "dish-mbongo", type: "dish", category: "Plats principaux", name: "Mbongo tchobi", description: "Sauce noire épicée, poisson ou viande.", priceTry: 360, availability: "preorder", visual: visual("🖤", g.cocoa, "Mbongo tchobi et banae plantin malxé.jpg", "Mbongo tchobi camerounais") },
  { id: "dish-poisson-braise", type: "dish", category: "Plats principaux", name: "Poisson braisé", description: "Poisson mariné, plantain ou frites.", priceTry: 420, availability: "available", visual: visual("🐟", g.orange, "Roasted fish and bobolo.jpg", "Poisson braisé avec bobolo") },
  { id: "dish-poulet-braise", type: "dish", category: "Plats principaux", name: "Poulet braisé", description: "Poulet grillé, sauce oignon, accompagnement.", priceTry: 330, availability: "available", visual: visual("🔥", g.earth, "Poulet braisé, frites et bières..JPG", "Poulet braisé camerounais") },
  { id: "dish-soya", type: "dish", category: "Plats principaux", name: "Soya", description: "Viande grillée épicée, style rue camerounaise.", priceTry: 280, availability: "available", visual: visual("🥩", g.cocoa, "Le soya 50-50.jpg", "Soya camerounais grillé") },
  { id: "dish-okok", type: "dish", category: "Plats principaux", name: "Okok", description: "Feuilles, arachide, huile rouge, douceur maison.", priceTry: 340, availability: "preorder", visual: visual("🍃", g.green, "Okok and kassava.jpg", "Okok camerounais avec manioc") },
  { id: "dish-pile", type: "dish", category: "Plats principaux", name: "Pilé pommes", description: "Pommes pilées, haricots et huile rouge.", priceTry: 300, availability: "available", visual: visual("🥔", g.orange, "Pommes pilées du Cameroun.jpg", "Pilé pommes camerounais") },
  { id: "dish-riz-arachide", type: "dish", category: "Plats principaux", name: "Riz sauce arachide", description: "Riz blanc et sauce arachide onctueuse.", priceTry: 270, availability: "available", visual: visual("🥜", g.earth, "Maafé.jpg", "Riz avec sauce arachide") },
  { id: "dish-riz-gombo", type: "dish", category: "Plats principaux", name: "Riz sauce gombo", description: "Sauce gombo, poisson ou viande selon jour.", priceTry: 290, availability: "preorder", visual: visual("🍚", g.green, "Fufu 1.jpg", "Sauce gombo servie avec riz") },
  { id: "dish-nkui", type: "dish", category: "Plats principaux", name: "Couscous maïs sauce nkui", description: "Classique camerounais à réserver.", priceTry: 330, availability: "preorder", visual: visual("🌽", g.orange, "Fufu Corn.jpg", "Couscous maïs sauce nkui") },
  { id: "side-plantain", type: "dish", category: "Accompagnements", name: "Plantain frit", description: "Doré, doux, servi chaud.", priceTry: 95, availability: "available", visual: visual("🍌", g.orange, "Fried plantains.jpg", "Plantain frit doré") },
  { id: "side-bobolo", type: "dish", category: "Accompagnements", name: "Bobolo", description: "Accompagnement manioc traditionnel.", priceTry: 70, availability: "available", visual: visual("🍘", g.earth, "Fabrication des gros bâtons de manioc (Bobolo).jpg", "Bobolo camerounais") },
  { id: "side-baton", type: "dish", category: "Accompagnements", name: "Bâton de manioc", description: "Simple, généreux, parfait avec sauces.", priceTry: 70, availability: "available", visual: visual("🥖", g.cocoa, "Bâtons de manioc.jpg", "Bâton de manioc") },
  { id: "side-riz", type: "dish", category: "Accompagnements", name: "Riz blanc", description: "Portion individuelle.", priceTry: 65, availability: "available", visual: visual("🍚", g.green, "Cooked white rice.jpg", "Riz blanc cuit") },
  { id: "side-frites", type: "dish", category: "Accompagnements", name: "Frites", description: "Croustillantes et simples.", priceTry: 80, availability: "available", visual: visual("🍟", g.orange, "French fries.jpg", "Frites dorées") },
  { id: "side-miondo", type: "dish", category: "Accompagnements", name: "Miondo", description: "Manioc fermenté selon arrivage.", priceTry: 75, availability: "preorder", visual: visual("🌾", g.earth, "Miondo.jpg", "Miondo camerounais") },
  { id: "side-couscous", type: "dish", category: "Accompagnements", name: "Couscous maïs", description: "Accompagnement pour sauces traditionnelles.", priceTry: 85, availability: "preorder", visual: visual("🌽", g.green, "Cornmeal.jpg", "Couscous de maïs") },
  { id: "dessert-beignets", type: "dish", category: "Desserts", name: "Beignets", description: "Sucrés, moelleux, servis par portion.", priceTry: 100, availability: "available", visual: visual("🍩", g.orange, "Beignets KOKI.jpg", "Beignets camerounais") },
  { id: "dessert-gateau", type: "dish", category: "Desserts", name: "Gâteau maison", description: "Selon préparation du jour.", priceTry: 120, availability: "available", visual: visual("🍰", g.earth, "Homemade cake.jpg", "Gâteau maison") },
  { id: "dessert-fruits", type: "dish", category: "Desserts", name: "Fruits frais", description: "Assiette fraîche selon saison.", priceTry: 110, availability: "available", visual: visual("🍍", g.green, "Fresh fruit plate.jpg", "Assiette de fruits frais") },
  { id: "dessert-tapioca", type: "dish", category: "Desserts", name: "Tapioca au lait", description: "Dessert doux, familial et réconfortant.", priceTry: 130, availability: "preorder", visual: visual("🥣", g.cocoa, "Tapioca Pudding.jpg", "Tapioca au lait") },
  { id: "preorder-ndole-royal", type: "dish", category: "Plats sur commande", name: "Ndolè royal", description: "Grande portion festive avec garnitures.", priceTry: 620, availability: "preorder", visual: visual("👑", g.green, "Ndolé SAWA.jpg", "Ndolè royal camerounais") },
  { id: "preorder-eru-complet", type: "dish", category: "Plats sur commande", name: "Eru complet", description: "Version généreuse pour repas complet.", priceTry: 680, availability: "preorder", visual: visual("🥬", g.cocoa, "Fufu and Eru.jpg", "Eru complet camerounais") },
  { id: "preorder-taro", type: "dish", category: "Plats sur commande", name: "Taro sauce jaune", description: "Commande anticipée recommandée.", priceTry: 700, availability: "preorder", visual: visual("🍛", g.orange, "Achu meal.jpg", "Taro sauce jaune en grande portion") },
  { id: "preorder-poisson-family", type: "dish", category: "Plats sur commande", name: "Poisson braisé familial", description: "Format à partager, accompagnements inclus.", priceTry: 900, availability: "preorder", visual: visual("🐟", g.earth, "Roasted fish and bobolo.jpg", "Poisson braisé familial") },
  { id: "preorder-buffet", type: "dish", category: "Plats sur commande", name: "Buffet camerounais", description: "Buffet pour groupe, devis par WhatsApp.", priceTry: 1500, availability: "preorder", visual: visual("🍽️", g.cocoa, "Poulet GD (fried chicken with ripe plantains and mixed vegetables).jpg", "Buffet camerounais avec poulet et plantain") }
];
