import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

interface IncomingLine {
  slug: string;
  name: string;
  image: string;
  priceCents: number;
  quantity: number;
  mode: "SALE" | "RENTAL";
  rentalStart?: string;
  rentalEnd?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { lines, email } = (await req.json()) as {
      lines: IncomingLine[];
      email: string;
    };

    if (!lines?.length || !email) {
      return NextResponse.json({ error: "Missing cart or email" }, { status: 400 });
    }

    const totalCents = lines.reduce((sum, l) => sum + l.priceCents * l.quantity, 0);

    // Create a pending order in the DB so the webhook has something to mark PAID.
    const order = await prisma.order.create({
      data: {
        customerEmail: email,
        totalCents,
        status: "PENDING",
      },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: lines.map((l) => ({
        quantity: l.quantity,
        price_data: {
          currency: "usd",
          unit_amount: l.priceCents,
          product_data: {
            name: `${l.name}${l.mode === "RENTAL" ? ` (Rental ${l.rentalStart} - ${l.rentalEnd})` : ""}`,
            images: [l.image],
          },
        },
      })),
      metadata: { orderId: order.id },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?order=${order.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
