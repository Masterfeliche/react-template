import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import ServiceBlock from "../components/services/ServiceBlock";
import ServiceJumpNav from "../components/services/ServiceJumpNav";
import HomeCtaBand from "../components/home/HomeCtaBand";
import { photos } from "../lib/assetPaths";
import { SERVICES, SERVICE_PROCESS } from "../data/servicesContent";
import { bodyLead, btnPrimary, sectionSurface, sectionTitle } from "../lib/ui";

export default function Services() {
  return (
    <>
      <section
        className="relative flex min-h-[min(100dvh,40rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-8"
        aria-labelledby="services-hero-heading"
      >
        <motion.div
          className="absolute inset-0 z-0 bg-blue-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.servicesHero})` }}
          aria-hidden
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 z-[1] bg-blue-950/85 sm:bg-blue-950/78"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
            End-to-end ICT
          </p>
          <h1
            id="services-hero-heading"
            className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Professional ICT services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-100 md:text-xl">
            Hardware, TRA-compliant fiscal devices, websites, CCTV, support, and printing — one
            accountable team across Dar es Salaam.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#computers"
              className={`${btnPrimary} cursor-target inline-flex min-h-12 items-center justify-center`}
            >
              Explore services
            </a>
            <NavLink
              to="/contact"
              className="cursor-target inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/80 px-8 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Get a quote
            </NavLink>
          </div>
        </motion.div>
      </section>

      {/* How we work */}
      <section
        className="border-b border-blue-950/10 bg-gray-50 dark:border-slate-800 dark:bg-slate-900"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 md:py-16">
          <h2 id="process-heading" className={`${sectionTitle} text-center`}>
            How we work
          </h2>
          <p className={`${bodyLead} mt-3 text-center`}>
            Simple steps from first conversation to installed, supported technology.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {SERVICE_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                className="rounded-2xl border border-blue-950/10 bg-white p-6 text-center shadow-md dark:border-slate-700 dark:bg-slate-950"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-3xl font-bold text-yellow-400">{step.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-blue-950 dark:text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.div className={sectionSurface} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="mx-auto max-w-7xl">
          <p className={`${bodyLead} text-center`}>
            Six core services — jump below or scroll for detail, pricing paths, and WhatsApp.
          </p>

          <div className="mt-8">
            <ServiceJumpNav />
          </div>

          <div className="mt-12 flex flex-col gap-12 sm:mt-14 sm:gap-16">
            {SERVICES.map((s, i) => (
              <ServiceBlock key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </motion.div>

      <HomeCtaBand />
    </>
  );
}
