"use client";

import Image from "next/image";
import { useState } from "react";

const leftLinks = [
  { label: "Our Route", href: "#" },
  { label: "Our Standard", href: "#" },
  { label: "Pricing", href: "#" },
];

const rightLinks = [
  { label: "West LA", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-cream border-b border-maroon/10 px-4 md:px-12 py-4">
        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between gap-3">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 -ml-2 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Image
            src="/linen2.png"
            alt="Linen & Bloom"
            width={120}
            height={60}
            className="h-10 w-auto"
            priority
          />
          <button className="bg-maroon text-cream font-bold uppercase tracking-wider text-[10px] py-2 px-3 rounded-full hover:bg-maroon-light transition-colors cursor-pointer shrink-0">
            Book a Reset
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            {leftLinks.map((link) => (
              <span key={link.label} className="cursor-pointer">
                {link.label}
              </span>
            ))}
          </div>
          <Image
            src="/linen2.png"
            alt="Linen & Bloom"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            {rightLinks.map((link) => (
              <span key={link.label} className="cursor-pointer">
                {link.label}
              </span>
            ))}
            <button className="bg-maroon text-cream font-bold uppercase tracking-wider text-xs py-2.5 px-5 rounded-full hover:bg-maroon-light transition-colors cursor-pointer">
              Book a Reset
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-b border-maroon/10 px-6 py-4">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
            {[...leftLinks, ...rightLinks].map((link) => (
              <span key={link.label} className="cursor-pointer">
                {link.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
