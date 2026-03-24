import { Link } from "react-router-dom";
import { bodyLead, btnPrimary, sectionSurface, sectionTitle } from "../lib/ui";

export default function NotFound() {
  return (
    <div className={sectionSurface}>
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-950 dark:text-slate-300">
          404
        </p>
        <h1 className={`${sectionTitle} mt-2`}>Page not found</h1>
        <p className={`${bodyLead} mt-6`}>
          That link may be outdated or the page was moved. Use the menu above or return to our home
          page.
        </p>
        <Link to="/" className={`${btnPrimary} mt-10 inline-flex`}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
