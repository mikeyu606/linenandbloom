import Link from "next/link";
import { CHECKOUT_PLANS, isPlanId } from "../../lib/plans";
import EmbeddedCheckoutForm from "../components/EmbeddedCheckoutForm";

type SearchParams = Promise<{ plan?: string }>;

export default async function BookingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const planId = isPlanId(params.plan) ? params.plan : null;

  if (!planId) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-black text-maroon mb-4">Choose a plan</h1>
          <p className="text-maroon/70 mb-8">
            Pick Intro Clean or Biweekly Route to continue to secure checkout.
          </p>
          <div className="flex flex-col gap-3">
            {(Object.keys(CHECKOUT_PLANS) as Array<keyof typeof CHECKOUT_PLANS>).map((id) => (
              <Link
                key={id}
                href={`/booking?plan=${id}`}
                className="rounded-full bg-maroon text-cream font-bold uppercase tracking-wider text-sm py-3.5 px-6 hover:bg-maroon-light transition-colors"
              >
                {CHECKOUT_PLANS[id].name}
              </Link>
            ))}
            <Link href="/#pricing" className="text-sm text-maroon/70 underline underline-offset-2">
              Back to pricing
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      <div className="border-b border-maroon/10 bg-cream px-4 py-4">
        <div className="mx-auto max-w-2xl flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-maroon tracking-tight">
            Linen &amp; Bloom
          </Link>
          <Link
            href="/#pricing"
            className="text-xs font-bold uppercase tracking-wider text-maroon/60 hover:text-maroon"
          >
            Back
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <EmbeddedCheckoutForm planId={planId} />
      </div>
    </main>
  );
}
