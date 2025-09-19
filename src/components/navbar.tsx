"use client";

import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Automation", link: "/automation" },
    { name: "Training", link: "/training" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);

  // navbar animation logic
  //   add scale-x-0 to nav
  //   useEffect(() => {
  //     gsap.to(panelRef.current, {
  //       scaleX: 1,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       delay: 0.5,
  //     });
  //   }, []);

  return (
    <section className="maincontainer h-auto w-screen fixed top-0 left-0 z-50 flex justify-center items-center ">
      <nav
        ref={panelRef}
        className="h-auto w-full py-4 px-8 mx-24 my-4 flex justify-between items-center rounded-full bg-white shadow-2xl"
      >
        <Link
          href="/"
          className="flex items-center space-x-3 relative w-28 h-10"
        >
          <Image src="/logo2.png" alt="Logo" className=" object-cover" fill />
        </Link>
        <ul className="flex justify-center items-center gap-3">
          {navigation.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <li key={index} className="hover:underline">
                {item.link === "/contact" ? (
                  <Link
                    href={item.link}
                    className={`bg-green-200 hover:bg-green-300 transition-all duration-150 px-4 py-3 rounded-full ${
                      isActive && "text-green-800 font-semibold"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.link}
                    className={`${isActive && "text-green-800 font-semibold"}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
