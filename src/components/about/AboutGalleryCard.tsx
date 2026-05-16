import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { btnOnDark, cardElevated, textHeading } from "../../lib/ui";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
  index: number;
};

export default function AboutGalleryCard({
  title,
  body,
  image,
  imageAlt,
  href,
  index,
}: Props) {
  return (
    <motion.article
      className={cn(cardElevated, "group")}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
    >
      <motion.div className="relative h-52 overflow-hidden">
        <motion.img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.45 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className={cn("text-lg", textHeading)}>{title}</h3>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-800 dark:text-slate-200">
          {body}
        </p>
        <NavLink to={href} className={`${btnOnDark} mt-6 self-start text-sm`}>
          Learn more
        </NavLink>
      </div>
    </motion.article>
  );
}
