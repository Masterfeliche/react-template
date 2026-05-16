import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import TrueFocus from "../components/TrueFocus";
import ImageMarquee from "../components/home/ImageMarquee";
import HomeCtaBand from "../components/home/HomeCtaBand";
import AboutGalleryCard from "../components/about/AboutGalleryCard";
import { photos } from "../lib/assetPaths";
import { ABOUT_GALLERY, ABOUT_LOCATIONS, ABOUT_TEAM } from "../data/aboutContent";
import {
  bodyLead,
  btnOnDark,
  btnPrimary,
  btnSecondary,
  sectionSurface,
  sectionSurfaceMuted,
  sectionTitle,
} from "../lib/ui";

const promoOverlay =
  "linear-gradient(to bottom, rgba(15,23,42,0.88), rgba(15,23,42,0.82))";

export default function About() {
  return (
    <>
      <section
        className="relative flex min-h-[min(100dvh,44rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-8"
        aria-labelledby="about-hero-heading"
      >
        <motion.div
          className="absolute inset-0 z-0 bg-blue-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.heroOffice})` }}
          aria-hidden
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 z-[1] bg-blue-950/82 sm:bg-blue-950/78" aria-hidden />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TrueFocus
            sentence="ABOUT US"
            manualMode={false}
            blurAmount={3}
            borderColor="#FACC15"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            className="justify-center text-white drop-shadow-sm"
          />
          <h1 id="about-hero-heading" className="sr-only">
            About Eunica Technologies
          </h1>
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
        </motion.div>
      </section>

      <ImageMarquee />

      {/* Promo tiles */}
      <div className="grid gap-0 md:grid-cols-2">
        <motion.div
          className="relative overflow-hidden bg-cover bg-center px-6 py-14 sm:px-10 sm:py-20"
          style={{ backgroundImage: `${promoOverlay}, url(${photos.promoBg})` }}
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.laptopShowcase})` }}
            variants={{ rest: { scale: 1, opacity: 0 }, hover: { scale: 1.06, opacity: 0.28 } }}
            transition={{ duration: 0.5 }}
            aria-hidden
          />
          <motion.div className="relative z-10 text-center" variants={{ rest: { y: 0 }, hover: { y: -4 } }}>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Our services</h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-200">
              EFD setup, CCTV, websites, ICT support, and printing — delivered with clear scope and
              timelines.
            </p>
            <NavLink to="/services" className={`${btnOnDark} mx-auto mt-8 inline-flex`}>
              See all services
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative overflow-hidden bg-cover bg-center px-6 py-14 sm:px-10 sm:py-20"
          style={{ backgroundImage: `${promoOverlay}, url(${photos.promoBg})` }}
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.efdPrinta})` }}
            variants={{ rest: { scale: 1, opacity: 0 }, hover: { scale: 1.06, opacity: 0.3 } }}
            transition={{ duration: 0.5 }}
            aria-hidden
          />
          <motion.div className="relative z-10 text-center" variants={{ rest: { y: 0 }, hover: { y: -4 } }}>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Our products</h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-200">
              Laptops, accessories, fiscal machines, CCTV kits, and branded materials — sourced for
              reliability.
            </p>
            <NavLink to="/products" className={`${btnOnDark} mx-auto mt-8 inline-flex`}>
              View products
            </NavLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Mission & vision */}
      <section className={sectionSurface}>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={sectionTitle}>Our mission</h2>
            <p className="mt-4 leading-relaxed text-gray-800 dark:text-slate-200">
              To deliver dependable, end-to-end ICT services so clients can focus on growth — not on
              troubleshooting technology.
            </p>
          </motion.div>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={sectionTitle}>Our vision</h2>
            <p className="mt-4 leading-relaxed text-gray-800 dark:text-slate-200">
              To be the most trusted ICT partner for businesses across Tanzania — known for honest
              advice, solid execution, and accessible support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20" aria-labelledby="locations-heading">
        <motion.div
          className="mx-auto max-w-7xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="locations-heading" className={`${sectionTitle} text-white`}>
            Where to find us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Three Dar es Salaam locations — visit, call, or message us for the branch nearest you.
          </p>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-3"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {ABOUT_LOCATIONS.map((loc) => (
              <motion.div
                key={loc.name}
                className="rounded-2xl border border-white/10 bg-blue-900/50 p-6 text-left backdrop-blur-sm"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4, borderColor: "rgba(250, 204, 21, 0.4)" }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-blue-950">
                  {loc.name.charAt(0)}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{loc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{loc.detail}</p>
              </motion.div>
            ))}
          </motion.div>
          <NavLink to="/contact" className={`${btnOnDark} mx-auto mt-10 inline-flex`}>
            Get directions &amp; contact
          </NavLink>
        </motion.div>
      </section>

      {/* Solutions gallery */}
      <section className={sectionSurfaceMuted} aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            id="solutions-heading"
            className={`${sectionTitle} text-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Solutions in action
          </motion.h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Representative categories we supply and support every week — hover to explore.
          </p>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {ABOUT_GALLERY.map((item, i) => (
              <AboutGalleryCard
                key={item.title}
                title={item.title}
                body={item.body}
                image={item.image}
                imageAlt={item.imageAlt}
                href={item.href}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20" aria-labelledby="team-heading">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="team-heading" className={`${sectionTitle} text-white`}>
            Leadership team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-200">
            Experienced leads across operations, technical delivery, and customer care.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_TEAM.map((m, i) => (
            <motion.div
              key={m.initials}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-yellow-400 bg-blue-900 text-2xl font-bold text-yellow-400 shadow-lg shadow-yellow-400/20"
                animate={{ boxShadow: ["0 0 0 0 rgba(250,204,21,0.3)", "0 0 0 12px rgba(250,204,21,0)", "0 0 0 0 rgba(250,204,21,0.3)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                aria-hidden
              >
                {m.initials}
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-white">{m.name}</h3>
              <p className="mt-1 text-sm text-gray-200">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <HomeCtaBand />
    </>
  );
}
