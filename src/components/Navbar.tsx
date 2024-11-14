import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VeevilleLogo } from "../assets";
import Menu from "./Menu";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { name: "Veeville", href: "#veeville" },
    { name: "Nusense", href: "#nusense" },
    { name: "Lying Racoon", href: "#lying-racoon" },
    { name: "Pinyata Foods", href: "#pinyata-foods" },
    { name: "Dhool", href: "#dhool" },
    { name: "About", href: "#about" },
    { name: "Contact us", href: "#contact" },
  ];

  const [isHeightIncreased, setIsHeightIncreased] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string): void => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => setIsHeightIncreased(true);
  const handleMouseLeave = () => setIsHeightIncreased(false);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.height = isHeightIncreased
        ? `${navRef.current.scrollHeight}px`
        : "80px";
    }
  }, [isHeightIncreased]);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 bg-[#121212] text-gray-300 z-50 border-b border-gray-800 shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline px-4 sm:px-6 lg:px-8 py-4">
            {/* Logo or Brand Name */}
            <img
              className="text-xl font-semibold"
              src={VeevilleLogo}
              alt="Veeville Logo"
            />

            {/* Desktop Links */}
            <ul
              className="hidden md:flex space-x-8 transition-all duration-300"
              onMouseEnter={handleMouseEnter}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  {link.name}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>

          {/* Conditionally render the Menu component */}
          {isHeightIncreased && (
            <div className="mt-4">
              <Menu />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#121212] border-t border-gray-800 fixed top-14 left-0 w-full z-40 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 md:h-16" />
    </>
  );
};

export default Navbar;
