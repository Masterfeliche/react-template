import { NavLink } from "react-router-dom";
import TextType from "../components/TextType";
import TrueFocus from "../components/TrueFocus";
import { photos } from "../lib/assetPaths";
import {
  bodyLead,
  btnOnDark,
  btnPrimary,
  btnSecondary,
  btnSolidBlue,
  cardElevated,
  sectionSurface,
  sectionSurfaceMuted,
  sectionTitle,
  textHeading,
} from "../lib/ui";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: "retail",
    quote:
      "We rely on Eunica for hardware and support — fair pricing, clear guidance, and quick service whenever we need it.",
    name: "Retail business owner",
    context: "Dar es Salaam, Tanzania",
  },
  {
    id: "students",
    quote:
      "As university students, we needed dependable laptops without overspending. Eunica walked us through options honestly and helped us get machines that actually suit our courses.",
    name: "University students",
    context: "Dar es Salaam",
  },
  {
    id: "technicians",
    quote:
      "We send clients here for parts, printers, and fiscal devices. Stock is genuine, turnaround is fast, and their team speaks our language when it comes to specs and compatibility.",
    name: "ICT technicians",
    context: "Service & repair partners",
  },
  {
    id: "developers",
    quote:
      "From monitors and docking stations to routers and backup drives, they keep our dev workspace running. Responsive when we need upgrades or last-minute hardware for a project.",
    name: "Software developers",
    context: "Remote & hybrid teams",
  },
] as const;

