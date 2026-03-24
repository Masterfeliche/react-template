import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * After client navigation (including lazy-loaded routes), scroll to the element
 * matching `location.hash` so footer links like `/services#efd` land correctly.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    let cancelled = false;
    let frame = 0;
    let attempts = 0;
    const maxAttempts = 48;

    const step = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return null;
}
