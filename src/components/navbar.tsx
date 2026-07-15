"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useCartStore } from "@/context/cart-store";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/rentals", label: "Rentals" },
  { href: "/blog", label: "Journal" },
  { href: "/dealers", label: "Dealers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lines = useCartStore((s) => s.lines);
  const setCartOpen = useCartStore((s) => s.setOpen);
  const count = lines.reduce((n, l) => n + l.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        <Link href="/" className="font-display text-3xl tracking-wide text-light">
          VELOX<span className="text-accent">A</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest text-light/80 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/account"
            className="hidden sm:inline-flex text-light/80 hover:text-accent transition-colors"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-light/80 hover:text-accent transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-dark text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-light"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-light/80 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
