import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products, formatPrice } from "@/lib/data";
import BookingCalendar from "@/components/booking-calendar";
import BuyBox from "@/components/buy-box";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const specs = [
    { label: "Brand", value: product.brand },
    { label: "Weight", value: product.weightKg ? `${product.weightKg} kg` : "—" },
    { label: "Material", value: product.material },
    { label: "Frame Size", value: product.frameSize },
    { label: "Color", value: product.color },
  ];

  const canBuy = product.type === "SALE" || product.type === "BOTH";
  const canRent = product.type === "RENTAL" || product.type === "BOTH";

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12">
      <div className="relative h-80 md:h-[520px] rounded-2xl overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
      </div>

      <div>
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">
          {product.category}
        </p>
        <h1 className="font-display text-5xl tracking-wide mb-4">{product.name}</h1>
        <p className="text-light/60 mb-8">{product.description}</p>

        <table className="w-full text-sm mb-10">
          <tbody>
            {specs.map((s) => (
              <tr key={s.label} className="border-b border-white/5">
                <td className="py-2.5 text-light/40 w-1/3">{s.label}</td>
                <td className="py-2.5">{s.value ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="space-y-6">
          {canBuy && (
            <BuyBox
              slug={product.slug}
              name={product.name}
              image={product.image}
              priceCents={product.salePriceCents!}
            />
          )}
          {canRent && (
            <BookingCalendar
              slug={product.slug}
              name={product.name}
              image={product.image}
              rentalPriceCents={product.rentalPriceCents!}
            />
          )}
        </div>
      </div>
    </div>
  );
}
