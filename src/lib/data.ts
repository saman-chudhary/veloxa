export type ListingType = "SALE" | "RENTAL" | "BOTH";

export interface Product {
  slug: string;
  name: string;
  description: string;
  type: ListingType;
  salePriceCents?: number;
  rentalPriceCents?: number; // per day
  weightKg?: number;
  material?: string;
  frameSize?: string;
  color?: string;
  image: string;
  category: string;
  brand: string;
  featured?: boolean;
}

export const categories = [
  "City Bike & Urban",
  "Cross & Fitness Bike",
  "E-Bike",
  "Hybrid Bike",
  "Kids Bike",
  "Mountain Bike",
  "Road Bike",
  "Trekking Bike",
];

export const brands = [
  "Cruzee",
  "Cube",
  "Fuji",
  "Giant",
  "Lapierre",
  "Mondrake",
  "Radon",
];

export const products: Product[] = [
  {
    slug: "mondraker-chaser-rx",
    name: "Mondraker Chaser RX",
    description:
      "Climbs like it's cheating, descends like it means it. A quiet mid-drive motor and all-day range mean the only thing slowing you down is your own legs.",
    type: "BOTH",
    salePriceCents: 350000,
    rentalPriceCents: 12000,
    weightKg: 26.7,
    material: "Steel",
    frameSize: "51 cm",
    color: "Violet",
    image:
      "https://picsum.photos/seed/veloxa-1/1200/800",
    category: "E-Bike",
    brand: "Mondrake",
    featured: true,
  },
  {
    slug: "lapierre-e-zesty-am",
    name: "Lapierre e-Zesty AM",
    description:
      "Featherweight aluminium and aggressive trail geometry, tuned for riders who measure a good ride in vertical feet, not miles.",
    type: "SALE",
    salePriceCents: 150000,
    weightKg: 21.94,
    material: "Aluminium",
    frameSize: "46 cm",
    color: "Black",
    image:
      "https://picsum.photos/seed/veloxa-2/1200/800",
    category: "Trekking Bike",
    brand: "Lapierre",
    featured: true,
  },
  {
    slug: "conway-cairon-s-6",
    name: "Conway Cairon S 6.0",
    description:
      "A dependable trekking companion with a smooth motor curve and rack-ready frame for long-haul days.",
    type: "RENTAL",
    rentalPriceCents: 10500,
    weightKg: 25.6,
    material: "Aluminium",
    frameSize: "47 cm",
    color: "White",
    image:
      "https://picsum.photos/seed/veloxa-3/1200/800",
    category: "Trekking Bike",
    brand: "Cruzee",
    featured: true,
  },
  {
    slug: "santa-cruz-bronson",
    name: "Santa Cruz Bronson 4.1",
    description:
      "Planted on the way down, playful everywhere else. Built to take a beating and ask for another lap.",
    type: "SALE",
    salePriceCents: 112000,
    weightKg: 14.76,
    material: "Aluminium",
    frameSize: "46 cm",
    color: "Green",
    image:
      "https://picsum.photos/seed/veloxa-4/1200/800",
    category: "Road Bike",
    brand: "Lapierre",
    featured: true,
  },
  {
    slug: "cube-stereo-hybrid-120",
    name: "Cube Stereo Hybrid 120",
    description:
      "120mm of trail-smoothing travel paired with a punchy mid-drive motor. Built for singletrack days.",
    type: "SALE",
    salePriceCents: 99000,
    weightKg: 25.8,
    material: "Aluminium",
    frameSize: "48 cm",
    color: "Gray",
    image:
      "https://picsum.photos/seed/veloxa-5/1200/800",
    category: "E-Bike",
    brand: "Cube",
    featured: true,
  },
  {
    slug: "santa-cruz-heckler",
    name: "Santa Cruz Heckler",
    description:
      "A carbon-framed enduro e-bike with the balance to climb all day and the composure to descend hard.",
    type: "RENTAL",
    rentalPriceCents: 6000,
    weightKg: 21.94,
    material: "Carbon",
    frameSize: "52 cm",
    color: "Orange",
    image:
      "https://picsum.photos/seed/veloxa-6/1200/800",
    category: "Mountain Bike",
    brand: "Cube",
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents?: number) {
  if (cents == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reading-your-first-gravel-race",
    title: "Reading Your First Gravel Race",
    excerpt:
      "Pacing, nutrition, and tire pressure decisions that matter more than watts on race day.",
    date: "2026-05-14",
    author: "Nora Fenn",
    category: "Road Bikes",
    image:
      "https://picsum.photos/seed/veloxa-7/1200/800",
  },
  {
    slug: "e-bike-range-what-actually-drains-the-battery",
    title: "E-Bike Range: What Actually Drains the Battery",
    excerpt:
      "Terrain, temperature, and assist mode explained so you stop guessing at range anxiety.",
    date: "2026-04-02",
    author: "Marcus Ide",
    category: "E-Bike",
    image:
      "https://picsum.photos/seed/veloxa-8/1200/800",
  },
  {
    slug: "trail-bike-maintenance-checklist",
    title: "The 10-Minute Trail Bike Maintenance Checklist",
    excerpt:
      "The pre-ride routine our mechanics actually use before handing a bike back to a customer.",
    date: "2026-03-18",
    author: "Nora Fenn",
    category: "Mountain Bike",
    image:
      "https://picsum.photos/seed/veloxa-3/1200/800",
  },
];

export interface Dealer {
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
}

export const dealers: Dealer[] = [
  {
    slug: "veloxa-downtown",
    name: "Veloxa Downtown",
    city: "San Francisco, CA",
    address: "1095 Howard Street, San Francisco, USA",
    phone: "+1 (415) 555-0192",
    hours: "Mon–Sat 08:00–20:00",
  },
  {
    slug: "veloxa-eastside",
    name: "Veloxa Eastside",
    city: "Camden, NJ",
    address: "3497 Watson Street, Camden, NJ 08102",
    phone: "+1 (856) 555-0148",
    hours: "Mon–Fri 09:00–18:00",
  },
];
