import { NavLink } from "react-router-dom";
import { photos } from "../lib/assetPaths";
import { btnOnDark, btnSolidBlue, sectionSurface, sectionTitle, bodyLead } from "../lib/ui";

const JUMP = [
  { id: "computers", label: "Computers" },
  { id: "efd", label: "EFD / VEFD" },
  { id: "web", label: "Web & software" },
  { id: "cctv", label: "CCTV" },
  { id: "support", label: "ICT support" },
  { id: "printing", label: "Printing" },
] as const;

const SERVICES = [
  {
    id: "computers",
    title: "Computer & accessories sales",
    image: photos.laptopShowcase,
    imageAlt: "Laptop computers for business",
    body: "We supply quality laptops, desktops, printers, monitors, and essential accessories from established brands — sized to your workload and budget.",
    cta: { to: "/products", label: "View products" },
  },
  {
    id: "efd",
    title: "EFD / VEFD machines",
    image: photos.efdPrinta,
    imageAlt: "Electronic fiscal device",
    body: "Stay TRA-compliant with authorized EFD and VEFD solutions. We handle sales, installation, training, and ongoing support so receipts and reporting stay smooth.",
    cta: { to: "/contact", label: "Request a quote" },
  },
  {
    id: "web",
    title: "Website & software development",
    image: photos.webDesign,
    imageAlt: "Web development workspace",
    body: "Modern, responsive websites and practical software to present your business online and automate day-to-day operations.",
    cta: { to: "/contact", label: "Discuss your project" },
  },
  {
    id: "cctv",
    title: "CCTV installation",
    image: photos.cctv,
    imageAlt: "Security cameras",
    body: "Design and installation of HD surveillance for shops, offices, and homes — cameras, recording, and cabling done professionally.",
    cta: { to: "/contact", label: "Book a survey" },
  },
  {
    id: "support",
    title: "Maintenance & ICT support",
    image: photos.supportDesk,
    imageAlt: "Technical support",
    body: "Fast troubleshooting, repairs, and network upkeep to reduce downtime and keep teams productive.",
    cta: { to: "/contact", label: "Request support" },
  },
  {
    id: "printing",
    title: "Graphics & printing",
    image: photos.graphicsSample,
    imageAlt: "Printed branding materials",
    body: "Business cards, banners, flyers, invoice books, and branded materials that strengthen your professional image.",
    cta: { to: "/contact", label: "Get a quote" },
  },
] as const;

export default function Services() {
  return (
    <>
      <div className="relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden bg-blue-950 bg-cover bg-center px-6 py-16 sm:px-8 md:min-h-[26rem] md:py-20 md:bg-[url('/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg')]">
        <div className="absolute inset-0 bg-blue-950/85 md:bg-blue-950/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl px-1 text-center sm:px-0">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Professional ICT services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-100 md:text-xl">
            End-to-end technology for Tanzanian businesses — hardware, compliance, software,
            security, and day-to-day support from one accountable team.
          </p>
        </div>
      </div>

      <div className={sectionSurface}>
        <div className="mx-auto max-w-7xl">
          <p className={`${bodyLead} text-center`}>
            Jump to a service, or scroll for full detail on each offering.
          </p>
          <nav
            className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
            aria-label="On this page"
          >
            {JUMP.map((j) => (
              <a
                key={j.id}
                href={`#${j.id}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-950/20 bg-gray-50 px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:border-yellow-400 hover:bg-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-yellow-500/60 dark:hover:bg-slate-700 sm:px-5"
              >
                {j.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 flex flex-col gap-12 sm:mt-14 sm:gap-14">
            {SERVICES.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 rounded-2xl border border-gray-200/80 bg-white shadow-md shadow-blue-950/5 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30"
              >
                <div className="grid gap-0 md:grid-cols-2 md:items-stretch">
                  <div className="relative min-h-[14rem] md:min-h-[18rem]">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="absolute inset-0 h-full w-full rounded-t-2xl object-cover md:rounded-l-2xl md:rounded-tr-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-blue-950 dark:text-slate-50">{s.title}</h2>
                    <p className="mt-4 leading-relaxed text-gray-800 dark:text-slate-200">{s.body}</p>
                    <NavLink
                      to={s.cta.to}
                      className={`${s.cta.to === "/contact" ? btnOnDark : btnSolidBlue} mt-8 self-start`}
                    >
                      {s.cta.label}
                    </NavLink>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`${sectionTitle} text-white dark:text-white`}>Have a project in mind?</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            Tell us what you need — we will respond with clear options and pricing. No obligation.
          </p>
          <NavLink to="/contact" className={`${btnOnDark} mx-auto mt-10 min-h-12`}>
            Get a free quote
          </NavLink>
        </div>
      </div>
    </>
  );
}
