import { useState } from "react";
import { NavLink } from "react-router-dom";
import TargetCursor from "../components/TargetCursor";
// Removed: import { BsMenuButtonWideFill } from 'react-icons/bs';

function NavBar() {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);

    if (!isOpen) {
      console.log("Menu open");
    } else {
      console.log("Menu closed");
    }
  };

  return (
    <>

      {/* the target cursor import */}
      <div>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
      </div>
      {/* --- Main Navbar Container ---
              - Changed bg-orange-600 to bg-blue-950 to match your site's theme.
            */}
      <div className="relative md:fixed top-0 w-full z-50 h-20 flex justify-between items-center bg-blue-950 p-7">

        {/* Your Logo */}
        <NavLink to="/">
          <div>
            <img src="/woliul-hasan-S5GTNPVtKPI-unsplash.jpg" alt="Eunica Technologies Logo" className=" w-[50px] h-[50px] rounded-full" />
          </div>
        </NavLink>

        {/* --- Desktop Nav Links ---
                  - Added styling to make them visible and interactive.
                */}
        <div className="hidden md:flex justify-between w-[60%]">
          <NavLink to="/" className="cursor-target text-gray-200 hover:text-yellow-400 font-medium transition-colors">Home</NavLink>
          <NavLink to="/About" className="cursor-target text-gray-200 hover:text-yellow-400 font-medium transition-colors">About</NavLink>
          <NavLink to="/Services" className="cursor-target text-gray-200 hover:text-yellow-400 font-medium transition-colors">Services</NavLink>
          <NavLink to="/Products" className="cursor-target text-gray-200 hover:text-yellow-400 font-medium transition-colors">Products</NavLink>
          <NavLink to="/Contact" className="cursor-target text-gray-200 hover:text-yellow-400 font-medium transition-colors">Contacts</NavLink>
        </div>

        {/* --- Mobile Toggle Button ---
                  - Replaced BsMenuButtonWideFill with an inline SVG hamburger icon.
                */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>


      {/* --- Mobile Menu Dropdown ---
              - Changed bg-orange-600 to bg-blue-950.
              - Added a hover effect (hover:bg-blue-800).
            */}
      {isOpen && (
        <div className="flex flex-col md:hidden bg-blue-950 w-full">

          <NavLink to="/" onClick={toggleMenu} className="p-4 text-white hover:bg-blue-800 transition-colors">Home</NavLink>
          <NavLink to="/About" onClick={toggleMenu} className="p-4 text-white hover:bg-blue-800 transition-colors">About</NavLink>
          <NavLink to="/Services" onClick={toggleMenu} className="p-4 text-white hover:bg-blue-800 transition-colors">Services</NavLink>
          <NavLink to="/Products" onClick={toggleMenu} className="p-4 text-white hover:bg-blue-800 transition-colors">Products</NavLink>
          <NavLink to="/Contact" onClick={toggleMenu} className="p-4 text-white hover:bg-blue-800 transition-colors">Contacts</NavLink>

        </div>
      )}

      {/* --- **IMPORTANT** ---
              - Because the navbar is 'md:fixed' on desktop, it will cover
                the top 80px (h-20) of your page content.
              - You MUST add a top padding of 'pt-20' to your main page
                container (in your App.js or layout file) to fix this.
              - Example: <div className="pt-20"> ... your page content ... </div>
            */}
    </>
  );
}

export default NavBar;