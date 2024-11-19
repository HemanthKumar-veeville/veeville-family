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
    <div className="text-gray-600 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200 shadow-md">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8`}
      >
        {menuData?.map((menu, index) => (
          <div key={index}>
            {menu?.title && (
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {menu?.title}
              </h3>
            )}
            <ul className="space-y-2">
              {menu?.items?.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-gray-900 cursor-pointer transition-colors duration-200 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {menuData[0]?.description && (
        <div
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 mt-6`}
        >
          <p className="text-sm text-gray-700">{menuData[0]?.description}</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
