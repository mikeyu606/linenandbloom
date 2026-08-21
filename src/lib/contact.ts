/** Replace with your real business mobile number (digits only, with country code). */
export const PHONE_E164 = "13105550123";
export const PHONE_DISPLAY = "(310) 555-0123";

const DEFAULT_SMS_BODY =
  "Hi Sophie! I'd like to book the $150 intro clean for my home.";

export function smsHref(body: string = DEFAULT_SMS_BODY) {
  return `sms:+${PHONE_E164}?body=${encodeURIComponent(body)}`;
}

export function telHref() {
  return `tel:+${PHONE_E164}`;
}
