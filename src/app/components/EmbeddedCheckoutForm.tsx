"use client";

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";
import { CHECKOUT_PLANS, type PlanId } from "../../lib/plans";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",
);

type Props = {
  planId: PlanId;
  compact?: boolean;
  onClose?: () => void;
};

export default function EmbeddedCheckoutForm({ planId, compact = false, onClose }: Props) {
  const plan = CHECKOUT_PLANS[planId];

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });
    const data = (await res.json()) as { clientSecret?: string; error?: string };
    if (!res.ok || !data.clientSecret) {
      throw new Error(data.error || "Unable to start checkout");
    }
    return data.clientSecret;
  }, [planId]);

  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return (
      <p className="text-center text-sm text-maroon/70">
        Stripe is not configured. Add{" "}
        <code className="text-xs">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to your env.
      </p>
    );
  }

  return (
    <div className="w-full">
      {!compact ? (
        <div className="mb-6 text-center">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-maroon/55 mb-2">
            Secure checkout
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-maroon mb-2">{plan.name}</h1>
          <p className="text-sm text-maroon/70">{plan.description}</p>
          <p className="mt-3 text-maroon font-black text-xl">
            ${(plan.amountCents / 100).toFixed(0)}
            {plan.mode === "subscription" ? (
              <span className="text-sm font-medium text-maroon/60"> / visit</span>
            ) : (
              <span className="text-sm font-medium text-maroon/60"> first clean</span>
            )}
          </p>
        </div>
      ) : (
        <p className="mb-4 text-center text-sm text-maroon/70">
          {plan.description} ·{" "}
          <span className="font-bold text-maroon">
            ${(plan.amountCents / 100).toFixed(0)}
            {plan.mode === "subscription" ? " / visit" : " first clean"}
          </span>
        </p>
      )}

      <div className="rounded-2xl border border-maroon/10 bg-white p-2 sm:p-3 shadow-sm overflow-hidden">
        <EmbeddedCheckoutProvider
          key={planId}
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>

      {onClose ? (
        <p className="mt-5 text-center text-xs text-maroon/55">
          <button
            type="button"
            onClick={onClose}
            className="underline underline-offset-2 hover:text-maroon cursor-pointer"
          >
            Cancel and stay on this page
          </button>
        </p>
      ) : null}
    </div>
  );
}
