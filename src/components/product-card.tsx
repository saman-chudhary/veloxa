import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const badge =
    product.type === "RENTAL"
      ? "For Rent"
      : product.type === "BOTH"
      ? "Buy or Rent"
      : "For Sale";

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-dark/80 text-accent text-[11px] uppercase tracking-widest px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-light/40 mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-2xl tracking-wide mb-2">{product.name}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-light/50">{product.brand}</span>
          <span className="text-accent font-semibold">
            {product.type === "RENTAL"
              ? `${formatPrice(product.rentalPriceCents)}/day`
              : formatPrice(product.salePriceCents)}
          </span>
        </div>
      </div>
    </Link>
  );
}
