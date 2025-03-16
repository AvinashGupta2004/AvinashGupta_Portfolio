// import NavLogo from "./NavLogo";
// import NavLink from "./NavLink";
// import { links } from "../../../assets/data";
// function Navbar() {
//   return (
//     <div className="h-[15%] flex justify-around items-center">
//       <div className="nav-logo-container">
//         <NavLogo>Avinash Gupta</NavLogo>
//       </div>
//       <div className="nav-links-container justify-center items-center gap-12 hidden lg:flex" id="nav-bar">
//         {
//           links.map((link)=>{
//             return(
//               <NavLink target = {link.target} key={link.id}>{link.title}</NavLink>
//             )
//           })
//         }
//       </div>
//         <button className="lg:hidden h-10 w-10 aspect-square rounded-lg border-1 border-gray-200 p-2">
//           <img src="/images/menu-burger.svg" className="h-full w-full"></img>
//         </button>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { links } from "../../../assets/data";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-[15%] flex justify-around items-center relative">
      {/* Logo */}
      <div className="nav-logo-container">
        <NavLogo>Avinash Gupta</NavLogo>
      </div>

      {/* Desktop Links (Hidden on Mobile) */}
      <div className="nav-links-container justify-center items-center gap-12 hidden lg:flex" id="nav-bar">
        {links.map((link) => (
          <NavLink target={link.target} key={link.id}>
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button (Hidden on Desktop) */}
      <button
        className="lg:hidden h-10 w-10 aspect-square rounded-lg border-1 border-gray-200 p-2"
        onClick={toggleMobileMenu}
      >
        <img
          src="/images/menu-burger.svg"
          alt="Menu"
          className="h-full w-full"
        />
      </button>

      {/* Mobile Menu (Hidden by Default) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button (Top-Right) */}
          <button
            className="absolute top-4 right-4 h-10 w-10 aspect-square rounded-lg border-1 border-gray-200 p-2"
            onClick={toggleMobileMenu}
          >
            <img
              src="/images/cross-icon.svg"
              alt="Close"
              className="h-full w-full"
            />
          </button>

          {/* Mobile Links (Centered) */}
          <div className="h-full flex flex-col justify-center items-center gap-6 p-6">
            {links.map((link) => (
              <NavLink target={link.target} key={link.id} onClick={toggleMobileMenu}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
