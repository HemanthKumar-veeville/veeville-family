import React from "react";

interface MenuItem {
  title: string;
  items: string[];
}

const Menu: React.FC = () => {
  const menuData: MenuItem[] = [
    {
      title: "Explore iPhone",
      items: [
        "Explore All iPhone",
        "iPhone 16 Pro",
        "iPhone 16",
        "iPhone 15",
        "iPhone 14",
        "iPhone SE",
        "Compare iPhone",
        "Switch from Android",
      ],
    },
    {
      title: "Shop iPhone",
      items: [
        "Shop iPhone",
        "iPhone Accessories",
        "Apple Trade In",
        "Carrier Deals at Apple",
        "Financing",
      ],
    },
    {
      title: "More from iPhone",
      items: [
        "iPhone Support",
        "AppleCare+ for iPhone",
        "iOS 18",
        "Apple Intelligence",
        "Apps by Apple",
        "iPhone Privacy",
        "iCloud+",
        "Wallet, Pay, Card",
        "Siri",
      ],
    },
  ];

  return (
    <div className="text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuData.map((menu, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{menu.title}</h3>
            <ul className="space-y-2">
              {menu.items.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
