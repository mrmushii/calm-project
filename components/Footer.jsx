"use client"

import React from 'react';
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const bgGra =
  pathname === "/" ? "from-[#4972E1] to-[#DB6FEE] bg-gradient-to-b" :
  pathname === "/sleep" ? "from-[#214D72] to-[#3A8FD7] bg-gradient-to-b" :
  pathname === "/stress_anxiety" ? "from-[#D6ECF7] to-[#9CE4C2] bg-gradient-to-b" :
  pathname === "/mind" ? "from-[#A062F3] to-[#322AA7] bg-gradient-to-b" :
  "bg-white"; // fallback
  return (
    <div className={`bg-gradient-to-b ${bgGra} w-full px-6 sm:px-12 lg:px-36 py-12 sm:py-20`}>
      <div className="flex flex-col sm:flex-row justify-between text-white gap-10 sm:gap-0">
        {/* Company */}
        <div className="flex flex-col">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold">Company</h1>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] mt-2">About</p>
        </div>

        {/* Offers */}
        <div className="flex flex-col">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold">Offers</h1>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] mt-2">Buy a Gift</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">Redeem a Gift</p>
        </div>

        {/* Help */}
        <div className="flex flex-col">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold">Help</h1>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] mt-2">FAQ</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">Contact Us</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">Terms</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">Privacy Policy</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">Cookies</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
