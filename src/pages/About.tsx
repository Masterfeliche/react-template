import { NavLink } from "react-router-dom";
import TrueFocus from "../components/TrueFocus";
import { photos } from "../lib/assetPaths";
import {
  bodyLead,
  btnOnDark,
  btnPrimary,
  btnSecondary,
  cardElevated,
  sectionSurface,
  sectionSurfaceMuted,
  sectionTitle,
  textHeading,
} from "../lib/ui";
import { cn } from "@/lib/utils";

const promoOverlay =
  "linear-gradient(to bottom, rgba(15,23,42,0.88), rgba(15,23,42,0.82))";

const GALLERY = [
  {
    title: "Computers & laptops",
    image: photos.laptopAlt,
    imageAlt: "Laptop computers",
    body: "Business-grade laptops and desktops with local warranty support.",
  },
  {
    title: "Accessories",
    image: photos.accessories,
    imageAlt: "Computer accessories",
    body: "Complete your workspace with monitors, input devices, and networking.",
  },
  {
    title: "EFD / VEFD",
    image: photos.efdPrinta,
    imageAlt: "Fiscal devices",
    body: "Authorized fiscal hardware for compliant day-to-day trading.",
  },
  {
    title: "CCTV",
    image: photos.cctv,
    imageAlt: "Surveillance systems",
    body: "Visible deterrence and clear recording for your premises.",
  },
  {
    title: "Printing",
    image: photos.graphicsSample,
    imageAlt: "Printed materials",
    body: "Marketing and operational print for shops and offices.",
  },
  {
    title: "Branded apparel",
    image: photos.graphicsApparel,
    imageAlt: "Team branding",
    body: "Uniforms and branded wear for a consistent team look.",
  },
] as const;

const TEAM = [
  { initials: "NJ", name: "Neema Jackson", role: "Operations lead" },
  { initials: "JJ", name: "Jackson Juma", role: "Technical lead" },
  { initials: "MA", name: "Mwajuma Ally", role: "Client success" },
  { initials: "SS", name: "Said Said", role: "Field services" },
] as const;

export default function About() {
  return (
    <>
      <section className="relative flex min-h-[min(100dvh,40rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-8">
        <div
          className="absolute inset-0 z-0 bg-blue-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.heroOffice})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] bg-blue-950/82 sm:bg-blue-950/78"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <TrueFocus
            sentence="ABOUT US"
            manualMode={false}
            blurAmount={3}
            borderColor="#FACC15"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            className="justify-center text-white drop-shadow-sm"
          />
          <p className={`${bodyLead} mt-8 !max-w-3xl !leading-relaxed !text-gray-100`}>
            Eunica Technologies supports Tanzanian businesses with practical ICT — from compliant
            fiscal devices and hardware supply to software, security, and responsive support.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <NavLink to="/services" className={btnSecondary}>
              View services
            </NavLink>
            <NavLink to="/contact" className={btnPrimary}>
              Request a quote
            </NavLink>
          </div>
        </div>
      </section>

      <div className="grid gap-5 bg-blue-950 px-6 py-8 sm:px-8 sm:py-10 md:grid-cols-2 md:gap-6">
        <div
          className="rounded-2xl bg-cover bg-center px-6 py-12 text-center shadow-lg sm:px-8 sm:py-14"
          style={{ backgroundImage: `${promoOverlay}, url(${photos.promoBg})` }}
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">Our services</h2>
          <p className="mt-4 leading-relaxed text-gray-200">
            EFD setup, CCTV, websites, ICT support, and printing — delivered with clear scope and
            timelines.
          </p>
          <NavLink to="/services" className={`${btnOnDark} mx-auto mt-8 inline-flex`}>
            See all services
          </NavLink>
        </div>
        <div
          className="rounded-2xl bg-cover bg-center px-6 py-12 text-center shadow-lg sm:px-8 sm:py-14"
          style={{ backgroundImage: `${promoOverlay}, url(${photos.promoBg})` }}
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">Our products</h2>
          <p className="mt-4 leading-relaxed text-gray-200">
            Laptops, accessories, fiscal machines, CCTV kits, and branded materials — sourced for
            reliability.
          </p>
          <NavLink to="/products" className={`${btnOnDark} mx-auto mt-8 inline-flex`}>
            View products
          </NavLink>
        </div>
      </div>

      <section className={sectionSurface}>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div className="text-center md:text-left">
            <h2 className={sectionTitle}>Our mission</h2>
            <p className="mt-4 leading-relaxed text-gray-800 dark:text-slate-200">
              To deliver dependable, end-to-end ICT services so clients can focus on growth — not on
              troubleshooting technology.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className={sectionTitle}>Our vision</h2>
            <p className="mt-4 leading-relaxed text-gray-800 dark:text-slate-200">
              To be the most trusted ICT partner for businesses across Tanzania — known for honest
              advice, solid execution, and accessible support.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionSurfaceMuted}>
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionTitle} text-center`}>Solutions in action</h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Representative categories we supply and support every week.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item) => (
              <article key={item.title} className={cardElevated}>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-grow flex-col p-5">
                  <h3 className={cn("text-lg", textHeading)}>{item.title}</h3>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-800 dark:text-slate-200">{item.body}</p>
                  <NavLink to="/contact" className={`${btnOnDark} mt-6 self-start text-sm`}>
                    Request a quote
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`${sectionTitle} text-white dark:text-white`}>Leadership team</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-200">
            Experienced leads across operations, technical delivery, and customer care — aligned on
            one goal: reliable outcomes for your business.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.initials} className="flex flex-col items-center text-center">
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-yellow-400 bg-blue-900 text-2xl font-bold text-yellow-400"
                aria-hidden
              >
                {m.initials}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{m.name}</h3>
              <p className="mt-1 text-sm text-gray-200">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
