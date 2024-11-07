import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const sections = [
    {
      title: "Veeville",
      links: [
        "Veeville Communications",
        "Veeville Films",
        "Veeville Experience",
        "Veeville Technologies",
        "Testimonials",
        "Pricing",
        "FAQs",
        "Contact Us",
        "Careers",
      ],
    },
    {
      title: "Nusense",
      links: [
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
      title: "Lying Racoon",
      links: [
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
      title: "Pinyata Foods",
      links: [
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
      title: "Dhool",
      links: [
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
  ];

  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (title: string) =>
    setOpenSection(openSection === title ? null : title);

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center lg:text-left mx-auto">
      <div className="container mx-auto px-4">
        {/* Collapsible Sections */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-6 lg:mx-auto lg:w-fit">
          {sections.map(({ title, links }) => (
            <div
              key={title}
              className="border-b border-gray-700 py-2 lg:border-none"
            >
              <button
                onClick={() => toggleSection(title)}
                className="w-full flex justify-between items-center lg:block lg:w-auto text-white text-sm font-semibold mb-2 lg:mb-0"
              >
                {title}
                <span className="lg:hidden">
                  {openSection === title ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <ul
                className={`${
                  openSection === title ? "block" : "hidden"
                } lg:block space-y-1 text-gray-400`}
              >
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-left hover:text-white transition-colors block lg:inline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Links */}
        <div className="text-center border-t border-gray-700 pt-4 text-xs max-w-3xl mx-auto mt-6">
          <p className="mb-4">
            * IF THOU HAST NO HORSE * THOU MUST WORK THY ASS OFF *
          </p>
          <p className="text-gray-500">
            &copy; 2024 Veeville. All rights reserved.{" "}
            {["Privacy Policy", "Terms of Use", "Legal", "Site Map"].map(
              (text) => (
                <React.Fragment key={text}>
                  <a href="#" className="text-blue-400 hover:underline mx-1">
                    {text}
                  </a>
                  {text !== "Site Map" && " | "}
                </React.Fragment>
              )
            )}{" "}
            India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
