import { photos } from "../lib/assetPaths";

export const ABOUT_LOCATIONS = [
  {
    name: "Kariakoo",
    detail: "Main trading district — walk-in sales and quick device pickup.",
  },
  {
    name: "Mwananyamala",
    detail: "Service and support hub for installations and repairs.",
  },
  {
    name: "Komakoma",
    detail: "Additional branch for regional reach and field assistance.",
  },
] as const;

export const ABOUT_GALLERY = [
  {
    title: "Computers & laptops",
    image: photos.laptopAlt,
    imageAlt: "Laptop computers",
    body: "Business-grade laptops and desktops with local warranty support.",
    href: "/products",
  },
  {
    title: "Accessories",
    image: photos.accessories,
    imageAlt: "Computer accessories",
    body: "Complete your workspace with monitors, input devices, and networking.",
    href: "/products",
  },
  {
    title: "EFD / VEFD",
    image: photos.efdPrinta,
    imageAlt: "Fiscal devices",
    body: "Authorized fiscal hardware for compliant day-to-day trading.",
    href: "/services#efd",
  },
  {
    title: "CCTV",
    image: photos.cctv,
    imageAlt: "Surveillance systems",
    body: "Visible deterrence and clear recording for your premises.",
    href: "/services#cctv",
  },
  {
    title: "Printing",
    image: photos.graphicsSample,
    imageAlt: "Printed materials",
    body: "Marketing and operational print for shops and offices.",
    href: "/services#printing",
  },
  {
    title: "Branded apparel",
    image: photos.graphicsApparel,
    imageAlt: "Team branding",
    body: "Uniforms and branded wear for a consistent team look.",
    href: "/services#printing",
  },
] as const;

export const ABOUT_TEAM = [
  { initials: "NJ", name: "Neema Jackson", role: "Operations lead" },
  { initials: "JJ", name: "Jackson Juma", role: "Technical lead" },
  { initials: "MA", name: "Mwajuma Ally", role: "Client success" },
  { initials: "SS", name: "Said Said", role: "Field services" },
] as const;
