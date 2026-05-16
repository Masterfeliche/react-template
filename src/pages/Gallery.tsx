import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import ProductGallerySection from "../components/gallery/ProductGallerySection";
import HomeCtaBand from "../components/home/HomeCtaBand";
import { photos } from "../lib/assetPaths";
import { GALLERY_PRODUCTS } from "../data/productGallery";
import { btnPrimary, bodyLead } from "../lib/ui";

export default function Gallery() {
  return (
    <>
      <section
        className="relative flex min-h-[min(100dvh,38rem)] items-center justify-center overflow-hidden px-6 py-20 sm:px-8"
        aria-labelledby="gallery-page-heading"
      >
        <motion.div
          className="absolute inset-0 z-0 bg-blue-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${photos.galleryHero})` }}
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
            Real stock · Local support
          </p>
          <h1
            id="gallery-page-heading"
            className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Product gallery
          </h1>
          <p className={`${bodyLead} mt-6 !max-w-2xl !text-gray-100`}>
            Browse laptops, EFD machines, printers, and accessories — filter by category, then
            request a quote or message us on WhatsApp for availability and pricing.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#gallery-grid"
              className={`${btnPrimary} cursor-target inline-flex min-h-12 items-center justify-center`}
            >
              Browse products
            </a>
            <NavLink
              to="/products"
              className="cursor-target inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/80 px-8 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              View all products
            </NavLink>
          </div>
        </motion.div>
      </section>

      {/* Quick stats */}
      <section
        className="border-b border-blue-950/10 bg-white dark:border-slate-800 dark:bg-slate-950"
        aria-label="Gallery overview"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-8 sm:gap-10 sm:px-8">
          <motion.p
            className="text-center text-sm font-medium text-gray-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-2xl font-bold text-blue-950 dark:text-yellow-400">
              {GALLERY_PRODUCTS.length}
            </span>{" "}
            items showcased
          </motion.p>
          <motion.p
            className="text-center text-sm text-gray-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Tap a category below to filter
          </motion.p>
        </div>
      </section>

      <ProductGallerySection hideHeader className="!border-t-0" id="gallery-grid" />

      <HomeCtaBand />
    </>
  );
}
