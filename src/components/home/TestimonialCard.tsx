import { motion } from "motion/react";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  context: string;
  initials: string;
  avatarSrc: string;
  avatarAlt: string;
};

type Props = {
  testimonial: Testimonial;
  index: number;
};

export default function TestimonialCard({ testimonial: t, index }: Props) {
  return (
    <motion.figure
      className="flex h-full flex-col rounded-2xl border border-blue-950/10 bg-blue-950 p-6 shadow-xl sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.35)" }}
    >
      <blockquote className="flex-grow">
        <p className="text-base italic leading-relaxed text-white sm:text-lg">
          &ldquo;{t.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
        <motion.div
          className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-yellow-400 ring-2 ring-yellow-400/30"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={t.avatarSrc}
            alt={t.avatarAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <span
            className="absolute inset-0 flex items-center justify-center bg-blue-950/40 text-xs font-bold text-white opacity-0"
            aria-hidden
          >
            {t.initials}
          </span>
        </motion.div>
        <div className="min-w-0 text-left">
          <span className="block text-base font-semibold text-yellow-400">{t.name}</span>
          <span className="mt-0.5 block text-sm text-gray-200">{t.context}</span>
        </div>
      </figcaption>
    </motion.figure>
  );
}
