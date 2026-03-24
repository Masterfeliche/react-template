import { cn } from "@/lib/utils";

export const btnPrimary = cn(
  "cursor-target inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-400 px-8 font-semibold text-blue-950",
  "transition-colors hover:bg-yellow-300",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
);

export const btnSecondary = cn(
  "cursor-target inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 font-semibold text-blue-950",
  "transition-colors hover:bg-gray-100",
  "dark:border dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:focus-visible:outline-slate-400"
);

export const btnOnDark = cn(
  "cursor-target inline-flex min-h-10 min-w-[10rem] items-center justify-center rounded-full bg-yellow-400 px-6 text-sm font-semibold text-blue-950",
  "transition-colors hover:bg-yellow-300",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
);

export const btnSolidBlue = cn(
  "cursor-target inline-flex min-h-10 min-w-[10rem] items-center justify-center rounded-full bg-blue-950 px-6 text-sm font-semibold text-white",
  "transition-colors hover:bg-blue-900",
  "dark:bg-blue-800 dark:hover:bg-blue-700",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 dark:focus-visible:outline-blue-700"
);

export const cardElevated = cn(
  "flex flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-lg shadow-blue-950/5",
  "dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/40"
);

export const sectionPadding = "px-6 py-14 sm:px-8 md:py-20";

/** White / near-black page band */
export const sectionSurface = cn(sectionPadding, "bg-white dark:bg-slate-950");

/** Light gray / slate band */
export const sectionSurfaceMuted = cn(sectionPadding, "bg-gray-100 dark:bg-slate-900");

export const sectionTitle = cn(
  "text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl md:text-4xl",
  "dark:text-slate-50"
);

export const bodyLead = cn(
  "mx-auto max-w-3xl text-base leading-relaxed text-gray-800 sm:text-lg",
  "dark:text-slate-200"
);

/** Card and list headings on light/dark surfaces */
export const textHeading = cn("font-semibold text-blue-950 dark:text-slate-100");
