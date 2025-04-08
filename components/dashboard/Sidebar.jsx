import Image from "next/image";
import React from "react";

const Sidebar = ({ navItems, activeTab, onTabChange }) => {
  return (
    <div className="sticky top-0 left-0 h-screen w-20 sm:w-60 md:w-1/6 bg-gradient-to-b from-[#2356A2] to-[#0d203c] p-4 flex flex-col justify-between z-50">
      <div>
        
        <div className="space-y-6 mt-20">
          {navItems.map((item) => (
            <div
              key={item.label}
              onClick={() => onTabChange && onTabChange(item.label)}
              className={`cursor-pointer flex items-center gap-3 text-white text-sm p-2 py-3 rounded-4xl transition-all duration-300 ease-in-out transform  hover:bg-[#2b4875] ${
                activeTab === item.label ? "font-bold text-green-300 bg-gradient-to-b py-3 from-[#193f79] to-[#0a182e]" : ""
              }`}
            >
              <Image src={item.img} alt={item.label} height={30} width={30} />
              <span className="hidden sm:inline text-2xl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block text-xs text-white/60 text-center">
        Privacy Policy
      </div>
    </div>
  );
};

export default Sidebar;
