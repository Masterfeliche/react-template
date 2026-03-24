import { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `cursor-target rounded-md px-1 py-0.5 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 ${
    isActive ? "text-yellow-400" : "text-gray-200 hover:text-yellow-400"
  }`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-24 focus:z-[100] focus:rounded-md focus:bg-yellow-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-blue-950 focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-950"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 z-50 flex h-20 w-full items-center gap-3 bg-blue-950 px-4 shadow-md shadow-black/20 sm:gap-4 sm:px-6 md:px-8">
        <BrandLogo />

        <nav
          className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 lg:gap-x-5 md:flex"
          aria-label="Main"
        >
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2 md:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex rounded-md p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
              aria-hidden
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-20 z-40 flex flex-col border-t border-blue-900 bg-blue-950 shadow-lg md:hidden"
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className="px-4 py-4 text-white hover:bg-blue-900 focus-visible:bg-blue-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="px-4 py-4 text-white hover:bg-blue-900 focus-visible:bg-blue-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className="px-4 py-4 text-white hover:bg-blue-900 focus-visible:bg-blue-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400"
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            onClick={closeMenu}
            className="px-4 py-4 text-white hover:bg-blue-900 focus-visible:bg-blue-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400"
          >
            Products
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className="px-4 py-4 text-white hover:bg-blue-900 focus-visible:bg-blue-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="px-4 py-4 text-white hover:bg-blue-900 focus-visible:bg-blue-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400"
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
}

export default NavBar;
