import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">About Us</p>
          <h1 className="font-display text-5xl tracking-wide mb-6">
            Bicycles Are Our Work — And Our Obsession
          </h1>
          <p className="text-light/60 mb-4">
            Every rider has their own reasons to ride. At Veloxa, our job is to
            help you get further on whichever path you've chosen — through the
            bikes we sell, the people behind the counter, and the stories our
            community shares.
          </p>
          <p className="text-light/60">
            Founded on the idea that buying or renting a bike shouldn't require
            a showroom lecture, Veloxa combines craftsmanship, straightforward
            pricing, and same-day availability across our dealer network.
          </p>
        </div>
        <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/veloxa-11/1200/800"
            alt="Veloxa workshop"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "15+", label: "Years of Experience" },
            { stat: "40+", label: "Specialists on the Team" },
            { stat: "2", label: "Dealer Locations" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl text-accent tracking-wide">{s.stat}</p>
              <p className="text-light/50 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
