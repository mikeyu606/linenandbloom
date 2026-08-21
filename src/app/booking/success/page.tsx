import Link from "next/link";
import { smsHref } from "../../../lib/contact";

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center">
        <p className="text-gold text-sm font-bold uppercase tracking-[0.18em] mb-3">✦ Confirmed</p>
        <h1 className="text-3xl sm:text-4xl font-black text-maroon mb-4">You&apos;re on the list.</h1>
        <p className="text-maroon/70 text-base leading-relaxed mb-8">
          Thanks for booking with Linen &amp; Bloom. Sophie will reach out shortly to confirm your
          West LA visit details.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/#pricing"
            className="rounded-full bg-maroon text-cream font-bold uppercase tracking-wider text-sm py-3.5 px-6 hover:bg-maroon-light transition-colors"
          >
            Back to home
          </Link>
          <a
            href={smsHref("Hi Sophie! I just booked online and wanted to confirm my visit details.")}
            className="text-sm text-maroon/70 underline underline-offset-2 hover:text-maroon"
          >
            Prefer to text Sophie now?
          </a>
        </div>
      </div>
    </main>
  );
}
