import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { HOME_FEATURED } from "../../data/homeContent";
import { btnOnDark, cardElevated, sectionSurface, sectionTitle, bodyLead } from "../../lib/ui";

export default function FeaturedProductGrid() {
  return (
    <section className={sectionSurface} aria-labelledby="featured-heading">
      <motion.div
        className="mx-auto max-w-7xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="featured-heading" className={sectionTitle}>
          Featured products
        </h2>
        <p className={`${bodyLead} mt-4`}>
          Hardware and solutions we supply every day — hover to preview, tap to explore.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURED.map((item, i) => (
            <motion.article
              key={item.title}
              className={`${cardElevated} group border-0 bg-blue-950 p-2 shadow-xl shadow-blue-950/20`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-44 overflow-hidden rounded-lg sm:h-48">
                <motion.img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-blue-950/20 transition-colors group-hover:bg-blue-950/10" />
              </div>
              <motion.div className="flex flex-grow flex-col p-4 text-center">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-200">{item.body}</p>
                <NavLink to={item.href} className={`${btnOnDark} mx-auto mt-5 text-sm`}>
                  View details
                </NavLink>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
