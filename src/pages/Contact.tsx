import { motion } from "motion/react";
import ContactQuickActions from "../components/contact/ContactQuickActions";
import ContactForm from "../components/contact/ContactForm";
import { photos } from "../lib/assetPaths";
import { CONTACT_LOCATIONS, SOCIAL } from "../data/contactContent";
import { bodyLead, sectionSurface, sectionSurfaceMuted, sectionTitle } from "../lib/ui";

export default function Contact() {
  return (
    <>
      <section
        className="relative flex min-h-[min(100dvh,38rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-8"
        aria-labelledby="contact-hero-heading"
      >
        <motion.div
          className="absolute inset-0 z-0 bg-blue-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.contactHero})` }}
          aria-hidden
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 z-[1] bg-blue-950/88 sm:bg-blue-950/78"
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
            We&apos;re here to help
          </p>
          <h1
            id="contact-hero-heading"
            className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Get in <span className="text-yellow-400">touch</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-100 md:text-xl">
            Quotes, technical questions, or after-sales support — WhatsApp, call, email, or the form
            below.
          </p>
          <motion.a
            href="#contact-form"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-400 px-8 font-semibold text-blue-950 transition-colors hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Send a message
          </motion.a>
        </motion.div>
      </section>

      {/* Quick contact */}
      <section
        className="border-b border-blue-950/10 bg-white px-6 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-8 md:py-14"
        aria-label="Quick contact options"
      >
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={`${sectionTitle} text-center text-2xl sm:text-3xl`}>
            Reach us your way
          </h2>
          <p className={`${bodyLead} mt-3 text-center`}>
            Most clients message on WhatsApp for the fastest reply during business hours.
          </p>
          <div className="mt-10">
            <ContactQuickActions />
          </div>
        </motion.div>
      </section>

      {/* Form + info */}
      <div
        className={`${sectionSurface} mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 sm:gap-14 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20`}
      >
        <motion.div
          className="min-w-0 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div>
            <h2 className="text-2xl font-bold text-blue-950 dark:text-slate-50 sm:text-3xl">
              Contact information
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-slate-200">
              Visit any of our Dar es Salaam branches or reach out remotely — we serve businesses
              across Tanzania.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-1">
            {CONTACT_LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.name}
                className="rounded-xl border border-gray-200/80 bg-gray-50 p-5 dark:border-slate-700 dark:bg-slate-900/50"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ borderColor: "rgba(250, 204, 21, 0.5)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-blue-950">
                    {loc.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-semibold text-blue-950 dark:text-slate-100">{loc.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                      {loc.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-950 dark:text-slate-200">Follow us</h3>
            <ul className="mt-3 space-y-2 text-gray-800 dark:text-slate-200">
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-medium hover:text-blue-950 hover:underline dark:hover:text-yellow-400"
                >
                  Instagram — @eunica_graphics
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-medium hover:text-blue-950 hover:underline dark:hover:text-yellow-400"
                >
                  TikTok — @eunicatech
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <ContactForm />
      </div>

      {/* Hours / response expectation */}
      <section className={sectionSurfaceMuted} aria-labelledby="response-heading">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="response-heading" className={sectionTitle}>
            What happens next?
          </h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            {[
              { step: "1", title: "You reach out", body: "WhatsApp, call, or email with your needs." },
              { step: "2", title: "We advise", body: "Clear options, specs, and pricing — no pressure." },
              { step: "3", title: "We deliver", body: "Supply, install, or support based on your project." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="rounded-xl border border-blue-950/10 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-xl font-bold text-yellow-500">{item.step}</span>
                <h3 className="mt-2 font-semibold text-blue-950 dark:text-slate-50">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-slate-300">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
