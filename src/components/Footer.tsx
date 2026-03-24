import { NavLink } from "react-router-dom";

const footerFocus =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400";

const footerLinkClass = `${footerFocus} hover:text-yellow-400 hover:underline`;

const footerIconLinkClass = `${footerFocus} hover:text-yellow-400`;

const SOCIAL = {
  instagram: "https://www.instagram.com/eunica_graphics/",
  tiktok: "https://www.tiktok.com/@eunicatech",
} as const;

const FooterBar = () => {
  return (
    <footer className="bg-blue-950 px-6 py-14 text-gray-300 dark:bg-slate-950 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Quick links</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" className={footerLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={footerLinkClass}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={footerLinkClass}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={footerLinkClass}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={footerLinkClass}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={footerLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Our services</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/services#computers" className={footerLinkClass}>
                  Computer &amp; accessories sales
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#efd" className={footerLinkClass}>
                  EFD / VEFD machines
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#web" className={footerLinkClass}>
                  Website &amp; software
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#cctv" className={footerLinkClass}>
                  CCTV installation
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#support" className={footerLinkClass}>
                  ICT support
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#printing" className={footerLinkClass}>
                  Graphics &amp; printing
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Contact us</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+255714880379"
                  className={`flex items-center gap-2 ${footerLinkClass}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>0714 880 379</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eunicatech.co.tz"
                  className={`flex items-center gap-2 break-all ${footerLinkClass}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>info@eunicatech.co.tz</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>Kariakoo · Mwananyamala · Komakoma</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Follow us</h2>
            <div className="flex gap-5">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eunica on Instagram"
                className={footerIconLinkClass}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eunica on TikTok"
                className={footerIconLinkClass}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-300">
              @eunica_graphics · @eunicatech
            </p>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="text-center text-base font-bold text-white sm:text-left">
            <span className="text-yellow-400">EUNICA</span> TECHNOLOGIES
          </p>
          <p className="text-center text-gray-300 sm:text-right">
            &copy; {new Date().getFullYear()} Eunica Technologies (T) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
