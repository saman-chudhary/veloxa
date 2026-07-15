"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/context/cart-store";

export default function BuyBox({
  slug,
  name,
  image,
  priceCents,
}: {
  slug: string;
  name: string;
  image: string;
  priceCents: number;
}) {
  const [qty, setQty] = useState(1);
  const addLine = useCartStore((s) => s.addLine);

  return (
    <div className="bg-secondary rounded-2xl p-6 border border-white/5 flex items-center justify-between gap-4">
      <div>
        <p className="text-light/50 text-xs uppercase tracking-widest mb-1">Purchase</p>
        <p className="text-3xl font-display tracking-wide text-accent">
          {formatPrice(priceCents)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-white/10 rounded-full">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-light/60 hover:text-accent"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-6 text-center text-sm">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-light/60 hover:text-accent"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            addLine({ slug, name, image, priceCents, quantity: qty, mode: "SALE" })
          }
          className="bg-accent text-dark font-semibold px-6 py-2.5 rounded-full hover:brightness-95 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
