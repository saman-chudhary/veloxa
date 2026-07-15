import Image from "next/image";
import Link from "next/link";
import { rentalCategories } from "@/lib/rental-categories";
import { formatPrice } from "@/lib/data";

export default function RentalsHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Book a Rental</p>
      <h1 className="font-display text-5xl tracking-wide mb-10">Choose Your Bike</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentalCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/rentals/${c.slug}`}
            className="group block bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={c.heroImage}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl tracking-wide mb-1">{c.name}</h2>
              <p className="text-light/50 text-sm mb-3">{c.tagline}</p>
              <span className="text-accent font-semibold">{formatPrice(c.pricePerDay)}/day</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
