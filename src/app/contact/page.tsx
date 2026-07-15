import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-2">Contact</p>
        <h1 className="font-display text-5xl tracking-wide mb-6">Get In Touch</h1>
        <p className="text-light/60 mb-8">
          Questions about a bike, a rental booking, or a repair? Send us a
          message and we'll get back to you within one business day.
        </p>

        <div className="space-y-4 text-sm text-light/60">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-accent" />
            1095 Howard Street, San Francisco, USA
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-accent" />
            +1 (415) 555-0192
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-accent" />
            hello@veloxa.com
          </div>
        </div>
      </div>

      <form className="bg-secondary rounded-2xl p-8 border border-white/5 space-y-4">
        <input
          placeholder="Name"
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
        />
        <input
          placeholder="Email"
          type="email"
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none resize-none"
        />
        <button
          type="submit"
          className="w-full bg-accent text-dark font-semibold py-3 rounded-full hover:brightness-95 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
