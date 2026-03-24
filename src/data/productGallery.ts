import { img, photos } from "../lib/assetPaths";

/** WhatsApp in international format (Tanzania), no + prefix */
export const BUSINESS_WHATSAPP_E164 = "255714880379";

export type GalleryCategoryId = "all" | "printers" | "efd" | "laptops" | "accessories";

export type ProductCategory = Exclude<GalleryCategoryId, "all">;

export interface GalleryProduct {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const GALLERY_FILTERS: { id: GalleryCategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "printers", label: "Printers" },
  { id: "efd", label: "EFD machines" },
  { id: "laptops", label: "Laptops" },
  { id: "accessories", label: "Accessories" },
];

export const GALLERY_PRODUCTS: GalleryProduct[] = [
  {
    id: "laptop-pro",
    name: "Business laptops",
    category: "laptops",
    categoryLabel: "Laptops",
    description:
      "New and business-grade notebooks for office, retail, and mobility — configured to your software stack.",
    imageSrc: photos.laptopShowcase,
    imageAlt: "Business laptop computer on a desk",
  },
  {
    id: "laptop-alt",
    name: "Performance notebooks",
    category: "laptops",
    categoryLabel: "Laptops",
    description:
      "Reliable performance for multitasking, accounting packages, and everyday business workloads.",
    imageSrc: photos.laptopAlt,
    imageAlt: "Open laptop in a professional environment",
  },
  {
    id: "laptop-daily",
    name: "Office desktops & towers",
    category: "laptops",
    categoryLabel: "Laptops",
    description:
      "Fixed workstations where screen size and expandability matter — ideal for front desks and back office.",
    imageSrc: img.laptop("WhatsApp Image 2025-11-27 at 09.33.05.jpeg"),
    imageAlt: "Desktop computer setup for office use",
  },
  {
    id: "efd-printa",
    name: "EFD / VEFD terminals",
    category: "efd",
    categoryLabel: "EFD machines",
    description:
      "TRA-aligned fiscal devices with sales, installation, and training — stay compliant with confidence.",
    imageSrc: photos.efdPrinta,
    imageAlt: "Electronic fiscal device for retail",
  },
  {
    id: "efd-pos",
    name: "POS & VFD displays",
    category: "efd",
    categoryLabel: "EFD machines",
    description:
      "Customer-facing displays and POS integration for shops, restaurants, and service counters.",
    imageSrc: photos.efdPos,
    imageAlt: "Point of sale customer display",
  },
  {
    id: "efd-compact",
    name: "Compact fiscal units",
    category: "efd",
    categoryLabel: "EFD machines",
    description:
      "Space-efficient models for smaller counters without compromising on compliance and reporting.",
    imageSrc: photos.efdUnit,
    imageAlt: "Compact electronic fiscal device",
  },
  {
    id: "printer-office",
    name: "Office & receipt printers",
    category: "printers",
    categoryLabel: "Printers",
    description:
      "Document and receipt printing for invoices, kitchen tickets, and daily operations.",
    imageSrc: "/Efd_Vfd_pictures/1642015776421.jpg",
    imageAlt: "Office printer hardware",
  },
  {
    id: "printer-thermal",
    name: "Thermal & label options",
    category: "printers",
    categoryLabel: "Printers",
    description:
      "High-clarity thermal output for receipts and labels — matched to your POS and EFD workflow.",
    imageSrc: "/Efd_Vfd_pictures/61ZMgpSadzL._AC_SY355_.jpg",
    imageAlt: "Compact thermal printer",
  },
  {
    id: "acc-desk",
    name: "Monitors & peripherals",
    category: "accessories",
    categoryLabel: "Accessories",
    description:
      "Displays, keyboards, mice, and cables to complete professional desks and checkout areas.",
    imageSrc: photos.accessories,
    imageAlt: "Computer keyboard and desk accessories",
  },
  {
    id: "acc-network",
    name: "Routers & networking",
    category: "accessories",
    categoryLabel: "Accessories",
    description:
      "Reliable connectivity for small offices — routers, switches, and structured cabling support.",
    imageSrc: "/Graphics-pictures/1764765855482.jpeg",
    imageAlt: "Networking and tech accessories",
  },
];

export function filterGalleryProducts(
  products: GalleryProduct[],
  filter: GalleryCategoryId
): GalleryProduct[] {
  if (filter === "all") return products;
  return products.filter((p) => p.category === filter);
}

export function buildWhatsAppProductUrl(productName: string): string {
  const text = `Hello Eunica Technologies, I'm interested in: ${productName}. Could you share availability and pricing?`;
  return `https://wa.me/${BUSINESS_WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
