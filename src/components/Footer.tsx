import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const sections = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Apple Wallet",
      links: ["Apple Pay", "Apple Card", "Apple Cash"],
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade"],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
        "Certified Refurbished",
        "Apple Trade In",
        "Financing",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
  ];

  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (title: string) =>
    setOpenSection(openSection === title ? null : title);

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center lg:text-left mx-auto">
      <div className="container mx-auto px-4">
        {/* Collapsible Sections */}
        <div className="lg:grid lg:grid-cols-6 lg:gap-6">
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
                      className="hover:text-white transition-colors block lg:inline"
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
            More ways to shop:{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-400 hover:underline">
              other retailer
            </a>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
          <p className="text-gray-500">
            &copy; 2024 Apple Inc. All rights reserved.{" "}
            {[
              "Privacy Policy",
              "Terms of Use",
              "Sales and Refunds",
              "Legal",
              "Site Map",
            ].map((text) => (
              <React.Fragment key={text}>
                <a href="#" className="text-blue-400 hover:underline mx-1">
                  {text}
                </a>
                {text !== "Site Map" && " | "}
              </React.Fragment>
            ))}{" "}
            United States
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
