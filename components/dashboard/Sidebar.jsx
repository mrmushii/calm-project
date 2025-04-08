import React from 'react'

const Sidebar = ({ navItems }) => {
  return (
    <div className=" fixed top-0 left-0 h-screen w-20 sm:w-60 bg-gradient-to-b from-[#0a2c45] to-[#0f1d3c] p-4 flex flex-col justify-between z-50">
      <div>
        <h1 className="text-xl font-bold mb-8 text-white hidden sm:block">Calm</h1>
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center gap-3 cursor-pointer">
              <span className="w-6 text-center">{item.icon}</span>
              <span className="hidden sm:block text-sm text-white">{item.label}</span>
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

export default Sidebar