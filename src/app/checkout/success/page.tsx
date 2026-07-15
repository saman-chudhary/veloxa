"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { useCartStore } from "@/context/cart-store";

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { order?: string };
}) {
  const clear = useCartStore((s) => s.clear);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <CheckCircle2 className="mx-auto text-accent mb-6" size={56} />
      <h1 className="font-display text-4xl tracking-wide mb-4">Order Confirmed</h1>
      <p className="text-light/60 mb-2">
        Thanks for riding with Veloxa — a confirmation email is on its way.
      </p>
      {searchParams.order && (
        <p className="text-light/40 text-sm mb-8">Order ref: {searchParams.order}</p>
      )}
      <Link
        href="/shop"
        className="inline-block bg-accent text-dark font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
