import { PHONE_DISPLAY, smsHref, telHref } from "../../lib/contact";

type ContactCtasProps = {
  primaryLabel?: string;
  smsBody?: string;
  className?: string;
  primaryClassName?: string;
  align?: "left" | "center";
  showOfferNote?: boolean;
  offerNote?: string;
  light?: boolean;
};

export default function ContactCtas({
  primaryLabel = "CLAIM $150 INTRO CLEAN",
  smsBody,
  className = "",
  primaryClassName = "w-full bg-maroon text-cream font-bold uppercase tracking-wider text-sm py-4 px-8 rounded-full hover:bg-maroon-light transition-colors text-center shadow-sm",
  align = "left",
  showOfferNote = false,
  offerNote = "✦ $150 intro clean (Reg. $200) · Limited availability on our West LA route",
  light = false,
}: ContactCtasProps) {
  const textAlign = align === "center" ? "text-center" : "text-left md:text-left";
  const microClass = light
    ? "text-xs text-cream/75 font-medium"
    : "text-xs text-maroon/70 font-medium";
  const linkClass = light
    ? "underline font-semibold text-cream hover:opacity-80"
    : "underline font-semibold text-maroon hover:opacity-80";
  const noteClass = light
    ? "text-[11px] text-cream/65"
    : "text-[11px] text-maroon/60";

  return (
    <div className={`flex flex-col gap-2.5 w-full max-w-sm ${className}`}>
      <a href={smsHref(smsBody)} className={primaryClassName}>
        {primaryLabel}
      </a>
      <p className={`${microClass} ${textAlign}`}>
        Prefer to call? Reach us directly at{" "}
        <a href={telHref()} className={linkClass}>
          {PHONE_DISPLAY}
        </a>
      </p>
      {showOfferNote ? (
        <p className={`${noteClass} ${textAlign}`}>{offerNote}</p>
      ) : null}
    </div>
  );
}
