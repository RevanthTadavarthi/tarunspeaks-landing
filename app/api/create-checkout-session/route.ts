import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

/**
 * API Route: Create Stripe Checkout Session
 * 
 * This serverless function creates a Stripe checkout session when a user clicks "Pay Now".
 * It reads the Stripe secret key from environment variables and creates a payment session.
 * 
 * If the Stripe secret is not configured, it returns a helpful error message.
 */
export async function POST(request: NextRequest) {
  try {
    const stripeSecret = process.env.STRIPE_SECRET;

    // Check if Stripe is configured
    if (!stripeSecret) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured. Please add STRIPE_SECRET to your environment variables.",
        },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecret, {
      apiVersion: "2023-10-16",
    });

    const body = await request.json();
    const amount = body.amount || parseInt(process.env.NEXT_PUBLIC_PRICE || "97000");
    const currency = body.currency || process.env.NEXT_PUBLIC_CURRENCY?.toLowerCase() || "inr";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: "Roadmap to Digital Marketing 2.0 (RMDM)",
              description: "100 Hours of Live, Mentor-Led Digital Marketing Training",
            },
            unit_amount: amount * 100, // Convert to cents/paisa
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin") || "http://localhost:3000"}/success`,
      cancel_url: `${request.headers.get("origin") || "http://localhost:3000"}/pricing`,
      metadata: {
        course: "RMDM",
        cohort: process.env.NEXT_PUBLIC_COHORT_START || "2026-01-10",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

