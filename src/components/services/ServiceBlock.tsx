import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import type { Service } from "../../data/servicesContent";
import { buildWhatsAppServiceUrl } from "../../data/servicesContent";
import { btnOnDark, btnSolidBlue } from "../../lib/ui";
import { cn } from "@/lib/utils";

type Props = {
  service: Service;
  index: number;
};

export default function ServiceBlock({ service: s, index }: Props) {
  const reversed = index % 2 === 1;
  const waHref = buildWhatsAppServiceUrl(s.title);
  const isContactPrimary = s.primaryCta.to === "/contact";

  return (
    <motion.section
      id={s.id}
      className="scroll-mt-32 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg shadow-blue-950/5 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <motion.div
        className={cn(
          "grid gap-0 md:grid-cols-2 md:items-stretch",
          reversed && "md:[direction:rtl]"
        )}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
      >
        <div
          className={cn(
            "relative min-h-[15rem] overflow-hidden md:min-h-[20rem]",
            reversed && "md:[direction:ltr]"
          )}
        >
          <motion.img
            src={s.image}
            alt={s.imageAlt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              reversed
                ? "rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none"
                : "rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            )}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.45 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent md:bg-gradient-to-r md:from-blue-950/40"
            aria-hidden
          />
          {"badge" in s && s.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-950">
              {s.badge}
            </span>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col justify-center p-6 sm:p-8 md:[direction:ltr]",
            reversed && "md:[direction:ltr]"
          )}
        >
          <h2 className="text-2xl font-bold text-blue-950 dark:text-slate-50 sm:text-3xl">
            {s.title}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-800 dark:text-slate-200">{s.body}</p>
          <ul className="mt-5 space-y-2">
            {s.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-sm leading-relaxed text-gray-700 dark:text-slate-300 sm:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <NavLink
              to={
                isContactPrimary
                  ? `/contact?service=${s.id}`
                  : s.primaryCta.to
              }
              className={isContactPrimary ? btnOnDark : btnSolidBlue}
            >
              {s.primaryCta.label}
            </NavLink>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-6 text-sm font-semibold text-blue-950 transition-colors hover:bg-[#25D366]/20 dark:border-[#25D366] dark:text-[#25D366] dark:hover:bg-[#25D366]/15"
            >
              Ask on WhatsApp
            </a>
            {"secondaryCta" in s && s.secondaryCta && (
              <NavLink
                to={s.secondaryCta.to}
                className="cursor-target text-sm font-semibold text-blue-950 underline decoration-yellow-500 underline-offset-4 dark:text-yellow-400"
              >
                {s.secondaryCta.label}
              </NavLink>
            )}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
