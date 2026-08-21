import ContactCtas from "./ContactCtas";

const STEPS = [
  {
    number: "01",
    title: "Book Your Intro Clean",
    description:
      "Share your home details and preferred schedule — it takes just a few minutes to get on our West LA route.",
  },
  {
    number: "02",
    title: "Meet Your Dedicated Cleaner",
    description:
      "We pair you with the same cleaner every visit. They learn your home, your preferences, and the Linen & Bloom standard.",
  },
  {
    number: "03",
    title: "Come Home to an Immaculate Reset",
    description:
      "Biweekly boutique care, flat pricing, no surprises. Your home reset on schedule — so you never have to think about it again.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-maroon lowercase mb-3">
          how it works
        </h2>
        <p className="text-center text-maroon/70 text-sm sm:text-base mb-10 sm:mb-14 max-w-lg mx-auto">
          Three steps. No hourly quotes, no rotating crews, no guesswork.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-white border border-maroon/10 p-6 sm:p-8 shadow-sm"
            >
              <span className="text-4xl sm:text-5xl font-black text-pink-dark leading-none mb-4 block">
                {step.number}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-maroon mb-3 min-h-[3.25rem] sm:min-h-[3.5rem] leading-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-maroon/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 max-w-sm mx-auto">
          <ContactCtas
            primaryLabel="CLAIM $150 INTRO CLEAN"
            align="center"
          />
        </div>
      </div>
    </section>
  );
}
