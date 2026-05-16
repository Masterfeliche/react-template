import { useCallback, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  GALLERY_FILTERS,
  GALLERY_PRODUCTS,
  filterGalleryProducts,
  type GalleryCategoryId,
} from "../../data/productGallery";
import { bodyLead, sectionPadding, sectionTitle } from "@/lib/ui";
import { cn } from "@/lib/utils";
import GalleryFilterBar from "./GalleryFilterBar";
import ProductGalleryCard from "./ProductGalleryCard";

const VALID_FILTERS = new Set(GALLERY_FILTERS.map((f) => f.id));

function parseFilterParam(value: string | null): GalleryCategoryId {
  if (value && VALID_FILTERS.has(value as GalleryCategoryId)) {
    return value as GalleryCategoryId;
  }
  return "all";
}

type ProductGallerySectionProps = {
  id?: string;
  className?: string;
  hideHeader?: boolean;
};

export default function ProductGallerySection({
  id,
  className,
  hideHeader = false,
}: ProductGallerySectionProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramFilter = parseFilterParam(searchParams.get("category"));
  const [filter, setFilterState] = useState<GalleryCategoryId>(paramFilter);

  useEffect(() => {
    setFilterState(paramFilter);
  }, [paramFilter]);

  const setFilter = useCallback(
    (next: GalleryCategoryId) => {
      setFilterState(next);
      if (next === "all") {
        setSearchParams({}, { replace: true });
      } else {
        setSearchParams({ category: next }, { replace: true });
      }
    },
    [setSearchParams]
  );

  const visible = useMemo(
    () => filterGalleryProducts(GALLERY_PRODUCTS, filter),
    [filter]
  );

  const activeLabel = GALLERY_FILTERS.find((f) => f.id === filter)?.label ?? "All";

  return (
    <section
      id={id}
      className={cn(
        sectionPadding,
        "scroll-mt-28 border-t border-gray-200/80 bg-gradient-to-b from-slate-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950",
        className
      )}
      aria-labelledby={hideHeader ? undefined : "product-gallery-heading"}
      aria-label={hideHeader ? "Product gallery" : undefined}
    >
      <div className="mx-auto max-w-7xl">
        {!hideHeader && (
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="product-gallery-heading" className={sectionTitle}>
              Our product gallery
            </h2>
            <p className={`${bodyLead} mt-4`}>
              Explore hardware we supply and support — filter by category, then reach out for stock
              and pricing.
            </p>
          </motion.div>
        )}

        <GalleryFilterBar
          className={hideHeader ? "mt-0 sm:mt-2" : "mt-10"}
          filters={GALLERY_FILTERS}
          active={filter}
          onChange={setFilter}
        />

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center"
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="rounded-full bg-blue-950/5 px-4 py-1.5 text-sm font-medium text-blue-950 dark:bg-white/5 dark:text-slate-200">
            Showing{" "}
            <span className="font-bold text-blue-950 dark:text-yellow-400">{visible.length}</span>{" "}
            {visible.length === 1 ? "product" : "products"}
            {filter !== "all" && (
              <>
                {" "}
                in <span className="font-semibold">{activeLabel}</span>
              </>
            )}
          </p>
        </motion.div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} products in {activeLabel}
        </p>

        {visible.length === 0 ? (
          <motion.div
            className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-slate-600 dark:bg-slate-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg font-semibold text-blue-950 dark:text-slate-100">
              No products in this category yet
            </p>
            <p className="mt-2 text-gray-600 dark:text-slate-300">
              Try another filter or contact us — we often have more stock than shown here.
            </p>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="mt-6 text-sm font-semibold text-blue-950 underline decoration-yellow-500 underline-offset-4 dark:text-yellow-400"
            >
              Show all products
            </button>
          </motion.div>
        ) : (
          <motion.ul
            layout
            className="mt-10 grid list-none gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((product, index) => (
                <motion.li
                  key={product.id}
                  layout
                  className="list-none"
                >
                  <ProductGalleryCard product={product} index={index} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </section>
  );
}
