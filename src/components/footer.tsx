import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="font-display text-3xl tracking-wide mb-4">
            VELOX<span className="text-accent">A</span>
          </div>
          <p className="text-light/60 text-sm max-w-xs">
            Bikes built for motion. Buy or rent road, mountain, and e-bikes
            with real-time availability — no showroom small talk required.
          </p>
          <div className="flex gap-4 mt-6 text-light/60">
            <Facebook size={18} className="hover:text-accent cursor-pointer" />
            <Instagram size={18} className="hover:text-accent cursor-pointer" />
            <Twitter size={18} className="hover:text-accent cursor-pointer" />
            <Linkedin size={18} className="hover:text-accent cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-wide text-accent mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-light/70">
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/shop" className="hover:text-accent">Shop</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Journal</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-wide text-accent mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-light/70">
            <li><Link href="/shop?type=RENTAL" className="hover:text-accent">Bikes for Rent</Link></li>
            <li><Link href="/dealers" className="hover:text-accent">Dealers</Link></li>
            <li><Link href="/account" className="hover:text-accent">My Account</Link></li>
            <li><Link href="/cart" className="hover:text-accent">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-wide text-accent mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-light/70">
            <li>Mon–Fri: 08:00–22:00</li>
            <li>Saturday: 08:00–20:00</li>
            <li>Sunday: 08:00–18:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-light/40">
        © {new Date().getFullYear()} Veloxa. All rights reserved.
      </div>
    </footer>
  );
}
