const PLANS = [
  {
    id: "founding",
    badge: "Limited · First 20 Homes",
    name: "Founding Spot",
    price: "$150",
    priceNote: "first clean",
    compareAt: "Reg. $250",
    description:
      "Your intro reset at our founding rate — then join the biweekly route at the flat rate below.",
    features: [
      "Full boutique home reset",
      "Dedicated cleaner assigned",
      "Thoughtful, home-safe products",
      "Brentwood · Westwood · Santa Monica",
    ],
    cta: "Claim $150 Founding Spot",
    featured: true,
  },
  {
    id: "biweekly",
    badge: "Ongoing Care",
    name: "Biweekly Route",
    price: "$250",
    priceNote: "per visit",
    compareAt: null,
    description:
      "Flat pricing every other week. No hourly quotes, no surprise add-ons — just a consistent standard.",
    features: [
      "Same cleaner every visit",
      "Kitchen, baths, living & suite standard",
      "Clear flat rate — no overages",
      "Insured, bonded & founder-led",
    ],
    cta: "Join the Biweekly Route",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-pink/30 py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-maroon lowercase mb-3">
          simple, flat pricing.
        </h2>
        <p className="text-center text-maroon/70 text-sm sm:text-base mb-10 sm:mb-14 max-w-lg mx-auto">
          No hourly surprises. One clear rate for a boutique West LA route — intentionally limited.
        </p>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                plan.featured
                  ? "bg-maroon text-cream shadow-xl"
                  : "bg-cream text-maroon border border-maroon/15 shadow-sm"
              }`}
            >
              <p
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-4 ${
                  plan.featured ? "text-cream/70" : "text-maroon/55"
                }`}
              >
                {plan.badge}
              </p>

              <h3 className="text-xl sm:text-2xl font-black mb-4">{plan.name}</h3>

              <div className="mb-2 flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl sm:text-5xl font-black leading-none">{plan.price}</span>
                <span
                  className={`text-sm font-medium ${
                    plan.featured ? "text-cream/75" : "text-maroon/60"
                  }`}
                >
                  {plan.priceNote}
                </span>
              </div>

              {plan.compareAt ? (
                <p
                  className={`text-sm mb-5 ${
                    plan.featured ? "text-cream/65 line-through" : "text-maroon/50 line-through"
                  }`}
                >
                  {plan.compareAt}
                </p>
              ) : (
                <p className="text-sm mb-5 invisible" aria-hidden>
                  placeholder
                </p>
              )}

              <p
                className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  plan.featured ? "text-cream/85" : "text-maroon/70"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm sm:text-base">
                    <span className={plan.featured ? "text-gold" : "text-maroon"} aria-hidden>
                      ✓
                    </span>
                    <span className={plan.featured ? "text-cream/90" : "text-maroon/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full rounded-full py-3.5 px-6 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  plan.featured
                    ? "bg-cream text-maroon hover:bg-white"
                    : "bg-maroon text-cream hover:bg-maroon-light"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-maroon/55 mt-8 max-w-md mx-auto leading-relaxed">
          Founding rate applies to your first clean only. After that, biweekly visits are a flat $250.
        </p>
      </div>
    </section>
  );
}
