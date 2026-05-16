import { photos } from "../lib/assetPaths";
import { BUSINESS_WHATSAPP_E164 } from "./productGallery";

export const SERVICE_JUMP = [
  { id: "computers", label: "Computers" },
  { id: "efd", label: "EFD / VEFD" },
  { id: "web", label: "Web & software" },
  { id: "cctv", label: "CCTV" },
  { id: "support", label: "ICT support" },
  { id: "printing", label: "Printing" },
] as const;

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Consult",
    body: "Tell us your business needs, location, and budget — we recommend what fits.",
  },
  {
    step: "02",
    title: "Quote & supply",
    body: "Clear pricing, genuine hardware, and realistic timelines before you commit.",
  },
  {
    step: "03",
    title: "Install & support",
    body: "Professional setup, training where needed, and local after-sales help.",
  },
] as const;

export const SERVICES = [
  {
    id: "computers",
    title: "Computer & accessories sales",
    shortTitle: "Computers & accessories",
    shortBody: "Laptops, desktops, printers, and ICT peripherals from trusted brands.",
    body: "We supply quality laptops, desktops, printers, monitors, and essential accessories from established brands — sized to your workload and budget.",
    bullets: [
      "Business & education laptops, desktops, and AIOs",
      "Printers, monitors, routers, and desk peripherals",
      "Honest spec advice — matched to your software and budget",
    ],
    image: photos.laptopShowcase,
    imageAlt: "Laptop computers for business",
    primaryCta: { to: "/products", label: "View products" },
    secondaryCta: { to: "/gallery", label: "Browse gallery" },
  },
  {
    id: "efd",
    title: "EFD / VEFD machines",
    shortTitle: "EFD / VEFD machines",
    shortBody: "TRA-compliant fiscal devices with sales, installation, and training.",
    body: "Stay TRA-compliant with authorized EFD and VEFD solutions. We handle sales, installation, training, and ongoing support so receipts and reporting stay smooth.",
    bullets: [
      "Authorized EFD / VEFD sales and registration guidance",
      "On-site installation, operator training, and receipt setup",
      "Ongoing fiscal support when regulations or devices change",
    ],
    badge: "TRA-aligned",
    image: photos.efdPrinta,
    imageAlt: "Electronic fiscal device",
    primaryCta: { to: "/contact", label: "Request a quote" },
    secondaryCta: { to: "/gallery?category=efd", label: "See EFD in gallery" },
  },
  {
    id: "web",
    title: "Website & software development",
    shortTitle: "Websites & software",
    shortBody: "Modern sites and practical apps that streamline daily operations.",
    body: "Modern, responsive websites and practical software to present your business online and automate day-to-day operations.",
    bullets: [
      "Responsive business websites and landing pages",
      "Practical tools for inventory, bookings, or internal workflows",
      "Hosting guidance and updates after launch",
    ],
    image: photos.webDesign,
    imageAlt: "Web development workspace",
    primaryCta: { to: "/contact", label: "Discuss your project" },
  },
  {
    id: "cctv",
    title: "CCTV installation",
    shortTitle: "CCTV installation",
    shortBody: "HD surveillance design, cabling, and recording for shops and offices.",
    body: "Design and installation of HD surveillance for shops, offices, and homes — cameras, recording, and cabling done professionally.",
    bullets: [
      "Site survey and camera placement planning",
      "DVR/NVR setup, cabling, and remote viewing options",
      "Maintenance and expansion as your premises grow",
    ],
    image: photos.cctv,
    imageAlt: "Security cameras",
    primaryCta: { to: "/contact", label: "Book a survey" },
    secondaryCta: { to: "/products", label: "View CCTV products" },
  },
  {
    id: "support",
    title: "Maintenance & ICT support",
    shortTitle: "ICT support",
    shortBody: "Maintenance and hands-on help to keep systems running reliably.",
    body: "Fast troubleshooting, repairs, and network upkeep to reduce downtime and keep teams productive.",
    bullets: [
      "Hardware diagnostics, repairs, and upgrades",
      "Network, Wi‑Fi, and printer troubleshooting",
      "On-site visits across Dar es Salaam branches",
    ],
    image: photos.supportDesk,
    imageAlt: "Technical support",
    primaryCta: { to: "/contact", label: "Request support" },
  },
  {
    id: "printing",
    title: "Graphics & printing",
    shortTitle: "Graphics & printing",
    shortBody: "Marketing print, signage, and branded materials for your team.",
    body: "Business cards, banners, flyers, invoice books, and branded materials that strengthen your professional image.",
    bullets: [
      "Business cards, banners, flyers, and posters",
      "Invoice books, receipt books, and operational print",
      "Branded apparel and team uniforms on request",
    ],
    image: photos.graphicsSample,
    imageAlt: "Printed branding materials",
    primaryCta: { to: "/contact", label: "Get a quote" },
    secondaryCta: { to: "/gallery?category=printers", label: "View print samples" },
  },
] as const;

export type Service = (typeof SERVICES)[number];

/** Home page teaser cards — derived from full service list */
export const HOME_SERVICES = SERVICES.map((s) => ({
  id: s.id,
  title: s.shortTitle,
  body: s.shortBody,
  image: s.image,
  imageAlt: s.imageAlt,
  href: `/services#${s.id}` as const,
}));

export function buildWhatsAppServiceUrl(serviceTitle: string): string {
  const text = `Hello Eunica Technologies, I'm interested in your "${serviceTitle}" service. Could you share pricing and next steps?`;
  return `https://wa.me/${BUSINESS_WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
