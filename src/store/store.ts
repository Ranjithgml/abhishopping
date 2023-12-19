import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CartSlice } from "./slices/cart";
import { createCartSlice } from "./slices/cart";

type CreateState = CartSlice;

/**
 * Creates a Zustand store with the devtools middleware.
 *
 * @returns The created store with the devtools middleware.
 */
export const useStore = create<CreateState>()(
  devtools((...params) => ({
    ...createCartSlice(...params),
  }))
);
