import Image from "next/image";
import Link from "next/link";
import { MapPin, Truck, ShieldCheck, Star } from "lucide-react";
import { products, blogPosts } from "@/lib/data";
import ProductCard from "@/components/product-card";
import HomeBookingSection from "@/components/home-booking-section";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-speed-lines">
        <div className="relative h-[520px] md:h-[600px]">
          <Image
            src="https://picsum.photos/seed/veloxa-15/1200/800"
            alt="Rider on a Veloxa bike"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-center">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">
              Buy. Rent. Ride.
            </p>
            <h1 className="font-display text-6xl sm:text-7xl leading-[0.95] tracking-wide max-w-2xl">
              THE CITY'S PREMIER RIDING EXPERIENCE
            </h1>
            <p className="text-light/70 mt-6 max-w-lg">
              Road, mountain, and e-bikes — ready to buy outright or book by
              the day. Reserve below and we'll have it waiting for you.
            </p>
          </div>
        </div>

        {/* Booking section overlaps hero + next section */}
        <div className="mx-auto max-w-6xl px-6 -mt-10 relative z-20">
          <HomeBookingSection />
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">About Us</p>
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <h2 className="font-display text-4xl tracking-wide">
            Whether It's Your First Ride Or Your Thousandth, We Make It Easy
          </h2>
          <p className="text-light/60">
            Veloxa combines a curated fleet, straightforward pricing, and
            same-day availability across our dealer network — so buying or
            renting a bike never requires a showroom lecture.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MapPin, title: "Local Locations", text: "Two dealer locations with fast pickup and delivery windows." },
            { icon: Truck, title: "Free Delivery", text: "Free delivery and pickup within city limits on every rental." },
            { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and tuned before it reaches you." },
            { icon: Star, title: "5-Star Service", text: "Real riders on staff — honest advice, no upsell pressure." },
          ].map((f) => (
            <div key={f.title} className="bg-secondary rounded-2xl p-6 border border-white/5">
              <f.icon size={22} className="text-accent mb-4" />
              <h3 className="font-display text-lg tracking-wide mb-2">{f.title}</h3>
              <p className="text-light/50 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-secondary py-24 diagonal-clip-bottom">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">What's Included</p>
            <h2 className="font-display text-4xl tracking-wide mb-6">
              Everything You Need (And More)
            </h2>
            <p className="text-light/60 mb-4">
              Every rental comes fully loaded with a properly fitted helmet, a
              trailside repair kit, and a quick-release rack if you need to
              transport it further.
            </p>
            <p className="text-light/60">
              We also offer flexible rescheduling and full refunds on
              cancellations made 24 hours ahead.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/veloxa-5/1200/800"
              alt="Bike gear included with every rental"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WORKSHOP & SERVICE */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden order-2 md:order-1">
          <Image
            src="https://picsum.photos/seed/veloxa-7/1200/800"
            alt="Veloxa workshop"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Workshop & Service</p>
          <h2 className="font-display text-4xl tracking-wide mb-6">
            We Do The Heavy Lifting, You Do The Riding
          </h2>
          <p className="text-light/60 mb-4">
            Our fleet is based at our downtown shop with same-day delivery
            across the city. Reserve online, get a confirmation with your
            delivery window, and we'll have the bike waiting — tuned and
            ready — wherever you're starting your ride.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              href="/rentals"
              className="bg-accent text-dark font-semibold px-6 py-3 rounded-full hover:brightness-95 transition text-sm"
            >
              Browse Rentals
            </Link>
            <Link
              href="/dealers"
              className="border border-light/20 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition text-sm"
            >
              Find a Dealer
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Our Products</p>
              <h2 className="font-display text-4xl tracking-wide">Featured Bikes</h2>
            </div>
            <Link href="/shop" className="text-sm text-accent hover:underline hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Testimonials</p>
        <h2 className="font-display text-4xl tracking-wide mb-10">What Riders Say</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Elena Cross", city: "Visiting from Denver", quote: "First road bike purchase and the team never made me feel like I was asking a dumb question." },
            { name: "David Ruiz", city: "Local Resident", quote: "Rented a trail bike for a weekend trip — booking online took two minutes." },
            { name: "Priya Nair", city: "Visiting from Austin", quote: "Brought my own bike in for a brake adjustment and they had it done same-day." },
            { name: "The Osei Family", city: "Visiting from Chicago", quote: "Sized bikes for all three kids in ten minutes flat. Everyone had a blast." },
          ].map((t) => (
            <div key={t.name} className="bg-secondary rounded-2xl p-6 border border-white/5">
              <p className="text-light/70 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-display tracking-wide text-accent">{t.name}</p>
              <p className="text-light/40 text-xs">{t.city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden h-80 flex items-center">
          <Image
            src="https://picsum.photos/seed/veloxa-16/1200/800"
            alt=""
            fill
            className="object-cover brightness-50"
          />
          <div className="relative z-10 px-10">
            <h2 className="font-display text-4xl sm:text-5xl tracking-wide mb-3">
              Let's Get You On The Road
            </h2>
            <p className="text-light/70 mb-6 max-w-md">
              Questions first? Get in touch and we'll help you find the right
              bike for however you ride.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-dark font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Our Journal</p>
          <h2 className="font-display text-4xl tracking-wide mb-10">Everything You Need To Know</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors"
              >
                <div className="relative h-44">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-light/40 mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-display text-xl tracking-wide">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
