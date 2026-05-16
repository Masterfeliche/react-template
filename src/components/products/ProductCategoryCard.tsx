import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import type { ProductCategory } from "../../data/productsContent";
import { buildWhatsAppCategoryUrl } from "../../data/productsContent";
import { btnOnDark } from "../../lib/ui";
import { cn } from "@/lib/utils";

type Props = {
  category: ProductCategory;
  index: number;
};

export default function ProductCategoryCard({ category: c, index }: Props) {
  const waHref = buildWhatsAppCategoryUrl(c.title);

  return (
    <motion.article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg shadow-blue-950/5",
        "dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30"
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-56 overflow-hidden sm:h-60">
        <motion.img
          src={c.image}
          alt={c.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent"
          aria-hidden
        />
        {"badge" in c && c.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-2.5 py-1 text-xs font-bold text-blue-950">
            {c.badge}
          </span>
        )}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-xl font-bold text-blue-950 dark:text-slate-50">{c.title}</h3>
        <p className="mt-3 flex-grow leading-relaxed text-gray-800 dark:text-slate-200">{c.body}</p>
        <ul className="mt-4 space-y-1.5">
          {c.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm text-gray-700 dark:text-slate-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <NavLink to="/contact" className={`${btnOnDark} text-sm`}>
              Request quote
            </NavLink>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-5 text-sm font-semibold text-blue-950 transition-colors hover:bg-[#25D366]/20 dark:text-[#25D366]"
            >
              WhatsApp
            </a>
          </div>
          <motion.div className="flex flex-wrap gap-3 text-sm">
            <NavLink
              to={c.galleryHref}
              className="font-semibold text-blue-950 underline decoration-yellow-500 underline-offset-4 dark:text-yellow-400"
            >
              View in gallery
            </NavLink>
            <NavLink
              to={c.serviceHref}
              className="font-semibold text-gray-600 underline underline-offset-4 hover:text-blue-950 dark:text-slate-400 dark:hover:text-yellow-400"
            >
              Related service
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
