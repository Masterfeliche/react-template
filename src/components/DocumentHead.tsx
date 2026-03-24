import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE =
  "Eunica Technologies (T) LTD — ICT, EFD, laptops & support in Tanzania";

/** Canonical lowercase paths (matches React Router + NavLink). */
const ROUTE_META: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: SITE,
    description:
      "ICT consultation, TRA-compliant EFD/VEFD machines, laptops, printers, CCTV, websites, and support. Serving businesses in Dar es Salaam and across Tanzania.",
  },
  "/about": {
    title: `About — ${SITE}`,
    description:
      "Learn about Eunica Technologies: mission, locations (Kariakoo, Mwananyamala, Komakoma), and the ICT services we deliver for Tanzanian businesses.",
  },
  "/services": {
    title: `Services — ${SITE}`,
    description:
      "Computer sales, EFD/VEFD, web development, CCTV installation, ICT maintenance, graphics & printing — end-to-end technology for your business.",
  },
  "/products": {
    title: `Products — ${SITE}`,
    description:
      "Laptops, accessories, EFD machines, CCTV kits, printing, and branded apparel. Request a quote from Eunica Technologies.",
  },
  "/gallery": {
    title: `Product gallery — ${SITE}`,
    description:
      "Browse Eunica Technologies product gallery: laptops, EFD machines, printers, and accessories. Filter by category and request a quote or WhatsApp us.",
  },
  "/contact": {
    title: `Contact — ${SITE}`,
    description:
      "Contact Eunica Technologies for quotes and support. Phone 0714880379, email info@eunicatech.co.tz.",
  },
} as const;

const NOT_FOUND_META = {
  title: `Page not found — ${SITE}`,
  description:
    "That page is not available. Explore Eunica Technologies services, products, gallery, and contact options from the home page.",
} as const;

function setMetaDescription(content: string) {
  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "description");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function metaKeyForPathname(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.toLowerCase();
}

export default function DocumentHead() {
  const { pathname } = useLocation();
  const key = metaKeyForPathname(pathname);
  const meta =
    key in ROUTE_META ? ROUTE_META[key as keyof typeof ROUTE_META] : NOT_FOUND_META;

  useEffect(() => {
    document.title = meta.title;
    setMetaDescription(meta.description);
  }, [meta.description, meta.title, pathname]);

  return null;
}
