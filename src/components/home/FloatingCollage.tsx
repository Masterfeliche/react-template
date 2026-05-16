import { motion } from "motion/react";
import { HERO_FLOATING_IMAGES } from "../../data/homeContent";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function FloatingCollage() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg"
      initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-hidden
    >
      <motion.div
        className="absolute inset-4 rounded-full bg-yellow-400/20 blur-3xl"
        animate={reducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {HERO_FLOATING_IMAGES.map((item, index) => (
        <motion.figure
          key={item.src}
          className={`absolute overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-sm ${item.className}`}
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={
            reducedMotion
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  y: [0, -10, 0],
                  rotate: index % 2 === 0 ? [-2, 2, -2] : [2, -2, 2],
                }
          }
          transition={
            reducedMotion
              ? { duration: 0.4, delay: item.delay }
              : {
                  opacity: { duration: 0.5, delay: item.delay },
                  y: { duration: 4.5 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                  rotate: { duration: 6 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                }
          }
        >
          <img
            src={item.src}
            alt=""
            className="h-full w-full object-cover"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        </motion.figure>
      ))}
    </motion.div>
  );
}
