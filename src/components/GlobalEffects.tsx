import TargetCursor from "./TargetCursor";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Single app-wide cursor effect. Skipped on touch devices (handled inside TargetCursor)
 * and when the user prefers reduced motion.
 */
export default function GlobalEffects() {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;
  return (
    <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn hoverDuration={0.2} />
  );
}
