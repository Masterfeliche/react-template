import { Outlet, useLocation } from "react-router-dom";
import RouteErrorBoundary from "./components/RouteErrorBoundary";
import NavBar from "./components/Navbar";
import FooterBar from "./components/Footer";
import GlobalEffects from "./components/GlobalEffects";
import DocumentHead from "./components/DocumentHead";
import ScrollToHash from "./components/ScrollToHash";

/**
 * Root layout: shared chrome + outlet for matched child routes.
 * `RouteErrorBoundary` resets when `pathname` changes so a bad page does not stick forever.
 */
export function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-slate-950">
      <DocumentHead />
      <ScrollToHash />
      <GlobalEffects />
      <NavBar />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-0 min-h-0 w-full flex-1 pt-20 outline-none"
      >
        <RouteErrorBoundary pathname={pathname}>
          <Outlet />
        </RouteErrorBoundary>
      </main>
      <FooterBar />
    </div>
  );
}
