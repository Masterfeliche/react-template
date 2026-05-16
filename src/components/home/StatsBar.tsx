import { motion } from "motion/react";
import { HOME_STATS } from "../../data/homeContent";

export default function StatsBar() {
  return (
    <section
      className="border-b border-blue-950/10 bg-white dark:border-slate-800 dark:bg-slate-950"
      aria-label="Company highlights"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4 sm:px-8">
        {HOME_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <p className="text-3xl font-bold text-blue-950 dark:text-yellow-400 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 dark:text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
