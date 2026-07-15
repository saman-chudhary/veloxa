import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { eachDayOfInterval } from "date-fns";

export async function POST(req: NextRequest) {
  try {
    const { productId, customerName, customerEmail, startDate, endDate, totalCents } =
      await req.json();

    if (!productId || !customerEmail || !startDate || !endDate) {
      return NextResponse.json({ error: "Missing booking fields" }, { status: 400 });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Reject overlapping bookings.
    const overlap = await prisma.blockedDate.findFirst({
      where: {
        productId,
        date: { gte: start, lte: end },
      },
    });
    if (overlap) {
      return NextResponse.json(
        { error: "Some of the selected dates are no longer available" },
        { status: 409 }
      );
    }

    const booking = await prisma.rentalBooking.create({
      data: {
        productId,
        customerName,
        customerEmail,
        startDate: start,
        endDate: end,
        totalCents,
        status: "PENDING",
      },
    });

    const days = eachDayOfInterval({ start, end });
    await prisma.blockedDate.createMany({
      data: days.map((d) => ({ productId, date: d, reason: "booked" })),
      skipDuplicates: true,
    });

    return NextResponse.json({ booking });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Booking failed" }, { status: 500 });
  }
}
