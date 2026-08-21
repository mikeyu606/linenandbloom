export type PlanId = "intro" | "biweekly";

export type CheckoutPlan = {
  id: PlanId;
  name: string;
  description: string;
  amountCents: number;
  /** One-time payment vs subscription (must match Stripe Price when set) */
  mode: "payment" | "subscription";
  /** Optional Stripe Dashboard Price ID. When set, Checkout uses this Price. */
  envPriceKey?: "STRIPE_PRICE_INTRO" | "STRIPE_PRICE_BIWEEKLY";
};

export const CHECKOUT_PLANS: Record<PlanId, CheckoutPlan> = {
  intro: {
    id: "intro",
    name: "Intro Clean",
    description: "First boutique home reset · West LA",
    amountCents: 15000,
    mode: "payment",
    envPriceKey: "STRIPE_PRICE_INTRO",
  },
  biweekly: {
    id: "biweekly",
    name: "Biweekly Route",
    description: "Flat-rate biweekly home care · West LA",
    amountCents: 20000,
    mode: "subscription",
    envPriceKey: "STRIPE_PRICE_BIWEEKLY",
  },
};

export function isPlanId(value: unknown): value is PlanId {
  return value === "intro" || value === "biweekly";
}

export function getPlanPriceId(plan: CheckoutPlan): string | undefined {
  if (!plan.envPriceKey) return undefined;
  const value = process.env[plan.envPriceKey]?.trim();
  return value || undefined;
}
