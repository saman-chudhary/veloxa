import { dealers } from "@/lib/data";
import { MapPin, Phone, Clock } from "lucide-react";

export default function DealersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Find a Store</p>
      <h1 className="font-display text-5xl tracking-wide mb-10">Our Dealers</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {dealers.map((d) => (
          <div key={d.slug} className="bg-secondary rounded-2xl p-6 border border-white/5">
            <h2 className="font-display text-2xl tracking-wide mb-4">{d.name}</h2>
            <div className="space-y-2 text-sm text-light/60">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{d.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent shrink-0" />
                <span>{d.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-accent shrink-0" />
                <span>{d.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-secondary rounded-2xl p-8 border border-white/5">
        <h2 className="font-display text-2xl tracking-wide mb-2">Become a Veloxa Dealer</h2>
        <p className="text-light/50 text-sm mb-6 max-w-2xl">
          Own a bike shop and want to stock or service Veloxa bikes? Fill out the
          form below and our partnerships team will follow up within 2 business days.
        </p>
        <form className="grid sm:grid-cols-2 gap-4">
          <input
            placeholder="Shop name"
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
          />
          <input
            placeholder="Contact email"
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
          />
          <input
            placeholder="City / Region"
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none sm:col-span-2"
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-accent text-dark font-semibold py-3 rounded-full hover:brightness-95 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
