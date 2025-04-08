import Image from "next/image";
import React from "react";

const Sidebar = ({ navItems }) => {
  return (
    <div className="sticky top-0 left-0 h-screen w-20 sm:w-60 md:w-1/6 bg-gradient-to-b from-[#2356A2] to-[#0d203c] p-4 flex flex-col justify-between z-50">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-[#7fa8e7] hidden sm:block">
          Calm
        </h1>
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Image src={item.img} height={50} width={50} alt="Icon" />
              <span className="hidden sm:block text-2xl text-white">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden sm:block text-xs text-white/60 text-center">
        Privacy Policy
      </div>
    </div>
  );
};

export default Sidebar;
