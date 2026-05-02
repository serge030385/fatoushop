"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, LocalOrder } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  orders: LocalOrder[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  saveOrder: (order: LocalOrder) => void;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<LocalOrder[]>([]);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("fatoushop.cart");
    const savedOrders = window.localStorage.getItem("fatoushop.orders");
    if (savedCart) setItems(JSON.parse(savedCart));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("fatoushop.cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    window.localStorage.setItem("fatoushop.orders", JSON.stringify(orders));
  }, [orders]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      orders,
      addItem: (newItem) => {
        setItems((current) => {
          const existing = current.find((item) => item.id === newItem.id);
          if (existing) {
            return current.map((item) =>
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...current, { ...newItem, quantity: 1 }];
        });
      },
      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          setItems((current) => current.filter((item) => item.id !== id));
          return;
        }
        setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
      },
      removeItem: (id) => setItems((current) => current.filter((item) => item.id !== id)),
      clearCart: () => setItems([]),
      saveOrder: (order) => setOrders((current) => [order, ...current]),
      count: items.reduce((sum, item) => sum + item.quantity, 0)
    }),
    [items, orders]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
