export type Availability = "available" | "preorder" | "unavailable";

export type ProductCategory =
  | "Épices africaines"
  | "Produits frais"
  | "Produits secs"
  | "Farines & féculents"
  | "Conserves africaines"
  | "Boissons africaines"
  | "Mèches et perruques"
  | "Produits sur commande";

export type DishCategory =
  | "Entrées"
  | "Plats principaux"
  | "Accompagnements"
  | "Desserts"
  | "Plats sur commande";

export type DrinkCategory =
  | "Jus naturels"
  | "Boissons africaines"
  | "Cocktails sans alcool"
  | "Boissons fraîches"
  | "Café / thé";

export type CatalogItemBase = {
  id: string;
  name: string;
  description: string;
  priceTry: number;
  availability: Availability;
  visual: {
    emoji: string;
    gradient: string;
    imageUrl: string;
    imageAlt: string;
  };
};

export type Product = CatalogItemBase & {
  type: "product";
  category: ProductCategory;
};

export type Dish = CatalogItemBase & {
  type: "dish";
  category: DishCategory;
};

export type Drink = CatalogItemBase & {
  type: "drink";
  category: DrinkCategory;
};

export type CartItem = {
  id: string;
  sourceType: Product["type"] | Dish["type"] | Drink["type"];
  name: string;
  priceTry: number;
  quantity: number;
  visual: CatalogItemBase["visual"];
};

export type OrderType = "pickup" | "delivery" | "reservation";
export type PaymentMethod = "cash_pickup" | "cash_delivery";

export type LocalOrder = {
  id: string;
  orderNumber: string;
  customerName: string;
  whatsapp: string;
  orderType: OrderType;
  address?: string;
  requestedAt: string;
  note?: string;
  paymentMethod: PaymentMethod;
  totalTry: number;
  createdAt: string;
  items: CartItem[];
};

export type ReservationRequest = {
  mode: "table" | "dish";
  people: number;
  date: string;
  time: string;
  name: string;
  whatsapp: string;
  message: string;
};
