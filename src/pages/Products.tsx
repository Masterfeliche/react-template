import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import ProductCategoryCard from "../components/products/ProductCategoryCard";
import HomeCtaBand from "../components/home/HomeCtaBand";
import { photos } from "../lib/assetPaths";
import { PRODUCT_CATEGORIES, PRODUCT_TRUST } from "../data/productsContent";
import { GALLERY_PRODUCTS } from "../data/productGallery";
import {
  bodyLead,
  btnPrimary,
  btnSolidBlue,
  sectionSurface,
  sectionSurfaceMuted,
  sectionTitle,
} from "../lib/ui";

export default function Products() {
  return (
    <>
      <section
        className="relative flex min-h-[min(100dvh,40rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-8"
        aria-labelledby="products-hero-heading"
      >
        <motion.div
          className="absolute inset-0 z-0 bg-blue-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.productsHero})` }}
          aria-hidden
          initial={{ scale: 1.08 }}
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
            Hardware &amp; materials
          </p>
          <h1
            id="products-hero-heading"
            className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Products
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-100 md:text-xl">
            Reliable hardware and branded materials — sourced and supported by a team that
            understands Tanzanian business needs.
          </p>
          <motion.div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#product-categories"
              className={`${btnPrimary} cursor-target inline-flex min-h-12 items-center justify-center`}
            >
              Browse categories
            </a>
            <NavLink
              to="/gallery"
              className="cursor-target inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/80 px-8 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              Photo gallery
            </NavLink>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust strip */}
      <section
        className="border-b border-blue-950/10 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Why buy from Eunica"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3 sm:px-8 md:py-14">
          {PRODUCT_TRUST.map((item, i) => (
            <motion.div
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20 text-lg font-bold text-yellow-500">
                {i + 1}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-blue-950 dark:text-slate-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-300">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div
        className={sectionSurface}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={sectionTitle}>Quality you can trust</h2>
          <p className={`${bodyLead} mt-4`}>
            We focus on dependable equipment and clear warranties. Need something specific? Ask —
            we work with a wide supplier network and honest recommendations.
          </p>
        </div>
      </motion.div>

      <section
        id="product-categories"
        className={`${sectionSurfaceMuted} scroll-mt-28`}
        aria-labelledby="categories-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="categories-heading" className={sectionTitle}>
              Product categories
            </h2>
            <p className={`${bodyLead} mt-4`}>
              Six lines we supply every week — request availability, specs, or bulk pricing.
            </p>
            <p className="mt-3 text-sm font-medium text-blue-950 dark:text-yellow-400">
              {GALLERY_PRODUCTS.length}+ items in our live gallery
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <ProductCategoryCard key={c.id} category={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery promo */}
      <section className="relative overflow-hidden bg-blue-950 px-6 py-16 sm:px-8 md:py-20">
        <motion.div
          className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h2
            className={`${sectionTitle} text-white`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            See real product photos
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Browse laptops, EFD machines, printers, and accessories with filters — then message us
            on WhatsApp for stock and pricing.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <NavLink to="/gallery" className={btnPrimary}>
              Open product gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={`${btnSolidBlue} !border-2 !border-white/30 !bg-transparent !text-white hover:!bg-white/10`}
            >
              Contact sales
            </NavLink>
          </motion.div>
        </div>
      </section>

      <HomeCtaBand />
    </>
  );
}
