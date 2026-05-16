import { MARQUEE_IMAGES } from "../../data/homeContent";
import "./home.css";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <div
      className={`home-marquee-track py-2 ${reverse ? "home-marquee-track--reverse" : ""}`}
    >
      {items.map((item, i) => (
        <figure
          key={`${item.src}-${i}`}
          className="group relative h-36 w-52 shrink-0 overflow-hidden rounded-xl border border-blue-950/10 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:h-40 sm:w-60"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/90 to-transparent px-3 py-2 text-xs font-semibold text-white sm:text-sm">
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ImageMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-blue-950/10 bg-gray-50 py-8 dark:border-slate-800 dark:bg-slate-900 sm:py-10"
      aria-label="Products we supply"
    >
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-blue-950 dark:text-yellow-400">
        In stock &amp; ready to quote
      </p>
      <div className="space-y-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
