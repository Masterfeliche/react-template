import { NavLink } from "react-router-dom";
import type { GalleryProduct } from "../../data/productGallery";
import { buildWhatsAppProductUrl } from "../../data/productGallery";
import { btnSolidBlue } from "@/lib/ui";
import { cn } from "@/lib/utils";

type ProductGalleryCardProps = {
  product: GalleryProduct;
  className?: string;
};

export default function ProductGalleryCard({ product, className }: ProductGalleryCardProps) {
  const waHref = buildWhatsAppProductUrl(product.name);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md shadow-blue-950/[0.04] transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-blue-950/10 hover:shadow-xl hover:shadow-blue-950/10",
        "dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30 dark:hover:border-slate-500",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-800">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-yellow-400">
          {product.categoryLabel}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-blue-950 dark:text-slate-50 sm:text-xl">
          {product.name}
        </h3>
        <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-800 dark:text-slate-200 sm:text-[0.9375rem]">
          {product.description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <NavLink
            to="/contact"
            className={cn(
              btnSolidBlue,
              "min-h-11 min-w-0 flex-1 px-5 text-center text-sm sm:flex-initial"
            )}
          >
            Request quote
          </NavLink>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "cursor-target inline-flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-blue-950 bg-transparent px-5 text-sm font-semibold text-blue-950",
              "transition-colors duration-200 hover:bg-blue-950 hover:text-white",
              "dark:border-slate-300 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-blue-950",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 dark:focus-visible:outline-slate-300 sm:flex-initial"
            )}
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
