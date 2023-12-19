import { StateCreator } from "zustand";

import { CartItem } from "../../api/products";

export interface CartSlice {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  items: [],
  setItems: (items) => set(() => ({ items })),
});
