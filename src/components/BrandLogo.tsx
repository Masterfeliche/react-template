import { NavLink } from "react-router-dom";

type BrandLogoProps = {
  /** When true, only the mark (for tight mobile headers) */
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <NavLink
      to="/"
      className={`group flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 ${className}`}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-xs font-extrabold tracking-tight text-blue-950 shadow-sm ring-1 ring-white/10"
        aria-hidden
      >
        ET
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight text-white">EUNICA</span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Technologies
          </span>
        </span>
      )}
    </NavLink>
  );
}
