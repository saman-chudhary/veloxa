"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { differenceInCalendarDays, format } from "date-fns";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/context/cart-store";

// In production, fetch this per-product from /api/availability?productId=...
// (derived from Prisma's BlockedDate + confirmed RentalBooking rows).
const MOCK_BLOCKED_DATES: Date[] = [
  new Date(new Date().getFullYear(), new Date().getMonth(), 18),
  new Date(new Date().getFullYear(), new Date().getMonth(), 19),
  new Date(new Date().getFullYear(), new Date().getMonth(), 20),
];

export default function BookingCalendar({
  slug,
  name,
  image,
  rentalPriceCents,
}: {
  slug: string;
  name: string;
  image: string;
  rentalPriceCents: number;
}) {
  const [range, setRange] = useState<DateRange | undefined>();
  const [name_, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const addLine = useCartStore((s) => s.addLine);

  const days =
    range?.from && range?.to
      ? Math.max(1, differenceInCalendarDays(range.to, range.from))
      : 0;
  const totalCents = days * rentalPriceCents;

  function handleReserve(e: React.FormEvent) {
    e.preventDefault();
    if (!range?.from || !range?.to || !name_ || !email) return;

    addLine({
      slug,
      name,
      image,
      priceCents: totalCents,
      quantity: 1,
      mode: "RENTAL",
      rentalStart: format(range.from, "MMM d, yyyy"),
      rentalEnd: format(range.to, "MMM d, yyyy"),
    });
    setConfirmed(true);
  }

  return (
    <div className="bg-secondary rounded-2xl p-6 border border-white/5">
      <h3 className="font-display text-2xl tracking-wide mb-1">Book a Rental</h3>
      <p className="text-light/50 text-sm mb-6">
        {formatPrice(rentalPriceCents)} / day &middot; select your pickup and return dates
      </p>

      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        disabled={[{ before: new Date() }, ...MOCK_BLOCKED_DATES]}
        modifiersClassNames={{
          selected: "bg-accent text-dark",
          range_middle: "bg-accent/20 text-light",
        }}
        className="rdp-veloxa"
      />

      {days > 0 && (
        <div className="mt-4 flex items-center justify-between text-sm border-t border-white/10 pt-4">
          <span className="text-light/60">
            {days} day{days > 1 ? "s" : ""} &middot; {format(range!.from!, "MMM d")} –{" "}
            {format(range!.to!, "MMM d")}
          </span>
          <span className="text-accent font-semibold text-lg">
            {formatPrice(totalCents)}
          </span>
        </div>
      )}

      {!confirmed ? (
        <form onSubmit={handleReserve} className="mt-5 space-y-3">
          <input
            type="text"
            required
            placeholder="Full name"
            value={name_}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:border-accent outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:border-accent outline-none"
          />
          <button
            type="submit"
            disabled={!range?.from || !range?.to}
            className="w-full bg-accent text-dark font-semibold py-3 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-95 transition"
          >
            Reserve These Dates
          </button>
        </form>
      ) : (
        <div className="mt-5 text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-4 py-3">
          Added to cart — head to checkout to confirm your booking.
        </div>
      )}
    </div>
  );
}
