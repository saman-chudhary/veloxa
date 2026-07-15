"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories, brands, ListingType } from "@/lib/data";
import ProductCard from "@/components/product-card";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get("type") as ListingType | null) ?? "ALL";

  const [type, setType] = useState<ListingType | "ALL">(initialType);
  const [category, setCategory] = useState<string>("ALL");
  const [brand, setBrand] = useState<string>("ALL");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (type !== "ALL" && p.type !== type && p.type !== "BOTH") return false;
      if (category !== "ALL" && p.category !== category) return false;
      if (brand !== "ALL" && p.brand !== brand) return false;
      return true;
    });
  }, [type, category, brand]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Inventory</p>
      <h1 className="font-display text-5xl tracking-wide mb-10">Shop All Bikes</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {/* FILTERS */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-display text-lg tracking-wide text-accent mb-3">Listing</h3>
            <div className="space-y-2 text-sm">
              {(["ALL", "SALE", "RENTAL"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                    type === t ? "bg-accent text-dark font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  {t === "ALL" ? "All" : t === "SALE" ? "For Sale" : "For Rent"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide text-accent mb-3">Category</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => setCategory("ALL")}
                className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                  category === "ALL" ? "bg-accent text-dark font-semibold" : "hover:bg-secondary"
                }`}
              >
                All Categories
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                    category === c ? "bg-accent text-dark font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide text-accent mb-3">Brand</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => setBrand("ALL")}
                className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                  brand === "ALL" ? "bg-accent text-dark font-semibold" : "hover:bg-secondary"
                }`}
              >
                All Brands
              </button>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                    brand === b ? "bg-accent text-dark font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* GRID */}
        <div className="md:col-span-3">
          {filtered.length === 0 ? (
            <p className="text-light/50">No bikes match those filters yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
