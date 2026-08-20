"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Do you send the same cleaner every visit?",
    answer:
      "Yes. Every home on our route is assigned a dedicated cleaner who learns your preferences, layout, and standards — no random rotating crews.",
  },
  {
    question: "What neighborhoods do you serve?",
    answer:
      "We currently serve Brentwood, Westwood, and Santa Monica on our West LA biweekly route. We're keeping the route intentionally small to protect quality.",
  },
  {
    question: "What's included in the $150 founding clean?",
    answer:
      "Your founding clean is a full boutique reset of your home using the Linen & Bloom standard — kitchen, bathrooms, living areas, and the details that matter most to you.",
  },
  {
    question: "Are your products safe for marble and pets?",
    answer:
      "We use thoughtful, home-safe formulas selected for stone surfaces, finishes, and homes with pets. No harsh industrial bleach or residue-heavy chemicals.",
  },
  {
    question: "How does biweekly pricing work?",
    answer:
      "After your founding clean, biweekly home care is a flat $250 per visit — no hourly surprises, no hidden overages. Simple, predictable, and transparent.",
  },
  {
    question: "Are you insured and bonded?",
    answer:
      "Yes. Linen & Bloom is fully insured and bonded. Every visit is founder-led with clear standards and accountability built in from day one.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl sm:rounded-3xl bg-maroon-light overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left cursor-pointer"
      >
        <span className="text-sm sm:text-base font-bold text-cream leading-snug pr-2">{question}</span>
        <span className="shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-cream text-maroon text-xl font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen ? (
        <div className="px-5 sm:px-7 pb-5 sm:pb-6 -mt-1">
          <p className="text-sm sm:text-base text-cream/90 leading-relaxed">{answer}</p>
        </div>
      ) : null}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-maroon py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black lowercase text-cream mb-8 sm:mb-10">
          faq
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
