import { SERVICE_JUMP } from "../../data/servicesContent";

export default function ServiceJumpNav() {
  return (
    <nav
      className="sticky top-20 z-30 -mx-6 border-b border-gray-200/80 bg-white/90 px-6 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 sm:-mx-8 sm:px-8"
      aria-label="On this page"
    >
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-slate-400">
        Jump to service
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {SERVICE_JUMP.map((j) => (
          <a
            key={j.id}
            href={`#${j.id}`}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-blue-950/15 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-blue-950 transition-colors hover:border-yellow-400 hover:bg-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-yellow-500/60 dark:hover:bg-slate-700 sm:px-4 sm:text-sm"
          >
            {j.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
