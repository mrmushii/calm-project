"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Example: Change nav background based on the route
  const btnGra =
    pathname === "/"
      ? "from-[#4972E1] to-[#DB6FEE] bg-gradient-to-b"
      : pathname === "/sleep"
      ? "from-[#214D72] to-[#3A8FD7] bg-gradient-to-b"
      : pathname === "/stress_anxiety"
      ? "from-[#D6ECF7] to-[#9CE4C2] bg-gradient-to-b"
      : pathname === "/mind"
      ? "from-[#A062F3] to-[#322AA7] bg-gradient-to-b"
      : "bg-white"; // fallback

  return (
    <nav className="relative z-50 bg-white text-sm font-medium shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-12 py-4">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={126} height={103} />
          </Link>

          <div className="hidden md:flex gap-6 md:gap-10">
            <Link href="/sleep">Sleep</Link>
            <Link href="/stress_anxiety">Stress & Anxiety</Link>
            <Link href="/mind">Mindfulness</Link>
          </div>
        </div>

        {/* Right: Login + Button */}
        <div className="hidden md:flex gap-6 md:gap-10 items-center">
          <Link href="/login">Log in</Link>
          <Link href="/try_for_free">
            <Button
              className={` ${btnGra} animate-pulse hover:animate-none py-6 rounded-4xl text-white`}
            >
              Try Safe Space for Free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/sleep" onClick={() => setMenuOpen(false)}>
            Sleep
          </Link>
          <Link href="/stress_anxiety" onClick={() => setMenuOpen(false)}>
            Stress & Anxiety
          </Link>
          <Link href="/mind" onClick={() => setMenuOpen(false)}>
            Mindfulness
          </Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            Log in
          </Link>
          <Link href="/try_for_free" onClick={() => setMenuOpen(false)}>
            <Button
              className={`w-full bg-gradient-to-r ${btnGra} py-2 rounded-3xl text-white`}
            >
              Try Safe Space for Free
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
