"use client";

import { useEffect, useId, useRef } from "react";
import { CHECKOUT_PLANS, type PlanId } from "../../lib/plans";
import EmbeddedCheckoutForm from "./EmbeddedCheckoutForm";

type Props = {
  planId: PlanId;
  onClose: () => void;
};

export default function CheckoutModal({ planId, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const plan = CHECKOUT_PLANS[planId];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <button
        type="button"
        aria-label="Close checkout"
        className="absolute inset-0 bg-maroon/55 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl bg-cream shadow-2xl border border-maroon/10"
      >
        <div className="flex items-center justify-between gap-3 border-b border-maroon/10 px-5 py-4 shrink-0">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-maroon/50">
              Linen &amp; Bloom
            </p>
            <h2 id={titleId} className="text-lg font-black text-maroon">
              {plan.name}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-maroon/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-maroon hover:bg-maroon hover:text-cream transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          <EmbeddedCheckoutForm planId={planId} compact onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
