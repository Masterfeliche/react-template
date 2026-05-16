/** Encode filenames with spaces for safe URLs under /public */
function p(folder: string, file: string): string {
  return `${folder}/${encodeURIComponent(file)}`;
}

export const img = {
  laptop: (file: string) => p("/Laptop-pictures", file),
  efd: (file: string) => p("/Efd_Vfd_pictures", file),
  graphics: (file: string) => p("/Graphics-pictures", file),
} as const;

/** Curated assets used across pages */
export const photos = {
  laptopShowcase: img.laptop("WhatsApp Image 2025-11-28 at 11.57.07.jpeg"),
  laptopAlt: img.laptop("WhatsApp Image 2025-11-23 at 22.36.28 (1).jpeg"),
  efdPrinta: "/Efd_Vfd_pictures/PRINTA.jpg",
  efdPos: img.efd("POS VFD.png"),
  efdUnit: "/Efd_Vfd_pictures/74.jpg",
  graphicsSample: "/Graphics-pictures/1764765939008.jpeg",
  graphicsApparel: "/Graphics-pictures/1764765911213.jpeg",
  webDesign: "/team-nocoloco-Yt9wUh3ZB3Q-unsplash.jpg",
  cctv: "/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg",
  supportDesk: "/christopher-gower-m_HRfLhgABo-unsplash.jpg",
  accessories: "/homemade-media-6l5z2EPrnFc-unsplash.jpg",
  heroOffice: "/matthias-heil-znkIL3MQnvY-unsplash.jpg",
  promoBg: "/Efd_Vfd_pictures/Untitled-3.png",
  laptopWorkspace: "/pakata-goh-Ovb-MejXjOg-unsplash.jpg",
  servicesHero: "/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg",
  galleryHero: "/public/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg",
  productsHero: "/jakub-zerdzicki-kVuzH0KFs1w-unsplash.jpg",
  contactHero: "/pakata-goh-Ovb-MejXjOg-unsplash.jpg",
} as const;

/** Representative portraits for testimonials (stock; replace with client photos when available) */
export const avatars = {
  retail: "/adetola-afolabi-x0A7wgQmmdk-unsplash.jpg",
  students: "/zahir-namane-hwc7eIQiTCE-unsplash.jpg",
  technicians: "/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
  developers: "/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg",
} as const;
