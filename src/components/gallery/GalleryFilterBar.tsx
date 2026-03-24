import type { GalleryCategoryId } from "../../data/productGallery";
import { cn } from "@/lib/utils";

type GalleryFilterBarProps = {
  filters: { id: GalleryCategoryId; label: string }[];
  active: GalleryCategoryId;
  onChange: (id: GalleryCategoryId) => void;
  className?: string;
};

export default function GalleryFilterBar({
  filters,
  active,
  onChange,
  className,
}: GalleryFilterBarProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2 sm:gap-3",
        className
      )}
      role="radiogroup"
      aria-label="Filter products by category"
    >
      {filters.map((f) => {
        const isActive = active === f.id;
        return (
          <button
            key={f.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            id={`gallery-filter-${f.id}`}
            onClick={() => onChange(f.id)}
            className={cn(
              "cursor-target inline-flex min-h-11 min-w-[2.75rem] items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 sm:px-5",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400",
              isActive
                ? "border-yellow-400 bg-blue-950 text-white shadow-md shadow-blue-950/15"
                : "border-gray-200 bg-white text-blue-950 hover:border-yellow-400/60 hover:bg-yellow-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-yellow-500/50 dark:hover:bg-slate-700/80"
            )}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
