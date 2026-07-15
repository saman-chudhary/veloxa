import { LucideIcon, MapPin, ShieldCheck, Truck, Wrench, Clock, Star } from "lucide-react";

export interface TimeSlot {
  label: string;
}

export interface RentalCategory {
  slug: string;
  name: string;
  tagline: string;
  pricePerDay: number; // cents
  heroImage: string;
  description: string;
  bullets: string[];
  featureCards: { icon: LucideIcon; title: string; text: string }[];
  includedTitle: string;
  includedBody: string;
  includedImage: string;
  locationTitle: string;
  locationBody: string;
  locationBullets: string[];
  locationImage: string;
  reserveSteps: { title: string; text: string }[];
  pricingTiers: { label: string; note: string }[];
  timeSlots: TimeSlot[];
}

export const rentalCategories: RentalCategory[] = [
  {
    slug: "mountain-bike",
    name: "Mountain Bike",
    tagline: "Singletrack, switchbacks, and everything in between.",
    pricePerDay: 6500,
    heroImage:
      "https://picsum.photos/seed/veloxa-9/1200/800",
    description:
      "Full-suspension trail bikes, tuned and torque-checked before every rental. We deliver to the trailhead so you can skip the logistics and start riding.",
    bullets: [
      "Front & rear suspension, sized to you",
      "Helmet, gloves, and repair kit included",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "Trailhead Delivery", text: "We meet you at the trailhead — no roof rack required." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Star, title: "5-Star Service", text: "Local riders, real advice, no upsell pressure." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Every rental comes with a properly fitted helmet, gloves, a trailside repair kit, and a quick-release rack if you need to transport it further. We also offer flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-5/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Our fleet is based at our downtown shop with same-day delivery across the city. Reserve online, get a confirmation with your delivery window, and we'll have the bike waiting — tuned and ready — wherever you're starting your ride.",
    locationBullets: [
      "Same-day delivery available",
      "Pickup or drop-off, your choice",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-3/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Pick your date, time, and quantity — reserve in under a minute." },
      { title: "We Deliver or You Pick Up", text: "Choose delivery to your trailhead or pickup at our shop." },
      { title: "Ride", text: "Hit the trail. Return the bike at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$65.00 / day" },
      { label: "3+ Days", note: "$55.00 / day — save $10/day" },
      { label: "7+ Days", note: "$45.00 / day — save $20/day" },
    ],
    timeSlots: [{ label: "8:00 AM – 12:00 PM" }, { label: "12:00 PM – 4:00 PM" }, { label: "4:00 PM – 8:00 PM" }],
  },
  {
    slug: "road-bike",
    name: "Road Bike",
    tagline: "Light frames, fast tires, longer days in the saddle.",
    pricePerDay: 5500,
    heroImage:
      "https://picsum.photos/seed/veloxa-10/1200/800",
    description:
      "Carbon and aluminium road frames fitted to your geometry, with clipless or flat pedal options. Ideal for gran fondos, training blocks, or a weekend exploring further afield.",
    bullets: [
      "Sized to your height & riding style",
      "Choice of clipless or flat pedals",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "Route Advice", text: "Ask our team for the best local road loops before you head out." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Clock, title: "Flexible Hours", text: "Early starts and late returns available on request." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Each rental includes a helmet, a spare tube and repair kit, and a saddle bag. We also offer flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-7/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Reserve online and we'll have your bike fitted and ready at our downtown shop, or delivered to your hotel or home. Multi-day rentals are popular with visiting cyclists in town for an event.",
    locationBullets: [
      "Bike fit included with every rental",
      "Hotel delivery available",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-1/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Pick your date, time, and quantity — reserve in under a minute." },
      { title: "Get Fitted", text: "Swing by the shop or tell us your measurements for delivery." },
      { title: "Ride", text: "Log the miles. Return the bike at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$55.00 / day" },
      { label: "3+ Days", note: "$45.00 / day — save $10/day" },
      { label: "7+ Days", note: "$38.00 / day — save $17/day" },
    ],
    timeSlots: [{ label: "6:00 AM – 10:00 AM" }, { label: "10:00 AM – 2:00 PM" }, { label: "2:00 PM – 6:00 PM" }],
  },
  {
    slug: "e-bike",
    name: "E-Bike",
    tagline: "All the ride, none of the range anxiety.",
    pricePerDay: 8500,
    heroImage:
      "https://picsum.photos/seed/veloxa-11/1200/800",
    description:
      "Mid-drive electric bikes with a full-day battery, ready for commuting, sightseeing, or trail riding with a little assist. Charger included with every rental.",
    bullets: [
      "40+ mile range on a single charge",
      "Charger and spare battery available",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "City & Trail", text: "Great for commuting, sightseeing, or assisted trail riding." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Wrench, title: "Full-Charge Guarantee", text: "Every e-bike leaves our shop at 100% battery." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Every e-bike rental includes a helmet, charger, phone mount, and a quick tutorial on the motor's assist modes before you head off. Flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-5/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Reserve online and pick up a fully charged e-bike at our downtown shop, or have it delivered directly to you. Popular for weekend visitors who want to cover more ground without the effort.",
    locationBullets: [
      "100% charge guaranteed at pickup",
      "Spare battery available for full-day rentals",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-3/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Pick your date, time, and quantity — reserve in under a minute." },
      { title: "Quick Orientation", text: "A two-minute walkthrough of the motor and assist modes." },
      { title: "Ride", text: "Go further, faster. Return the bike at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$85.00 / day" },
      { label: "3+ Days", note: "$72.00 / day — save $13/day" },
      { label: "7+ Days", note: "$60.00 / day — save $25/day" },
    ],
    timeSlots: [{ label: "8:00 AM – 12:00 PM" }, { label: "12:00 PM – 4:00 PM" }, { label: "4:00 PM – 8:00 PM" }],
  },
  {
    slug: "trekking-bike",
    name: "Trekking Bike",
    tagline: "Built for long days, loaded panniers, and rough edges.",
    pricePerDay: 5000,
    heroImage:
      "https://picsum.photos/seed/veloxa-12/1200/800",
    description:
      "Sturdy, rack-ready frames built for multi-day touring and daily commuting alike. Comfortable geometry that holds up whether you're loaded with panniers or riding light.",
    bullets: [
      "Rack and pannier-ready",
      "Comfortable, upright geometry",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "Tour Ready", text: "Rack-mounted and built to carry a loaded pannier setup." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Clock, title: "Flexible Hours", text: "Early starts and late returns available on request." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Every rental includes a rear rack, a spare tube and repair kit, and a helmet. Ask about adding panniers for multi-day touring. Flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-1/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Reserve online and we'll have your bike fitted and loaded at our downtown shop. Popular for multi-day tours — ask about one-way rentals if you're riding point to point.",
    locationBullets: [
      "One-way rentals available on request",
      "Pannier add-on for touring",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-2/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Pick your date, time, and quantity — reserve in under a minute." },
      { title: "Load Up", text: "Add panniers or a rack bag if you're touring multi-day." },
      { title: "Ride", text: "Cover the miles. Return the bike at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$50.00 / day" },
      { label: "3+ Days", note: "$42.00 / day — save $8/day" },
      { label: "7+ Days", note: "$35.00 / day — save $15/day" },
    ],
    timeSlots: [{ label: "7:00 AM – 11:00 AM" }, { label: "11:00 AM – 3:00 PM" }, { label: "3:00 PM – 7:00 PM" }],
  },
  {
    slug: "city-bike",
    name: "City & Urban Bike",
    tagline: "Errands, commutes, and easy weekend loops.",
    pricePerDay: 3500,
    heroImage:
      "https://picsum.photos/seed/veloxa-13/1200/800",
    description:
      "Step-through frames, upright bars, and a low-maintenance drivetrain — built for getting around town without a second thought.",
    bullets: [
      "Step-through frame, easy on/off",
      "Basket and lock included",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "Made For The City", text: "Low-maintenance, comfortable, and easy to hop on and off." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Star, title: "5-Star Service", text: "Local riders, real advice, no upsell pressure." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Every rental includes a front basket, a cable lock, and lights for evening rides. Flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-4/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Reserve online and pick up at our downtown shop, or have it delivered to your door. Popular for weekend visitors and anyone without a bike for a few days.",
    locationBullets: [
      "Same-day delivery available",
      "Lock and basket included",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-5/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Pick your date, time, and quantity — reserve in under a minute." },
      { title: "We Deliver or You Pick Up", text: "Choose delivery to your door or pickup at our shop." },
      { title: "Ride", text: "Run your errands or explore. Return at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$35.00 / day" },
      { label: "3+ Days", note: "$28.00 / day — save $7/day" },
      { label: "7+ Days", note: "$22.00 / day — save $13/day" },
    ],
    timeSlots: [{ label: "8:00 AM – 12:00 PM" }, { label: "12:00 PM – 4:00 PM" }, { label: "4:00 PM – 8:00 PM" }],
  },
  {
    slug: "kids-bike",
    name: "Kids Bike",
    tagline: "Right-sized bikes so the whole family rides together.",
    pricePerDay: 2500,
    heroImage:
      "https://picsum.photos/seed/veloxa-14/1200/800",
    description:
      "Lightweight frames sized for every age, from balance bikes to first geared bikes. Helmets included in every kid size.",
    bullets: [
      "Sized for ages 3–12",
      "Kid-sized helmet included",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "Sized Right", text: "We'll help you pick the right frame size for your child's height." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Star, title: "5-Star Service", text: "Patient, kid-friendly staff who make sizing easy." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Every kids' rental includes a properly fitted helmet and training wheels on request. Flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-3/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Reserve online and we'll have the right size ready at pickup or delivered to you — including training wheels if needed. Great for family trips without checking a bike as luggage.",
    locationBullets: [
      "Training wheels available",
      "Sizing help at drop-off",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-1/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Tell us your child's height and age — we'll size the bike for you." },
      { title: "We Deliver or You Pick Up", text: "Choose delivery to your door or pickup at our shop." },
      { title: "Ride", text: "Family ride time. Return the bike at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$25.00 / day" },
      { label: "3+ Days", note: "$20.00 / day — save $5/day" },
      { label: "7+ Days", note: "$16.00 / day — save $9/day" },
    ],
    timeSlots: [{ label: "9:00 AM – 12:00 PM" }, { label: "12:00 PM – 3:00 PM" }, { label: "3:00 PM – 6:00 PM" }],
  },
  {
    slug: "cross-fitness-bike",
    name: "Cross & Fitness Bike",
    tagline: "Fast on pavement, confident on gravel.",
    pricePerDay: 4800,
    heroImage:
      "https://picsum.photos/seed/veloxa-14/1200/800",
    description:
      "Flat-bar hybrids built for fitness rides and mixed-surface commutes — quicker than a trekking bike, more forgiving than a road bike.",
    bullets: [
      "Flat bar, quick handling",
      "Puncture-resistant tires",
      "Free delivery within city limits",
    ],
    featureCards: [
      { icon: MapPin, title: "Mixed Terrain", text: "Comfortable on pavement, capable on light gravel." },
      { icon: ShieldCheck, title: "Fully Inspected", text: "Every bike is torque-checked and safety-inspected before pickup." },
      { icon: Truck, title: "Free Delivery", text: "Complimentary delivery and pickup within city limits." },
      { icon: Clock, title: "Flexible Hours", text: "Early starts and late returns available on request." },
    ],
    includedTitle: "Everything You Need (And More)",
    includedBody:
      "Every rental includes a helmet, a spare tube and repair kit, and a water bottle cage. Flexible rescheduling and full refunds on cancellations made 24 hours ahead.",
    includedImage:
      "https://picsum.photos/seed/veloxa-7/1200/800",
    locationTitle: "We Do The Heavy Lifting, You Do The Riding",
    locationBody:
      "Reserve online and pick up at our downtown shop, or have it delivered to you. A popular pick for training rides and weekend fitness goals.",
    locationBullets: [
      "Same-day delivery available",
      "Puncture-resistant tires standard",
      "Multi-day discounts on 3+ day rentals",
    ],
    locationImage:
      "https://picsum.photos/seed/veloxa-4/1200/800",
    reserveSteps: [
      { title: "Book Online", text: "Pick your date, time, and quantity — reserve in under a minute." },
      { title: "We Deliver or You Pick Up", text: "Choose delivery to your door or pickup at our shop." },
      { title: "Ride", text: "Log your training miles. Return at the end of your rental window." },
    ],
    pricingTiers: [
      { label: "1 Day Rental", note: "$48.00 / day" },
      { label: "3+ Days", note: "$40.00 / day — save $8/day" },
      { label: "7+ Days", note: "$32.00 / day — save $16/day" },
    ],
    timeSlots: [{ label: "6:00 AM – 10:00 AM" }, { label: "10:00 AM – 2:00 PM" }, { label: "2:00 PM – 6:00 PM" }],
  },
];

export function getRentalCategory(slug: string) {
  return rentalCategories.find((c) => c.slug === slug);
}
