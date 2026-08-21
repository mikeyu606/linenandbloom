import Link from "next/link";
import { smsHref } from "../../../lib/contact";

export default function BookingCancelPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-black text-maroon mb-4">Checkout paused.</h1>
        <p className="text-maroon/70 text-base leading-relaxed mb-8">
          No charge was made. You can restart checkout anytime, or text Sophie if you&apos;d rather
          book by message.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/#pricing"
            className="rounded-full bg-maroon text-cream font-bold uppercase tracking-wider text-sm py-3.5 px-6 hover:bg-maroon-light transition-colors"
          >
            Return to pricing
          </Link>
          <a
            href={smsHref()}
            className="text-sm text-maroon/70 underline underline-offset-2 hover:text-maroon"
          >
            Text us instead
          </a>
        </div>
      </div>
    </main>
  );
}
