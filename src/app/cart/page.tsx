"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/context/cart-store";
import { formatPrice } from "@/lib/data";

export default function CartPage() {
  const { lines, removeLine, updateQuantity, total } = useCartStore();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-5xl tracking-wide mb-10">Your Cart</h1>

      {lines.length === 0 ? (
        <div className="text-light/50">
          Your cart is empty.{" "}
          <Link href="/shop" className="text-accent underline">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            {lines.map((line) => (
              <div
                key={`${line.slug}-${line.mode}`}
                className="flex gap-4 bg-secondary rounded-2xl p-4 border border-white/5"
              >
                <div className="relative w-28 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image src={line.image} alt={line.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-xl tracking-wide">{line.name}</p>
                  <p className="text-xs text-light/40 uppercase tracking-wide mb-2">
                    {line.mode === "RENTAL" ? "Rental" : "Purchase"}
                  </p>
                  {line.mode === "RENTAL" && line.rentalStart ? (
                    <p className="text-sm text-light/50">
                      {line.rentalStart} · {line.rentalEnd} · Qty {line.quantity}
                    </p>
                  ) : (
                    <div className="flex items-center border border-white/10 rounded-full w-fit">
                      <button
                        onClick={() =>
                          updateQuantity(line.slug, line.mode, Math.max(1, line.quantity - 1))
                        }
                        className="w-8 h-8 text-sm text-light/60 hover:text-accent"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{line.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(line.slug, line.mode, line.quantity + 1)
                        }
                        className="w-8 h-8 text-sm text-light/60 hover:text-accent"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-accent font-semibold mb-2">
                    {formatPrice(line.priceCents * line.quantity)}
                  </p>
                  <button
                    onClick={() => removeLine(line.slug, line.mode)}
                    className="text-xs text-light/40 hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-6 border border-white/5 h-fit">
            <div className="flex justify-between text-lg mb-6">
              <span>Total</span>
              <span className="text-accent font-semibold">{formatPrice(total())}</span>
            </div>
            <Link
              href="/checkout"
              className="block text-center bg-accent text-dark font-semibold py-3 rounded-full hover:brightness-95 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
