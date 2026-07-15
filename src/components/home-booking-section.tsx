"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { rentalCategories } from "@/lib/rental-categories";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/context/cart-store";

export default function HomeBookingSection() {
  const addLine = useCartStore((s) => s.addLine);
  const setCartOpen = useCartStore((s) => s.setOpen);

  const [categorySlug, setCategorySlug] = useState(rentalCategories[0].slug);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [qty, setQty] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const category = rentalCategories.find((c) => c.slug === categorySlug)!;
  const cost = category.pricePerDay * qty;

  function handleCategoryChange(slug: string) {
    setCategorySlug(slug);
    setTime("");
    setConfirmed(false);
  }

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
    <div className="bg-secondary/95 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-1">Book a Rental</p>
          <h2 className="font-display text-3xl tracking-wide">Reserve Your Ride</h2>
        </div>
        <p className="text-light/50 text-sm">
          {formatPrice(category.pricePerDay)} / day · pick a date, time, and quantity
        </p>
      </div>

      <form onSubmit={handleBook} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="lg:col-span-1">
          <label className="block text-[11px] uppercase tracking-widest text-light/50 mb-1.5">
            Bike Type
          </label>
          <select
            value={categorySlug}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full bg-dark border border-white/10 rounded-lg px-3 py-3 text-sm focus:border-accent outline-none"
          >
            {rentalCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-widest text-light/50 mb-1.5">
            Date
          </label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setConfirmed(false);
            }}
            min={new Date().toISOString().split("T")[0]}
            className="w-full bg-dark border border-white/10 rounded-lg px-3 py-3 text-sm focus:border-accent outline-none"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-widest text-light/50 mb-1.5">
            Time Slot
          </label>
          <select
            required
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              setConfirmed(false);
            }}
            className="w-full bg-dark border border-white/10 rounded-lg px-3 py-3 text-sm focus:border-accent outline-none"
          >
            <option value="" disabled>
              Select a slot
            </option>
            {category.timeSlots.map((t) => (
              <option key={t.label} value={t.label}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-widest text-light/50 mb-1.5">
            Quantity
          </label>
          <div className="flex items-center border border-white/10 rounded-lg bg-dark">
            <button
              type="button"
              onClick={() => {
                setQty((q) => Math.max(1, q - 1));
                setConfirmed(false);
              }}
              className="w-10 h-[46px] text-light/60 hover:text-accent"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="flex-1 text-center text-sm">{qty}</span>
            <button
              type="button"
              onClick={() => {
                setQty((q) => q + 1);
                setConfirmed(false);
              }}
              className="w-10 h-[46px] text-light/60 hover:text-accent"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-accent text-dark font-semibold rounded-lg py-3 text-sm hover:brightness-95 transition h-[46px]"
        >
          Add to Cart — {formatPrice(cost)}
        </button>
      </form>

      {confirmed && (
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-4 py-3">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            {category.name} added to your cart — {date && new Date(date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}, {time}, ×{qty}
          </span>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="underline hover:no-underline"
            >
              View Cart
            </button>
            <Link href={`/rentals/${category.slug}`} className="underline hover:no-underline">
              View Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
