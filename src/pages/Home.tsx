import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import TextType from "../components/TextType";
import TrueFocus from "../components/TrueFocus";
import FloatingCollage from "../components/home/FloatingCollage";
import ImageMarquee from "../components/home/ImageMarquee";
import StatsBar from "../components/home/StatsBar";
import AnimatedServiceCard from "../components/home/AnimatedServiceCard";
import ProductCarousel from "../components/home/ProductCarousel";
import FeaturedProductGrid from "../components/home/FeaturedProductGrid";
import HomeCtaBand from "../components/home/HomeCtaBand";
import { photos } from "../lib/assetPaths";
import { HOME_SERVICES, TESTIMONIALS } from "../data/homeContent";
import TestimonialCard from "../components/home/TestimonialCard";
import {
  bodyLead,
  btnPrimary,
  btnSecondary,
  sectionSurface,
  sectionSurfaceMuted,
  sectionTitle,
} from "../lib/ui";

const promoOverlay =
  "linear-gradient(to bottom, rgba(15,23,42,0.88), rgba(15,23,42,0.82))";

export default function Home() {
  return (
    <>
      {/* Hero — split layout with floating product collage */}
      <section
        className="relative min-h-[min(100dvh,52rem)] overflow-hidden bg-blue-950"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.heroOffice})` }}
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 bg-blue-950/85 sm:bg-blue-950/78"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              Tanzania · ICT &amp; electronics
            </p>
            <h1
              id="hero-heading"
              className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Technology that sells, supports, and keeps you compliant.
            </h1>
            <motion.div
              className="mt-4 max-w-lg text-lg text-gray-200 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
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
            </motion.div>
            <p className={`${bodyLead} mt-6 !max-w-lg !text-base !text-gray-200 md:!text-lg`}>
              Eunica Technologies delivers hardware, fiscal devices, and digital services with
              installation and local support across Dar es Salaam.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <NavLink to="/services" className={btnPrimary}>
                View services
              </NavLink>
              <NavLink to="/contact" className={btnSecondary}>
                Request a quote
              </NavLink>
            </div>
          </motion.div>

          <FloatingCollage />
        </div>
      </section>

      <ImageMarquee />
      <StatsBar />

      {/* Who we are — animated gallery strip */}
      <section className={sectionSurface} aria-labelledby="who-we-are-heading">
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
          <h2 id="who-we-are-heading" className="sr-only">
            Who we are
          </h2>
          <p className={`${bodyLead} mt-8`}>
            Eunica Technologies (T) LTD is your ICT partner in Tanzania — sales, installation, and
            dependable support so you can focus on customers and growth.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            <motion.figure
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={photos.laptopShowcase}
                alt="Team collaboration with laptops in a professional setting"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
              />
            </motion.figure>
            <motion.figure
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={photos.efdUnit}
                alt="Electronic fiscal device hardware"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-blue-950 px-6 py-14 dark:bg-slate-950 sm:px-8 md:py-20">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${sectionTitle} text-center text-white`}>The Eunica advantage</h2>
          <motion.div
            className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "All-in-one ICT",
                body: "One partner for hardware, EFD/VEFD, software, CCTV, and printing — less vendor juggling.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l.02.02M11.42 15.17 6.83 21m0-11.17a4.5 4.5 0 0 1 .09-1.92l-2.06-2.06a.825.825 0 0 0-1.166 0l-1.83 1.83a.825.825 0 0 0 0 1.166l2.06 2.06A4.5 4.5 0 0 1 6.83 9.83m0 0-.02-.02m0 0c-.83 0-1.64-.17-2.38-.49l-2.06 2.06a.825.825 0 0 0 0 1.166l1.83 1.83a.825.825 0 0 0 1.166 0l2.06-2.06A4.5 4.5 0 0 1 6.83 9.83Z"
                  />
                ),
              },
              {
                title: "Installation & support",
                body: "Professional setup and maintenance to keep systems running with minimal downtime.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.631-.22-3.203-.632-4.7L12 2.714Z"
                  />
                ),
              },
              {
                title: "Local presence",
                body: "Kariakoo, Mwananyamala, and Komakoma — accessible when you need hands-on help.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75M9 17.25h6.75M12 21v-3.75"
                  />
                ),
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="text-center md:text-left"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-auto h-12 w-12 text-yellow-400 md:mx-0"
                  aria-hidden
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.svg>
                <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-200">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* All 6 services — animated cards */}
      <section className={sectionSurfaceMuted} aria-labelledby="services-heading">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 id="services-heading" className={`${sectionTitle} text-center`}>
            Core services
          </h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Hardware, compliance, security, and digital — everything your business needs under one
            roof.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((service, i) => (
              <AnimatedServiceCard
                key={service.id}
                title={service.title}
                body={service.body}
                image={service.image}
                imageAlt={service.imageAlt}
                href={service.href}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <NavLink to="/services" className={btnPrimary}>
              Explore all services
            </NavLink>
          </div>
        </motion.div>
      </section>

      <ProductCarousel />
      <FeaturedProductGrid />

      {/* Promo tiles — parallax-style hover */}
      <div className="grid gap-0 md:grid-cols-2">
        <motion.div
          className="group relative overflow-hidden bg-cover bg-center px-6 py-16 sm:px-10 sm:py-20"
          style={{ backgroundImage: `${promoOverlay}, url(${photos.promoBg})` }}
          whileHover="hover"
          initial="rest"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.cctv})` }}
            variants={{
              rest: { scale: 1, opacity: 0 },
              hover: { scale: 1.08, opacity: 0.25 },
            }}
            transition={{ duration: 0.5 }}
            aria-hidden
          />
          <motion.div className="relative z-10 text-center" variants={{ rest: { y: 0 }, hover: { y: -4 } }}>
            <h2 className="text-2xl font-bold text-white md:text-3xl">CCTV &amp; security</h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-200">
              Protect your shop or office with professional camera systems and installation.
            </p>
            <NavLink to="/services#cctv" className={`${btnSecondary} mx-auto mt-8 inline-flex`}>
              Book a survey
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div
          className="group relative overflow-hidden bg-cover bg-center px-6 py-16 sm:px-10 sm:py-20"
          style={{ backgroundImage: `${promoOverlay}, url(${photos.promoBg})` }}
          whileHover="hover"
          initial="rest"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.efdPrinta})` }}
            variants={{
              rest: { scale: 1, opacity: 0 },
              hover: { scale: 1.08, opacity: 0.3 },
            }}
            transition={{ duration: 0.5 }}
            aria-hidden
          />
          <motion.div className="relative z-10 text-center" variants={{ rest: { y: 0 }, hover: { y: -4 } }}>
            <h2 className="text-2xl font-bold text-white md:text-3xl">EFD / VEFD compliance</h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-200">
              TRA-aligned devices with setup, training, and ongoing fiscal support.
            </p>
            <NavLink to="/services#efd" className={`${btnSecondary} mx-auto mt-8 inline-flex`}>
              Get compliant today
            </NavLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Testimonials */}
      <section className={sectionSurfaceMuted} aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="testimonials-heading" className={`${sectionTitle} text-center`}>
            What clients say
          </h2>
          <p className={`${bodyLead} mt-4 text-center`}>
            Feedback from businesses and professionals who work with our team every day.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <HomeCtaBand />
    </>
  );
}
