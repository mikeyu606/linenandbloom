import { NextResponse } from "next/server";
import { CHECKOUT_PLANS, getPlanPriceId, isPlanId } from "../../../lib/plans";
import { getStripe } from "../../../lib/stripe";

function getBaseUrl(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) return origin;

  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  if (host) return `${proto}://${host}`;

  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { planId?: unknown };
    if (!isPlanId(body.planId)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const plan = CHECKOUT_PLANS[body.planId];
    const stripe = getStripe();
    const baseUrl = getBaseUrl(request);
    const priceId = getPlanPriceId(plan);

    const lineItem = priceId
      ? { quantity: 1, price: priceId }
      : plan.mode === "subscription"
        ? {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: plan.amountCents,
              recurring: {
                interval: "week" as const,
                interval_count: 2,
              },
              product_data: {
                name: plan.name,
                description: plan.description,
              },
            },
          }
        : {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: plan.amountCents,
              product_data: {
                name: plan.name,
                description: plan.description,
              },
            },
          };

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: plan.mode,
      line_items: [lineItem],
      return_url: `${baseUrl}/booking/success?plan=${plan.id}&session_id={CHECKOUT_SESSION_ID}`,
      phone_number_collection: { enabled: true },
      billing_address_collection: "required",
      allow_promotion_codes: true,
      metadata: {
        planId: plan.id,
        planName: plan.name,
      },
      ...(plan.mode === "subscription"
        ? {
            subscription_data: {
              metadata: {
                planId: plan.id,
                planName: plan.name,
              },
            },
          }
        : {}),
    });

    if (!session.client_secret) {
      return NextResponse.json({ error: "Unable to start checkout" }, { status: 500 });
    }

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    const message =
      error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