export default function Home() {
  return (
    <>
      <section
        className="relative flex min-h-[min(100dvh,44rem)] w-full items-center overflow-hidden bg-blue-950 bg-cover bg-center md:min-h-[36rem] md:bg-[url('/matthias-heil-znkIL3MQnvY-unsplash.jpg')]"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-blue-950/80 md:bg-blue-950/70" aria-hidden />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Tanzania · ICT &amp; electronics
          </p>
          <h1
            id="hero-heading"
            className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Eunica Technologies — your partner for reliable ICT, hardware, and compliance.
          </h1>
          <div className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            <TextType
              as="span"
              className="texttype block min-h-[1.5em] text-gray-100"
              text={[
                "TRA-compliant EFD & VEFD machines",
                "Laptops, printers & accessories",
                "CCTV, websites & ongoing support",
              ]}
              typingSpeed={55}
              deletingSpeed={40}
              pauseDuration={2200}
              showCursor
              cursorCharacter="|"
              cursorBlinkDuration={0.55}
              loop
            />
          </div>
          <p className={`${bodyLead} mt-6 max-w-2xl !text-base text-gray-200 md:!text-lg`}>
            From EFD machines and computer sales to website design and CCTV installation, Eunica
            Technologies (T) LTD delivers the solutions your business needs to stay efficient and
            compliant.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <NavLink to="/services" className={btnPrimary}>
              View services
            </NavLink>
            <NavLink to="/contact" className={btnSecondary}>
              Request a quote
            </NavLink>
          </div>
        </div>
      </section>

      <section className={sectionSurface}>
        <div className="mx-auto max-w-7xl text-center">
          <TrueFocus
            sentence="WHO WE ARE"
            manualMode={false}
            blurAmount={3}
            borderColor="#172554"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            className="justify-center text-blue-950 dark:text-slate-50"
          />
          <p className={`${bodyLead} mt-8`}>
            We are Eunica Technologies (T) LTD, an ICT solutions and consultancy company based in
            Tanzania. Our team combines technical expertise with practical support — sales,
            installation, and ongoing service — so you can focus on running your business.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            <img
              src={photos.laptopShowcase}
              alt="Team collaboration with laptops in a professional setting"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
              loading="lazy"
              decoding="async"
            />
            <img
              src={photos.efdUnit}
              alt="Electronic fiscal device hardware"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2
            className={`${sectionTitle} text-center text-white dark:text-white`}
          >
            The Eunica advantage
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            <div className="text-center md:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto h-12 w-12 text-yellow-400 md:mx-0"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l.02.02M11.42 15.17 6.83 21m0-11.17a4.5 4.5 0 0 1 .09-1.92l-2.06-2.06a.825.825 0 0 0-1.166 0l-1.83 1.83a.825.825 0 0 0 0 1.166l2.06 2.06A4.5 4.5 0 0 1 6.83 9.83m0 0-.02-.02m0 0c-.83 0-1.64-.17-2.38-.49l-2.06 2.06a.825.825 0 0 0 0 1.166l1.83 1.83a.825.825 0 0 0 1.166 0l2.06-2.06A4.5 4.5 0 0 1 6.83 9.83Z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">All-in-one ICT</h3>
              <p className="mt-2 leading-relaxed text-gray-200">
                One partner for hardware, EFD/VEFD, software, CCTV, and printing — less vendor
                juggling, faster resolutions.
              </p>
            </div>
            <div className="text-center md:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto h-12 w-12 text-yellow-400 md:mx-0"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.631-.22-3.203-.632-4.7L12 2.714Z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                Installation &amp; support
              </h3>
              <p className="mt-2 leading-relaxed text-gray-200">
                Professional setup and dependable maintenance to keep your systems running with
                minimal downtime.
              </p>
            </div>
            <div className="text-center md:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto h-12 w-12 text-yellow-400 md:mx-0"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75M9 17.25h6.75M12 21v-3.75"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">Local presence</h3>
              <p className="mt-2 leading-relaxed text-gray-200">
                Offices and service reach across Kariakoo, Mwananyamala, and Komakoma — accessible
                when you need hands-on help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionSurfaceMuted}>
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionTitle} text-center`}>Core services</h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Hardware, compliance, and digital services tailored for Tanzanian businesses.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className={`${cardElevated} p-2`}>
              <img
                src="/pakata-goh-Ovb-MejXjOg-unsplash.jpg"
                alt="Laptop and workspace"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-grow flex-col p-5 text-center">
                <h3 className={cn("text-xl text-center", textHeading)}>Computers &amp; accessories</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-800 dark:text-slate-200">
                  Laptops, desktops, printers, and essential ICT accessories from trusted brands.
                </p>
                <NavLink to="/services#computers" className={`${btnSolidBlue} mx-auto mt-6`}>
                  Learn more
                </NavLink>
              </div>
            </article>
            <article className={`${cardElevated} p-2`}>
              <img
                src={photos.efdPrinta}
                alt="EFD fiscal device"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-grow flex-col p-5 text-center">
                <h3 className={cn("text-xl text-center", textHeading)}>EFD / VEFD machines</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-800 dark:text-slate-200">
                  TRA-compliant solutions with sales, installation, and ongoing support.
                </p>
                <NavLink to="/services#efd" className={`${btnSolidBlue} mx-auto mt-6`}>
                  Learn more
                </NavLink>
              </div>
            </article>
            <article className={`${cardElevated} p-2`}>
              <img
                src={photos.webDesign}
                alt="Web design and development"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-grow flex-col p-5 text-center">
                <h3 className={cn("text-xl text-center", textHeading)}>Websites &amp; software</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-800 dark:text-slate-200">
                  Modern responsive sites and tailored applications to streamline operations.
                </p>
                <NavLink to="/services#web" className={`${btnSolidBlue} mx-auto mt-6`}>
                  Learn more
                </NavLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={sectionSurface}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className={sectionTitle}>Featured products</h2>
          <p className={`${bodyLead} mt-4`}>
            A practical selection of hardware and solutions we supply and support every day.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className={`${cardElevated} border-0 bg-blue-950 p-2 shadow-xl shadow-blue-950/20`}>
              <img
                src={photos.laptopAlt}
                alt="Business laptops"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-grow flex-col p-5 text-center">
                <h3 className="text-xl font-semibold text-white">Laptops &amp; PCs</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-200">
                  Performance and reliability for offices, retail, and field teams.
                </p>
                <NavLink to="/products" className={`${btnOnDark} mx-auto mt-6`}>
                  Browse products
                </NavLink>
              </div>
            </article>
            <article className={`${cardElevated} border-0 bg-blue-950 p-2 shadow-xl shadow-blue-950/20`}>
              <img
                src={photos.accessories}
                alt="Computer accessories"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-grow flex-col p-5 text-center">
                <h3 className="text-xl font-semibold text-white">Accessories</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-200">
                  Monitors, peripherals, networking, and storage to complete your setup.
                </p>
                <NavLink to="/products" className={`${btnOnDark} mx-auto mt-6`}>
                  Browse products
                </NavLink>
              </div>
            </article>
            <article className={`${cardElevated} border-0 bg-blue-950 p-2 shadow-xl shadow-blue-950/20`}>
              <img
                src={photos.cctv}
                alt="CCTV security equipment"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-grow flex-col p-5 text-center">
                <h3 className="text-xl font-semibold text-white">CCTV &amp; surveillance</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-200">
                  Kits, cameras, and recording equipment with professional installation available.
                </p>
                <NavLink to="/products" className={`${btnOnDark} mx-auto mt-6`}>
                  Browse products
                </NavLink>
              </div>
            </article>
          </div>
          <NavLink
            to="/products"
            className={`${btnSolidBlue} mx-auto mt-12 min-h-12 w-full max-w-xs sm:w-auto`}
          >
            View all products
          </NavLink>
          <p className="mt-6 max-w-prose px-1 text-center text-sm leading-relaxed text-gray-700 dark:text-slate-300 sm:mx-auto sm:text-base">
            <NavLink
              to="/gallery"
              className="cursor-target font-semibold text-blue-950 underline decoration-yellow-500 underline-offset-4 transition-colors hover:text-blue-900 dark:text-yellow-400 dark:decoration-yellow-400 dark:hover:text-yellow-300"
            >
              Browse the product gallery
            </NavLink>{" "}
            <span className="text-gray-800 dark:text-slate-200">
              — filter by laptops, EFD, printers, and more.
            </span>
          </p>
        </div>
      </section>

      <section className={sectionSurfaceMuted} aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="testimonials-heading" className={`${sectionTitle} text-center`}>
            What clients say
          </h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Businesses, students, technicians, and developers — feedback from people who work with our
            team and hardware every day.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="flex h-full flex-col rounded-2xl border border-blue-950/10 bg-blue-950 p-6 shadow-xl sm:p-8"
              >
                <blockquote className="flex-grow">
                  <p className="text-base italic leading-relaxed text-white sm:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-6">
                  <span className="block text-base font-semibold text-yellow-400">{t.name}</span>
                  <span className="mt-1 block text-sm text-gray-200">{t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
