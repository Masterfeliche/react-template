import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_PRODUCTS, buildWhatsAppProductUrl } from "../../data/productGallery";
import { btnOnDark, btnSolidBlue, sectionSurfaceMuted, sectionTitle, bodyLead } from "../../lib/ui";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const SLIDES = GALLERY_PRODUCTS.slice(0, 8);

export default function ProductCarousel() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    timerRef.current = setInterval(() => go(1), 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, paused, go]);

  const product = SLIDES[index];
  const waHref = buildWhatsAppProductUrl(product.name);

  return (
    <section className={sectionSurfaceMuted} aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="showcase-heading" className={`${sectionTitle} text-center`}>
          Featured showcase
        </h2>
        <p className={`${bodyLead} mt-4 text-center`}>
          Tap through real categories we sell and support — laptops, EFD, printers, and more.
        </p>

        <div
          className="relative mt-12 overflow-hidden rounded-3xl bg-blue-950 shadow-2xl shadow-blue-950/30"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              className="grid md:grid-cols-2"
              initial={reducedMotion ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="relative min-h-[16rem] overflow-hidden md:min-h-[22rem]">
                <motion.img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={reducedMotion ? false : { scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 to-transparent md:bg-gradient-to-t md:from-blue-950/60" />
                <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-blue-950">
                  {product.categoryLabel}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">{product.name}</h3>
                <p className="mt-4 leading-relaxed text-gray-200">{product.description}</p>
                <motion.div
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                >
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnOnDark} inline-flex`}
                  >
                    Ask on WhatsApp
                  </a>
                  <NavLink to="/gallery" className={`${btnSolidBlue} inline-flex !bg-white !text-blue-950 hover:!bg-gray-100`}>
                    Open gallery
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6">
            <div className="flex gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-yellow-400" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Show ${s.name}`}
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="rounded-full border border-white/30 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
                aria-label="Previous product"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="rounded-full border border-white/30 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
                aria-label="Next product"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <NavLink to="/products" className={btnSolidBlue}>
            View all products
          </NavLink>
          <NavLink
            to="/gallery"
            className="cursor-target font-semibold text-blue-950 underline decoration-yellow-500 underline-offset-4 dark:text-yellow-400"
          >
            Browse the full gallery
          </NavLink>
        </div>
      </div>
    </section>
  );
}
