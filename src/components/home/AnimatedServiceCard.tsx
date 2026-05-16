import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { btnSolidBlue, cardElevated, textHeading } from "../../lib/ui";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
  index: number;
};

export default function AnimatedServiceCard({
  title,
  body,
  image,
  imageAlt,
  href,
  index,
}: Props) {
  return (
    <motion.article
      className={cn(cardElevated, "group overflow-hidden")}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        <motion.img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        <span className="absolute bottom-3 left-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-950">
          Service
        </span>
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className={cn("text-lg", textHeading)}>{title}</h3>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-800 dark:text-slate-200">
          {body}
        </p>
        <NavLink to={href} className={`${btnSolidBlue} mt-5 self-start text-sm`}>
          Learn more
        </NavLink>
      </div>
    </motion.article>
  );
}
