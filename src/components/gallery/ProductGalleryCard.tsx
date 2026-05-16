import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import type { GalleryProduct } from "../../data/productGallery";
import { buildWhatsAppProductUrl } from "../../data/productGallery";
import { btnSolidBlue } from "@/lib/ui";
import { cn } from "@/lib/utils";

type ProductGalleryCardProps = {
  product: GalleryProduct;
  className?: string;
  index?: number;
};

export default function ProductGalleryCard({
  product,
  className,
  index = 0,
}: ProductGalleryCardProps) {
  const waHref = buildWhatsAppProductUrl(product.name);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md shadow-blue-950/[0.04]",
        "dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30",
        className
      )}
    >
      <motion.div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-800">
        <motion.img
          src={product.imageSrc}
          alt={product.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/60 via-blue-950/10 to-transparent"
          aria-hidden
        />
        <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-2.5 py-1 text-xs font-bold text-blue-950">
          {product.categoryLabel}
        </span>
      </motion.div>
      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-blue-950 dark:text-slate-50 sm:text-xl">
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
              "cursor-target inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-5 text-sm font-semibold text-blue-950",
              "transition-colors hover:bg-[#25D366]/25",
              "dark:text-[#25D366] dark:hover:bg-[#25D366]/20",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:flex-initial"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
