"use client";

import Image from "next/image";
import { useState } from "react";
import { smsHref } from "../../lib/contact";

const leftLinks = [
  { label: "Our Route", href: "#" },
  { label: "Our Standard", href: "#" },
  { label: "Pricing", href: "#pricing" },
];

const rightLinks = [
  { label: "West LA", href: "#" },
  { label: "FAQ", href: "#faq" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-cream border-b border-maroon/10 px-4 md:px-12 py-4">
        {/* Mobile */}
        <div className="grid md:hidden grid-cols-[1fr_auto_1fr] items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="justify-self-start p-2 -ml-2 cursor-pointer"
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
            width={160}
            height={80}
            className="h-12 w-auto"
            priority
          />
          <a
            href={smsHref()}
            className="justify-self-end bg-maroon text-cream font-bold uppercase tracking-wider text-[10px] py-2 px-3 rounded-full hover:bg-maroon-light transition-colors shrink-0"
          >
            Text Us
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            {leftLinks.map((link) => (
              <a key={link.label} href={link.href} className="cursor-pointer hover:opacity-70 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>
          <Image
            src="/linen2.png"
            alt="Linen & Bloom"
            width={180}
            height={90}
            className="h-16 w-auto"
            priority
          />
          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            {rightLinks.map((link) => (
              <a key={link.label} href={link.href} className="cursor-pointer hover:opacity-70 transition-opacity">
                {link.label}
              </a>
            ))}
            <a
              href={smsHref()}
              className="bg-maroon text-cream font-bold uppercase tracking-wider text-xs py-2.5 px-5 rounded-full hover:bg-maroon-light transition-colors"
            >
              Text Us
            </a>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-b border-maroon/10 px-6 py-4">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={smsHref()} className="cursor-pointer" onClick={() => setOpen(false)}>
              Text Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
