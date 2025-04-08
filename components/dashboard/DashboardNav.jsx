import Image from "next/image";
import React from "react";

const DashboardNav = () => {
  return (
    <div className="h-[10vh] flex justify-end items-center gap-8 p-4 bg-[#1a3a6b]">
      <Image src={"/searchicon.png"} height={40} width={32} alt="Search Icon" />
      <Image
        src={"/soundwaveicon.png"}
        height={40}
        width={65}
        alt="Sound Icon"
        className="pr-8 border-r-4 border-[#0d2e60] "
      />
      <button className="bg-white text-white h-10 text-xs px-4 py-1 rounded-full animate-pulse hover:animate-none from-[#A062F3] to-[#322AA7] bg-gradient-to-b hover:from-[#322AA7] hover:to-[#A062F3]">
        Try Safe Space for Free
      </button>
    </div>
  );
};

export default DashboardNav;
