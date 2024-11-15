import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VeevilleLogo } from "../assets";
import Menu from "./Menu";

interface NavLink {
  name: string;
  href: string;
}

interface MenuItem {
  title?: string;
  items: string[];
  description?: string;
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

  const menu = [
    [
      {
        title: "Veeville Communications",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
      {
        title: "Veeville Films",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
      {
        title: "Veeville Experience",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
      {
        title: "Veeville Technologies",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
    ],
    [
      {
        title: "Nusense",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
    ],
    [
      {
        title: "Lying Racoon",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
    ],
    [
      {
        title: "Pinyata Foods",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
    ],
    [
      {
        title: "Dhool",
        items: [
          "About Us",
          "What We Do",
          "Our Work",
          "Insights",
          "Testimonials",
          "Pricing",
          "FAQs",
          "Contact Us",
          "Careers",
        ],
      },
    ],
    [
      {
        items: [],
        description:
          "Veeville is a global integrated marketing company that offers an assortment of marketing services to organizations across a multitude of sectors including information technology, retail, healthcare, FMCG, hospitality, food & beverage, manufacturing, and more. Our solutions include brand strategy, creative development, campaign planning and execution, on-ground experience design, digital marketing, and custom technology design. We also provide services like public relations, media planning & buying, and performance tracking & optimization through our partner organizations for our clients across the globe. Explore this site and discover some of our recent work.",
      },
    ],
    [
      {
        items: [],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, accusamus!",
      },
    ],
  ];

  const [isHeightIncreased, setIsHeightIncreased] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string): void => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavHover = (index: number): void => {
    setMenuData(menu[index]);
    setIsHeightIncreased(true);
  };

  const handleMouseLeave = () => {
    setIsHeightIncreased(false);
    setMenuData([]); // Clear menu data to reset the navbar height
  };

  useEffect(() => {
    if (navRef.current) {
      const baseHeight = 80; // base height for navbar without expanded menu
      navRef.current.style.height =
        isHeightIncreased && menuRef.current
          ? `${baseHeight + menuRef.current.scrollHeight}px`
          : `${baseHeight}px`;
    }
  }, [isHeightIncreased, menuData]);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 bg-[#121212] text-gray-300 z-50 border-b border-gray-800 shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
            {/* Logo or Brand Name */}
            <img
              className="text-xl font-semibold"
              src={VeevilleLogo}
              alt="Veeville Logo"
            />

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  onMouseOver={() => handleNavHover(index)}
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
          {isHeightIncreased && menuData.length > 0 && (
            <div ref={menuRef} className="mt-4 transition-all duration-300">
              <Menu menuData={menuData} />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-t border-gray-800 fixed top-14 left-0 w-full z-40">
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
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 md:h-16" />
    </>
  );
};

export default Navbar;
