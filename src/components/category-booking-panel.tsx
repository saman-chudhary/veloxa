"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Heart } from "lucide-react";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/context/cart-store";
import { getRentalCategory } from "@/lib/rental-categories";

export default function CategoryBookingPanel({ slug }: { slug: string }) {
  const category = getRentalCategory(slug)!;
  const searchParams = useSearchParams();
  const addLine = useCartStore((s) => s.addLine);
  const [date, setDate] = useState(searchParams.get("date") ?? "");
  const [time, setTime] = useState(searchParams.get("time") ?? "");
  const [qty, setQty] = useState(Number(searchParams.get("qty")) || 1);
  const [confirmed, setConfirmed] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setConfirmed(false);
  }, [date, time, qty]);

  const cost = category.pricePerDay * qty;

  function handleBook(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !time) return;
    const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    addLine({
      slug: category.slug,
      name: `${category.name} Rental`,
      image: category.heroImage,
      priceCents: category.pricePerDay,
      quantity: qty,
      mode: "RENTAL",
      rentalStart: formattedDate,
      rentalEnd: time,
    });
    setConfirmed(true);
  }

  return (
    <div>
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">{category.tagline}</p>
      <h1 className="font-display text-5xl tracking-wide mb-4">{category.name} Rental</h1>
      <p className="font-display text-3xl text-accent mb-4">
        {formatPrice(category.pricePerDay)}
        <span className="text-light/40 text-base font-body">/day</span>
      </p>
      <p className="text-light/60 mb-8">{category.description}</p>

      <form onSubmit={handleBook} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">
              Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">
              Rental Time
            </label>
            <select
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
            >
              <option value="" disabled>
                Select a time slot
              </option>
              {category.timeSlots.map((t) => (
                <option key={t.label} value={t.label}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">
            Quantity
          </label>
          <div className="flex items-center border border-white/10 rounded-lg bg-secondary w-fit">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-11 h-11 text-light/60 hover:text-accent"
            >
              −
            </button>
            <span className="w-10 text-center text-sm">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="w-11 h-11 text-light/60 hover:text-accent"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-light/50 text-sm">Total for {qty} bike{qty > 1 ? "s" : ""}</span>
          <span className="text-accent font-display text-2xl tracking-wide">
            {formatPrice(cost)}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-accent text-dark font-semibold py-4 rounded-full hover:brightness-95 transition"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setSaved((s) => !s)}
            aria-label="Save to wishlist"
            className={`w-14 rounded-full border flex items-center justify-center transition ${
              saved ? "border-accent text-accent" : "border-white/10 text-light/40 hover:text-accent"
            }`}
          >
            <Heart size={18} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>

        {confirmed && (
          <div className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-4 py-3">
            Added to cart — head to checkout to confirm your booking.
          </div>
        )}
      </form>
    </div>
  );
}
