"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Automation", href: "/automation" },
    { name: "Training", href: "/training" },
    { name: "Product", href: "/product" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white py-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Mech IT Possible Logo"
            width={50}
            height={50}
            className="object-cover rounded-none aspect-square"
          />
          <div className="leading-tight select-none">
            <div className="text-xl font-extrabold text-cyan-400">MECH IT</div>
            <div className="text-md font-semibold text-pink-400">POSSIBLE</div>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="ml-4 px-5 py-2 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 text-white rounded-full transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-cyan-400 hover:underline transition duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="mt-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 rounded-full shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
