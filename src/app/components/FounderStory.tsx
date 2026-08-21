import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-cream border-t border-maroon/10 py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-maroon mb-8 sm:mb-10">
          A better standard, built locally.
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12">
          <div className="flex-1 space-y-5 text-maroon/80 text-base sm:text-lg leading-[1.75] sm:leading-relaxed">
            <p>
              We&apos;re UCLA students who started Linen & Bloom because we wanted residential
              cleaning to feel a little different: more thoughtful, more consistent, and more
              personal.
            </p>
            <p>
              We believe your home should be cared for with the same attention we&apos;d give our
              own.
            </p>
            <p>
              That&apos;s why we keep our service intentionally boutique, use a consistent cleaning
              standard, and focus on building long-term relationships with the homeowners we serve.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start shrink-0 w-full md:w-auto pt-2 md:pt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-md border border-maroon/10 mb-4">
              <Image
                src="/pic3.png"
                alt="Linen & Bloom founders"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
            <p className="text-maroon font-bold text-sm sm:text-base text-center md:text-left">
              — Sophie & Mia
            </p>
            <p className="text-maroon/60 text-xs sm:text-sm uppercase tracking-wide mt-1 text-center md:text-left">
              Founders, Linen & Bloom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
