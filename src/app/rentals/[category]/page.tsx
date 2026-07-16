import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock } from "lucide-react";
import { rentalCategories, getRentalCategory } from "@/lib/rental-categories";
import { blogPosts } from "@/lib/data";
import CategoryBookingPanel from "@/components/category-booking-panel";

export function generateStaticParams() {
  return rentalCategories.map((c) => ({ category: c.slug }));
}

export default function RentalCategoryPage({ params }: { params: { category: string } }) {
  const category = getRentalCategory(params.category);
  if (!category) return notFound();

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="relative h-80 md:h-[560px] rounded-2xl overflow-hidden">
          <Image src={category.heroImage} alt={category.name} fill priority className="object-cover" />
        </div>
        <Suspense fallback={<div className="text-light/50">Loading booking form...</div>}>
          <CategoryBookingPanel slug={category.slug} />
        </Suspense>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.featureCards.map((f) => (
            <div key={f.title} className="bg-dark rounded-2xl p-6 border border-white/5">
              <f.icon size={22} className="text-accent mb-4" />
              <h3 className="font-display text-lg tracking-wide mb-2">{f.title}</h3>
              <p className="text-light/50 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">What's Included</p>
          <h2 className="font-display text-4xl tracking-wide mb-6">{category.includedTitle}</h2>
          <p className="text-light/60 mb-6">{category.includedBody}</p>
          <ul className="space-y-2">
            {category.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-light/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
          <Image src={category.includedImage} alt={category.includedTitle} fill className="object-cover" />
        </div>
      </section>

      {/* LOCATION / SERVICE */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden order-2 md:order-1">
            <Image src={category.locationImage} alt={category.locationTitle} fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Why Choose Us</p>
            <h2 className="font-display text-4xl tracking-wide mb-6">{category.locationTitle}</h2>
            <p className="text-light/60 mb-6">{category.locationBody}</p>
            <ul className="space-y-2 mb-6">
              {category.locationBullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-light/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/dealers"
              className="inline-block border border-light/20 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition text-sm"
            >
              See Dealer Locations
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO RESERVE + PRICING */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12">
        <div className="bg-secondary rounded-2xl p-8 border border-white/5">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">How To Reserve</p>
          <h2 className="font-display text-3xl tracking-wide mb-8">Three Easy Steps</h2>
          <div className="space-y-6">
            {category.reserveSteps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <span className="font-display text-2xl text-accent w-8 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg tracking-wide">{s.title}</h3>
                  <p className="text-light/50 text-sm">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark border border-accent/20 rounded-2xl p-8">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Save More</p>
          <h2 className="font-display text-3xl tracking-wide mb-8">Rent Longer, Pay Less</h2>
          <div className="space-y-4">
            {category.pricingTiers.map((t) => (
              <div
                key={t.label}
                className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0"
              >
                <span className="text-light/70 text-sm">{t.label}</span>
                <span className="text-accent font-semibold">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Testimonials</p>
          <h2 className="font-display text-4xl tracking-wide mb-10">What Riders Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Elena Cross", quote: `Rented a ${category.name.toLowerCase()} for the weekend — booking took two minutes and it was spotless.` },
              { name: "David Ruiz", quote: "Delivery showed up right on time and the bike was perfectly tuned." },
              { name: "Priya Nair", quote: "Easiest rental process I've used — no showroom small talk, just a great ride." },
            ].map((t) => (
              <div key={t.name} className="bg-dark rounded-2xl p-6 border border-white/5">
                <p className="text-light/70 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-display tracking-wide text-accent">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden h-72 flex items-center">
          <Image src={category.locationImage} alt="" fill className="object-cover brightness-50" />
          <div className="relative z-10 px-10">
            <h2 className="font-display text-4xl tracking-wide mb-3">Ready to Ride?</h2>
            <p className="text-light/70 mb-6 max-w-md">
              Questions first? Get in touch and we'll help you pick the right {category.name.toLowerCase()}.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-dark font-semibold px-7 py-3 rounded-full hover:brightness-95 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Our Journal</p>
        <h2 className="font-display text-4xl tracking-wide mb-10">Everything You Need To Know</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors"
            >
              <div className="relative h-40">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-light/40 mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
                <h3 className="font-display text-lg tracking-wide">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
