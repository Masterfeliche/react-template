import { photos } from "../lib/assetPaths";
import { BUSINESS_WHATSAPP_E164 } from "./productGallery";

export const PRODUCT_TRUST = [
  {
    title: "Genuine stock",
    body: "Authorized hardware and fiscal devices — no grey-market surprises.",
  },
  {
    title: "Clear guidance",
    body: "We match specs to your software, budget, and branch size before you buy.",
  },
  {
    title: "Local support",
    body: "After-sales help across Kariakoo, Mwananyamala, and Komakoma.",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    id: "laptops",
    title: "Computers & laptops",
    image: photos.laptopShowcase,
    imageAlt: "Business laptops and desktops",
    body: "New laptops and desktops for office, retail, and education — configured for your software and workload.",
    bullets: ["Business & student notebooks", "Desktops and expandable towers", "Bulk orders for teams"],
    galleryHref: "/gallery?category=laptops",
    serviceHref: "/services#computers",
  },
  {
    id: "accessories",
    title: "Computer accessories",
    image: photos.accessories,
    imageAlt: "Keyboards, mice, and office accessories",
    body: "Monitors, keyboards, mice, printers, routers, storage, and cabling to complete your setup.",
    bullets: ["Monitors and desk peripherals", "Networking and storage", "Cables, UPS, and add-ons"],
    galleryHref: "/gallery?category=accessories",
    serviceHref: "/services#computers",
  },
  {
    id: "efd",
    title: "EFD / VEFD machines",
    image: photos.efdPos,
    imageAlt: "Point of sale and fiscal devices",
    body: "TRA-aligned fiscal devices with local support — ideal for shops, restaurants, and growing chains.",
    bullets: ["EFD / VEFD sales & setup", "Operator training included", "Ongoing fiscal support"],
    badge: "TRA-aligned",
    galleryHref: "/gallery?category=efd",
    serviceHref: "/services#efd",
  },
  {
    id: "cctv",
    title: "CCTV & surveillance",
    image: photos.cctv,
    imageAlt: "CCTV cameras and equipment",
    body: "Camera kits, DVRs/NVRs, and accessories with optional professional installation.",
    bullets: ["Indoor & outdoor camera kits", "Recording and remote viewing", "Professional installation available"],
    galleryHref: "/gallery",
    serviceHref: "/services#cctv",
  },
  {
    id: "printing",
    title: "Graphics & printing",
    image: photos.graphicsSample,
    imageAlt: "Business printing and graphics",
    body: "Business cards, banners, flyers, invoice books, and receipt books for consistent branding.",
    bullets: ["Marketing print & signage", "Invoice and receipt books", "Fast turnaround on batches"],
    galleryHref: "/gallery?category=printers",
    serviceHref: "/services#printing",
  },
  {
    id: "apparel",
    title: "Branded apparel",
    image: photos.graphicsApparel,
    imageAlt: "Branded clothing and uniforms",
    body: "Logos on polos, caps, and team wear — practical branding for staff and events.",
    bullets: ["Staff uniforms & polos", "Event and promo wear", "Logo design support"],
    galleryHref: "/gallery",
    serviceHref: "/services#printing",
  },
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export function buildWhatsAppCategoryUrl(categoryTitle: string): string {
  const text = `Hello Eunica Technologies, I'm interested in ${categoryTitle}. Could you share availability and pricing?`;
  return `https://wa.me/${BUSINESS_WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
