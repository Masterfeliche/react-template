import { BUSINESS_WHATSAPP_E164 } from "./productGallery";

export const CONTACT_EMAIL = "info@eunicatech.co.tz";
export const CONTACT_PHONE_DISPLAY = "0714 880 379";
export const CONTACT_PHONE_TEL = "+255714880379";

export const SOCIAL = {
  instagram: "https://www.instagram.com/eunica_graphics/",
  tiktok: "https://www.tiktok.com/@eunicatech",
} as const;

export const CONTACT_LOCATIONS = [
  {
    name: "Kariakoo",
    detail: "Main trading district — walk-in sales and device pickup.",
  },
  {
    name: "Mwananyamala",
    detail: "Service hub for installations, repairs, and support.",
  },
  {
    name: "Komakoma",
    detail: "Additional branch for regional reach and field help.",
  },
] as const;

export const SUBJECT_OPTIONS = [
  "General inquiry",
  "EFD / VEFD quote",
  "Laptops & computers",
  "CCTV installation",
  "Website / software project",
  "ICT support",
  "Printing & graphics",
  "Bulk / special order",
] as const;

export const WHATSAPP_DEFAULT = `https://wa.me/${BUSINESS_WHATSAPP_E164}?text=${encodeURIComponent(
  "Hello Eunica Technologies, I'd like to get in touch about your products or services."
)}`;

export function buildWhatsAppContactUrl(topic?: string): string {
  const text = topic
    ? `Hello Eunica Technologies, I'd like help with: ${topic}.`
    : "Hello Eunica Technologies, I'd like to get in touch.";
  return `https://wa.me/${BUSINESS_WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

/** Map URL query values to a friendly subject line */
export function subjectFromQueryParam(value: string | null): string {
  if (!value) return "";
  const decoded = decodeURIComponent(value).replace(/\+/g, " ");
  const map: Record<string, string> = {
    efd: "EFD / VEFD quote",
    computers: "Laptops & computers",
    laptops: "Laptops & computers",
    cctv: "CCTV installation",
    web: "Website / software project",
    support: "ICT support",
    printing: "Printing & graphics",
  };
  return map[decoded.toLowerCase()] ?? decoded;
}
