"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartLine {
  slug: string;
  name: string;
  image: string;
  priceCents: number;
  quantity: number;
  mode: "SALE" | "RENTAL";
  rentalStart?: string;
  rentalEnd?: string;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  addLine: (line: CartLine) => void;
  removeLine: (slug: string, mode: CartLine["mode"]) => void;
  updateQuantity: (slug: string, mode: CartLine["mode"], quantity: number) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  total: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      addLine: (line) =>
        set((state) => {
          const existing = state.lines.find(
            (l) => l.slug === line.slug && l.mode === line.mode
          );
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.slug === line.slug && l.mode === line.mode
                  ? { ...l, quantity: l.quantity + line.quantity }
                  : l
              ),
              isOpen: true,
            };
          }
          return { lines: [...state.lines, line], isOpen: true };
        }),
      removeLine: (slug, mode) =>
        set((state) => ({
          lines: state.lines.filter((l) => !(l.slug === slug && l.mode === mode)),
        })),
      updateQuantity: (slug, mode, quantity) =>
        set((state) => ({
          lines: state.lines.map((l) =>
            l.slug === slug && l.mode === mode ? { ...l, quantity } : l
          ),
        })),
      clear: () => set({ lines: [] }),
      setOpen: (open) => set({ isOpen: open }),
      total: () =>
        get().lines.reduce((sum, l) => sum + l.priceCents * l.quantity, 0),
    }),
    { name: "veloxa-cart" }
  )
);
