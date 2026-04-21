import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

/**
 * API Route: Stripe Webhook Handler
 * 
 * This serverless function handles webhook events from Stripe.
 * Webhooks are used to receive real-time updates about payment events (success, failure, etc.).
 * 
 * IMPORTANT: In production, you must verify the webhook signature using STRIPE_WEBHOOK_SECRET
 * to ensure the request is actually from Stripe and not a malicious source.
 * 
 * To test webhooks locally:
 * 1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
 * 2. Run: stripe listen --forward-to localhost:3000/api/webhook
 * 3. Use the webhook signing secret provided by the CLI
 */
export async function POST(request: NextRequest) {
  const stripeSecret = process.env.STRIPE_SECRET;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecret) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: "2023-10-16",
  });

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    if (!webhookSecret || !signature) {
      // In development, you might skip verification, but log a warning
      console.warn("Webhook secret or signature missing. Skipping verification.");
      // For production, you should return an error here
      // return NextResponse.json({ error: "Missing webhook secret" }, { status: 400 });
      
      // Parse event without verification (development only)
      event = JSON.parse(body) as Stripe.Event;
    } else {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    }
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Payment successful for session:", session.id);
      // Here you would typically:
      // - Update your database to mark the user as enrolled
      // - Send a confirmation email
      // - Grant access to course materials
      break;

    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent succeeded:", paymentIntent.id);
      break;

    case "payment_intent.payment_failed":
      const failedPayment = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent failed:", failedPayment.id);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

