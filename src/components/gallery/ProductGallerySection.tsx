import { useMemo, useState } from "react";
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

type ProductGallerySectionProps = {
  id?: string;
  className?: string;
  /** Omit page title and intro when the parent page provides its own hero (e.g. /Gallery). */
  hideHeader?: boolean;
};

export default function ProductGallerySection({
  id,
  className,
  hideHeader = false,
}: ProductGallerySectionProps) {
  const [filter, setFilter] = useState<GalleryCategoryId>("all");

  const visible = useMemo(
    () => filterGalleryProducts(GALLERY_PRODUCTS, filter),
    [filter]
  );

  return (
    <section
      id={id}
      className={cn(
        sectionPadding,
        "border-t border-gray-200/80 bg-gradient-to-b from-slate-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950",
        className
      )}
      aria-labelledby={hideHeader ? undefined : "product-gallery-heading"}
      aria-label={hideHeader ? "Product gallery" : undefined}
    >
      <div className="mx-auto max-w-7xl">
        {!hideHeader && (
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="product-gallery-heading" className={sectionTitle}>
              Our product gallery
            </h2>
            <p className={`${bodyLead} mt-4`}>
              Explore a sample of the hardware we supply and support — from fiscal compliance devices
              to laptops, printers, and everyday accessories. Use the filters to focus on what you
              need, then reach out for stock, specs, and pricing.
            </p>
          </div>
        )}

        <GalleryFilterBar
          className={hideHeader ? "mt-0 sm:mt-2" : "mt-10"}
          filters={GALLERY_FILTERS}
          active={filter}
          onChange={setFilter}
        />

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} product{visible.length === 1 ? "" : "s"}
          {filter === "all" ? "" : ` in ${GALLERY_FILTERS.find((f) => f.id === filter)?.label ?? ""}`}
        </p>

        <ul className="mt-10 grid list-none gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visible.map((product) => (
            <li key={product.id}>
              <ProductGalleryCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
