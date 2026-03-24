import { NavLink } from "react-router-dom";
import { photos } from "../lib/assetPaths";
import { btnOnDark, cardElevated, sectionSurface, sectionSurfaceMuted, sectionTitle, bodyLead, textHeading } from "../lib/ui";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    title: "Computers & laptops",
    image: photos.laptopShowcase,
    imageAlt: "Business laptops and desktops",
    body: "New laptops and desktops for office, retail, and education — configured for your software and workload.",
  },
  {
    title: "Computer accessories",
    image: photos.accessories,
    imageAlt: "Keyboards, mice, and office accessories",
    body: "Monitors, keyboards, mice, printers, routers, storage, and cabling to complete your setup.",
  },
  {
    title: "EFD / VEFD machines",
    image: photos.efdPos,
    imageAlt: "Point of sale and fiscal devices",
    body: "TRA-aligned fiscal devices with local support — ideal for shops, restaurants, and growing chains.",
  },
  {
    title: "CCTV & surveillance",
    image: photos.cctv,
    imageAlt: "CCTV cameras and equipment",
    body: "Camera kits, DVRs/NVRs, and accessories with optional professional installation.",
  },
  {
    title: "Graphics & printing",
    image: photos.graphicsSample,
    imageAlt: "Business printing and graphics",
    body: "Business cards, banners, flyers, invoice books, and receipt books for consistent branding.",
  },
  {
    title: "Branded apparel",
    image: photos.graphicsApparel,
    imageAlt: "Branded clothing and uniforms",
    body: "Logos on polos, caps, and team wear — practical branding for staff and events.",
  },
] as const;

export default function Products() {
  return (
    <>
      <div className="relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden bg-blue-950 bg-cover bg-center px-6 py-16 sm:px-8 md:min-h-[26rem] md:py-20 md:bg-[url('/jakub-zerdzicki-kVuzH0KFs1w-unsplash.jpg')]">
        <div className="absolute inset-0 bg-blue-950/85 md:bg-blue-950/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl px-1 text-center sm:px-0">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">Products</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-100 md:text-xl">
            Reliable hardware and branded materials — sourced and supported by a team that understands
            local business needs.
          </p>
        </div>
      </div>

      <div className={sectionSurface}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={sectionTitle}>Quality you can trust</h2>
          <p className={`${bodyLead} mt-4`}>
            We focus on dependable equipment and clear warranties. If you need something specific,
            ask — we work with a wide supplier network.
          </p>
        </div>
      </div>

      <div className={sectionSurfaceMuted}>
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionTitle} text-center`}>Product categories</h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Request availability, specs, or bulk pricing — we respond with honest recommendations.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <article key={c.title} className={cardElevated}>
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-grow flex-col p-6">
                  <h3 className={cn("text-xl", textHeading)}>{c.title}</h3>
                  <p className="mt-3 flex-grow leading-relaxed text-gray-800 dark:text-slate-200">{c.body}</p>
                  <NavLink to="/contact" className={`${btnOnDark} mt-8 self-start`}>
                    Request a quote
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`${sectionTitle} text-white dark:text-white`}>Need something else?</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Special orders, bulk pricing, and mixed bundles are common for our clients. Describe what
            you need and we will follow up.
          </p>
          <NavLink to="/contact" className={`${btnOnDark} mx-auto mt-10 min-h-12`}>
            Contact sales
          </NavLink>
        </div>
      </div>
    </>
  );
}
