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

interface NavbarProps {
  onExpandChange: (isExpanded: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onExpandChange }) => {
  const navLinks: NavLink[] = [
    { name: "Veeville Group", href: "#veeville" },
    { name: "Veeville Consulting", href: "#veeville" },
    { name: "Veeville Films", href: "#veeville" },
    { name: "Veeville Experiences", href: "#veeville" },
    { name: "Veeville Technologies", href: "#veeville" },
    { name: "Nusense", href: "#nusense" },
    { name: "flot.work", href: "#float.work" },
    { name: "Pinyata Foods", href: "#pinyata-foods" },
    { name: "Lying Racoon", href: "#lying-racoon" },
    { name: "Dhool", href: "#dhool" },
    { name: "Contact us", href: "#contact" },
  ];

  const visibleLinks = navLinks.slice(0, 5); // First 5 links as visible
  const overflowLinks = navLinks.slice(5); // Remaining links as overflow

  const menu = [
    [
      {
        title: "Veeville Group",
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
        title: "Veeville Consulting",
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
    ],
    [
      {
        title: "Veeville Experiences",
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
        title: "flot.work",
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
  ];

  const [isHeightIncreased, setIsHeightIncreased] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (href: string): void => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavHover = (index: number): void => {
    setMenuData(menu[index]);
    setIsHeightIncreased(true);
    onExpandChange(true);
  };

  const handleMouseLeave = () => {
    setIsHeightIncreased(false);
    setMenuData([]);
    onExpandChange(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (navRef.current) {
      const baseHeight = 80;
      navRef.current.style.height =
        isHeightIncreased && menuRef.current
          ? `${baseHeight + menuRef.current.scrollHeight}px`
          : `${baseHeight}px`;
    }
  }, [isHeightIncreased, menuData]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white text-gray-600 z-50 border-b shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          <img
            className="text-xl font-semibold"
            src={VeevilleLogo}
            alt="Veeville Logo"
          />
          <ul className="hidden md:flex space-x-8">
            {visibleLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => handleNavClick(link.href)}
                onMouseOver={() => handleNavHover(index)}
                className="transition-colors duration-200 cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline"
              >
                {link.name}
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-2xl text-gray-600" />
            ) : (
              <AiOutlineMenu className="text-2xl text-gray-600" />
            )}
          </button>
          {overflowLinks.length > 0 && (
            <button
              className="hidden md:block p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
              onMouseEnter={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle overflow menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-2xl text-gray-600" />
              ) : (
                <AiOutlineMenu className="text-2xl text-gray-600" />
              )}
            </button>
          )}
        </div>
        {isHeightIncreased && menuData.length > 0 && (
          <div ref={menuRef} className="mt-4 transition-all duration-300">
            <Menu menuData={menuData} />
          </div>
        )}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 fixed top-14 left-0 w-full z-40">
            <ul className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {overflowLinks.length > 0 && isMobileMenuOpen && (
          <div
            className="hidden md:block bg-gray-50 border-t border-gray-200 fixed top-14 right-0 w-60 z-40"
            onMouseLeave={() => setIsMobileMenuOpen(false)}
          >
            <ul className="flex flex-col space-y-4 px-4 py-6">
              {overflowLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
