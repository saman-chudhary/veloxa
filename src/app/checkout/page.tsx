"use client";

import { useState } from "react";
import { useCartStore } from "@/context/cart-store";
import { formatPrice } from "@/lib/data";

export default function CheckoutPage() {
  const { lines, total } = useCartStore();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines, email }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const { url } = await res.json();
      window.location.href = url; // redirect to Stripe Checkout
    } catch (err) {
      setError("Something went wrong starting checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center text-light/50">
        Your cart is empty — add a bike before checking out.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-5xl tracking-wide mb-10">Checkout</h1>

      <div className="bg-secondary rounded-2xl p-6 border border-white/5 mb-8">
        {lines.map((line) => (
          <div
            key={`${line.slug}-${line.mode}`}
            className="flex justify-between py-2 text-sm border-b border-white/5 last:border-0"
          >
            <span>
              {line.name} × {line.quantity}
            </span>
            <span className="text-accent">{formatPrice(line.priceCents * line.quantity)}</span>
          </div>
        ))}
        <div className="flex justify-between pt-4 text-lg">
          <span>Total</span>
          <span className="text-accent font-semibold">{formatPrice(total())}</span>
        </div>
      </div>

      <form onSubmit={handleCheckout} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Email for receipt & confirmation"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-dark font-semibold py-3.5 rounded-full disabled:opacity-50 hover:brightness-95 transition"
        >
          {loading ? "Redirecting to secure checkout…" : "Pay with Stripe"}
        </button>
        <p className="text-xs text-light/40 text-center">
          Payment is securely processed by Stripe. Veloxa never stores your card details.
        </p>
      </form>
    </div>
  );
}
