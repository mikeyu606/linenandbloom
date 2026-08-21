import Image from "next/image";
import BeforeAfterDoor from "./components/BeforeAfterDoor";
import ContactCtas from "./components/ContactCtas";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FounderStory from "./components/FounderStory";
import HowItWorks from "./components/HowItWorks";
import MobileNav from "./components/MobileNav";
import PricingSection from "./components/PricingSection";
import { smsHref } from "../lib/contact";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col min-h-svh">
      <div className="bg-maroon text-cream text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide leading-snug shrink-0">
        FIRST CLEAN $150 (REG. $200) •{" "}
        <a href={smsHref()} className="underline">
          TEXT US TO CLAIM
        </a>
      </div>

      <div className="shrink-0">
        <MobileNav />
      </div>

      <section className="flex flex-col md:grid md:grid-cols-[1.15fr_0.85fr] bg-pink md:bg-cream w-full flex-1 md:min-h-0">
        <div className="w-full bg-cream px-6 md:px-16 lg:px-24 py-10 md:pt-16 md:pb-10 lg:pt-20 text-center md:text-left flex flex-col items-center md:items-start md:justify-center shrink-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs sm:text-sm ml-1 sm:ml-2 font-medium uppercase tracking-wide">
              UCLA Student-Founded • West LA
            </span>
          </div>

          <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-5xl lg:text-6xl font-black sm:leading-[1.05] tracking-tight mb-3 sm:mb-4 max-w-3xl">
            Your home,
            <br />
            <span className="sm:whitespace-nowrap">beautifully cared for.</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-maroon/80 mb-6 sm:mb-8 md:mb-10 leading-snug max-w-xl">
            Boutique recurring home cleaning for West LA, founded by UCLA students.
          </p>

          <div className="w-full max-w-md">
            <ContactCtas
              primaryLabel="CLAIM $150 INTRO CLEAN"
              align="center"
              className="max-w-none [&_p]:text-center md:[&_p]:text-left"
              primaryClassName="w-full bg-maroon text-cream font-bold uppercase tracking-wider text-sm sm:text-base py-5 px-8 rounded-full hover:bg-maroon-light transition-colors text-center shadow-sm"
              showOfferNote
            />
          </div>
        </div>

        <div className="w-full relative bg-pink flex-1 min-h-[380px] sm:min-h-[440px] md:min-h-0 md:h-full flex items-center justify-center px-4 sm:px-5 md:px-6 py-6 md:py-8">
          <BeforeAfterDoor
            beforeSrc="/before-kitchen.jpg"
            afterSrc="/after-kitchen.jpg"
            beforeAlt="Same kitchen before Linen & Bloom cleaning"
            afterAlt="Same kitchen after Linen & Bloom cleaning"
          />
          <div className="absolute top-8 left-3 sm:top-10 sm:left-5 md:top-14 md:left-6 bg-pink-dark border-[3px] border-cream rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-lg text-center px-2 z-20">
            <span className="text-base sm:text-lg md:text-xl font-black text-maroon leading-none">UCLA</span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-maroon mt-1">
              Student-Founded
            </span>
          </div>
          <div className="absolute bottom-8 left-3 sm:bottom-12 sm:left-5 md:bottom-16 md:left-6 bg-pink-dark border-[3px] border-cream rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-lg text-center px-2 z-20">
            <span className="text-base sm:text-lg md:text-xl font-black text-maroon leading-none">1 OF 20</span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-maroon mt-1">
              Route Spots
            </span>
          </div>
        </div>
      </section>
      </div>

      <section className="relative bg-gradient-to-b from-maroon to-maroon-light py-12 sm:py-20 overflow-hidden w-full">
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full block md:hidden" preserveAspectRatio="none">
            <path
              d="M0,0 L1440,0 L1440,20 Q1400,20 1380,35 Q1360,55 1340,30 Q1320,10 1300,20 L1300,20 Q1280,35 1260,20 Q1240,10 1200,20 Q1160,40 1120,20 Q1100,10 1060,25 Q1020,50 980,20 Q960,10 920,20 Q880,40 840,20 Q820,10 780,30 Q740,55 700,25 Q680,10 640,20 Q600,40 560,20 Q540,10 500,25 Q460,50 420,20 Q400,10 360,20 Q320,40 280,20 Q260,10 220,30 Q180,55 140,20 Q120,10 80,25 Q40,45 0,20 Z"
              fill="#F9C6D0"
            />
          </svg>
          <svg viewBox="0 0 1440 60" className="w-full hidden md:block" preserveAspectRatio="none">
            <path
              d="M0,0 L1440,0 L1440,20 Q1400,20 1380,35 Q1360,55 1340,30 Q1320,10 1300,20 L1300,20 Q1280,35 1260,20 Q1240,10 1200,20 Q1160,40 1120,20 Q1100,10 1060,25 Q1020,50 980,20 Q960,10 920,20 Q880,40 840,20 Q820,10 780,30 Q740,55 700,25 Q680,10 640,20 Q600,40 560,20 Q540,10 500,25 Q460,50 420,20 Q400,10 360,20 Q320,40 280,20 Q260,10 220,30 Q180,55 140,20 Q120,10 80,25 Q40,45 0,20 Z"
              fill="#FFF8F0"
            />
          </svg>
        </div>

        <h2 className="text-center text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black lowercase mb-10 sm:mb-16 mt-6 sm:mt-8 px-4">
          why linen & bloom feels different.
        </h2>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-pink to-pink-dark rounded-3xl -z-0 translate-y-8 scale-105 blur-sm opacity-60" />

          <div className="relative bg-cream rounded-2xl overflow-hidden shadow-2xl z-10">
            <div className="grid grid-cols-2 border-b border-maroon/10">
              <div className="flex items-center justify-center py-4 sm:py-6 border-r border-maroon/10 px-2">
                <Image
                  src="/linen2.png"
                  alt="Linen & Bloom"
                  width={100}
                  height={50}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <div className="flex items-center justify-center py-4 sm:py-6 px-2">
                <span className="text-base sm:text-xl font-black text-maroon">Others</span>
              </div>
            </div>

            {[
              { ours: "Familiar Cleaners, Not a Random Crew", theirs: "Whoever Shows Up That Day" },
              { ours: "Thoughtful, Home-Safe Products", theirs: "Harsh Industrial Chemicals" },
              { ours: "Clear Flat Pricing Biweekly", theirs: "Hidden Hourly Overages" },
              { ours: "Insured, Bonded & Owner-Led", theirs: "Anonymous Gig Marketplace" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i < 3 ? "border-b border-maroon/10" : ""}`}>
                <div className="flex items-start sm:items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-4 sm:py-5 border-r border-maroon/10">
                  <span className="text-red-500 text-sm sm:text-lg shrink-0 mt-0.5 sm:mt-0">&#10004;&#65039;</span>
                  <span className="font-bold text-[10px] sm:text-sm uppercase tracking-wide text-maroon leading-snug">
                    {row.ours}
                  </span>
                </div>
                <div className="flex items-start sm:items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-4 sm:py-5">
                  <span className="text-sm sm:text-lg shrink-0 mt-0.5 sm:mt-0">&#10060;</span>
                  <span className="font-bold text-[10px] sm:text-sm uppercase tracking-wide text-maroon/60 leading-snug">
                    {row.theirs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4 flex justify-center">
          <ContactCtas
            primaryLabel="CLAIM $150 INTRO CLEAN"
            align="center"
            light
            primaryClassName="w-full bg-maroon text-cream font-bold uppercase tracking-wider text-sm py-4 px-8 rounded-full border-2 border-cream hover:bg-cream hover:text-maroon transition-colors text-center shadow-sm"
          />
        </div>
      </section>

      <HowItWorks />

      <PricingSection />

      <FounderStory />

      <FaqSection />

      <div className="bg-maroon text-cream py-3 overflow-hidden whitespace-nowrap w-full">
        <div className="animate-marquee inline-flex gap-8 text-xs sm:text-sm font-bold uppercase tracking-wider">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span>UCLA Student-Founded</span>
              <span>Boutique Home Care</span>
              <span>West LA Route</span>
              <span>Insured & Bonded</span>
              <span>Limited Route · $150 Intro Clean</span>
              <span className="mr-8">Brentwood · Westwood · Santa Monica</span>
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
