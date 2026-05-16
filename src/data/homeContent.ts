import { photos, img, avatars } from "../lib/assetPaths";
import { GALLERY_PRODUCTS } from "./productGallery";

export { HOME_SERVICES } from "./servicesContent";

export const HOME_STATS = [
  { label: "Core services", value: "6+" },
  { label: "Product lines", value: "12+" },
  { label: "Dar locations", value: "3" },
  { label: "Support", value: "Local" },
] as const;

export const HOME_FEATURED = [
  {
    title: "Laptops & PCs",
    body: "Performance and reliability for offices, retail, and field teams.",
    image: photos.laptopAlt,
    imageAlt: "Business laptops",
    href: "/products",
  },
  {
    title: "EFD terminals",
    body: "Stay compliant with authorized hardware and local support.",
    image: photos.efdUnit,
    imageAlt: "Fiscal device hardware",
    href: "/gallery",
  },
  {
    title: "Accessories",
    body: "Monitors, networking, storage, and peripherals for full setups.",
    image: photos.accessories,
    imageAlt: "Computer accessories",
    href: "/products",
  },
  {
    title: "CCTV & security",
    body: "Cameras, kits, and professional installation when you need it.",
    image: photos.cctv,
    imageAlt: "CCTV security equipment",
    href: "/services#cctv",
  },
] as const;

/** Hero collage — real product & service imagery */
export const HERO_FLOATING_IMAGES = [
  {
    src: photos.laptopShowcase,
    alt: "Business laptop",
    className: "top-[6%] left-[4%] w-[42%] rotate-[-6deg] z-20",
    delay: 0,
  },
  {
    src: photos.efdPrinta,
    alt: "EFD machine",
    className: "top-[2%] right-[2%] w-[38%] rotate-[5deg] z-30",
    delay: 0.15,
  },
  {
    src: photos.cctv,
    alt: "CCTV camera",
    className: "bottom-[18%] left-[0%] w-[36%] rotate-[4deg] z-10",
    delay: 0.3,
  },
  {
    src: img.laptop("WhatsApp Image 2025-11-27 at 09.33.05.jpeg"),
    alt: "Office computer setup",
    className: "bottom-[8%] right-[6%] w-[40%] rotate-[-4deg] z-[25]",
    delay: 0.45,
  },
  {
    src: photos.graphicsApparel,
    alt: "Branded apparel printing",
    className: "top-[38%] left-[32%] w-[34%] rotate-[2deg] z-40",
    delay: 0.6,
  },
] as const;

export const MARQUEE_IMAGES = GALLERY_PRODUCTS.map((p) => ({
  src: p.imageSrc,
  alt: p.imageAlt,
  label: p.name,
}));

export const TESTIMONIALS = [
  {
    id: "retail",
    quote:
      "We rely on Eunica for hardware and support — fair pricing, clear guidance, and quick service whenever we need it.",
    name: "Retail business owner",
    context: "Dar es Salaam, Tanzania",
    initials: "RB",
    avatarSrc: avatars.retail,
    avatarAlt: "Retail business client portrait",
  },
  {
    id: "students",
    quote:
      "As university students, we needed dependable laptops without overspending. Eunica walked us through options honestly and helped us get machines that actually suit our courses.",
    name: "University students",
    context: "Dar es Salaam",
    initials: "US",
    avatarSrc: avatars.students,
    avatarAlt: "University student client portrait",
  },
  {
    id: "technicians",
    quote:
      "We send clients here for parts, printers, and fiscal devices. Stock is genuine, turnaround is fast, and their team speaks our language when it comes to specs and compatibility.",
    name: "ICT technicians",
    context: "Service & repair partners",
    initials: "IT",
    avatarSrc: avatars.technicians,
    avatarAlt: "ICT technician partner portrait",
  },
  {
    id: "developers",
    quote:
      "From monitors and docking stations to routers and backup drives, they keep our dev workspace running. Responsive when we need upgrades or last-minute hardware for a project.",
    name: "Software developers",
    context: "Remote & hybrid teams",
    initials: "SD",
    avatarSrc: avatars.developers,
    avatarAlt: "Software developer client portrait",
  },
] as const;
