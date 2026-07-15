"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Trash2 } from "lucide-react";
import { useCartStore } from "@/context/cart-store";
import { formatPrice } from "@/lib/data";

export default function CartDrawer() {
  const { isOpen, setOpen, lines, removeLine, total } = useCartStore();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60]"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-secondary z-[70] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
          <h2 className="font-display text-2xl tracking-wide">
            Your Cart ({lines.length})
          </h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {lines.length === 0 && (
            <div className="text-light/50 text-sm py-12 text-center">
              Your cart is empty.
              <div className="mt-4">
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="text-accent underline"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          )}
          {lines.map((line) => (
            <div key={`${line.slug}-${line.mode}`} className="flex gap-3">
              <div className="relative w-20 h-16 rounded overflow-hidden shrink-0">
                <Image src={line.image} alt={line.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{line.name}</p>
                <p className="text-xs text-light/50 uppercase tracking-wide">
                  {line.mode === "RENTAL" ? "Rental" : "Purchase"}
                </p>
                {line.mode === "RENTAL" && line.rentalStart && (
                  <p className="text-xs text-light/50">
                    {line.rentalStart} · {line.rentalEnd} · Qty {line.quantity}
                  </p>
                )}
                <p className="text-sm text-accent mt-1">
                  {formatPrice(line.priceCents * line.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeLine(line.slug, line.mode)}
                className="text-light/40 hover:text-red-400"
                aria-label="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-white/5 p-6 space-y-4">
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="text-accent font-semibold">{formatPrice(total())}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block text-center bg-accent text-dark font-semibold py-3 rounded-full hover:brightness-95 transition"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
