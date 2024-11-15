import React from "react";

interface MenuItem {
  title?: string;
  items: string[];
  description?: string;
}

interface MenuProps {
  menuData: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuData }) => {
  return (
    <div className="text-white py-8 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:${
          menuData[0]?.items?.length ? "grid-cols-4" : ""
        } gap-8`}
      >
        {menuData?.map((menu, index) => (
          <div key={index}>
            {menu?.title && (
              <h3 className="text-lg font-semibold mb-4">{menu?.title}</h3>
            )}
            <ul className="space-y-2">
              {menu?.items?.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
            {menu?.description && <h3 className="mb-4">{menu?.description}</h3>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
