"use client";

import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

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
  const panelBgRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP();

  const showSidePanel = contextSafe(() => {
    setIsPanelVisible(true); // mount first

    requestAnimationFrame(() => {
      gsap.set(panelRef.current, { x: "100%" }); // start offscreen
      gsap.set(panelBgRef.current, { opacity: 0 });

      gsap.to(panelRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(panelBgRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });

  const hideSidePanel = contextSafe(() => {
    gsap.to(panelRef.current, {
      x: "100%",
      duration: 0.15,
      ease: "power3.in",
    });
    gsap.to(panelBgRef.current, {
      opacity: 0,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => setIsPanelVisible(false), // unmount after fade
    });
  });

  return (
    <section className="maincontainer h-auto w-screen fixed top-0 left-0 z-50 flex justify-center items-center ">
      <nav className="h-auto w-full py-4 px-8 mx-16 my-4 md:mx-24 flex justify-between items-center rounded-full bg-white shadow-2xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 relative w-28 h-10"
        >
          <Image src="/logo2.png" alt="Logo" className=" object-cover" fill />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex justify-center items-center gap-3">
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

        {/* Mobile hamburger */}
        <button
          onClick={showSidePanel}
          className="block lg:hidden hover:bg-neutral-200 transition-colors duration-150 p-2 rounded-full"
        >
          <RxHamburgerMenu size={24} />
        </button>

        {/* Mobile overlay + side panel */}
        {isPanelVisible && (
          <>
            {/* Overlay */}
            <div
              ref={panelBgRef}
              onClick={hideSidePanel}
              className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-[98]"
            />

            {/* Sidebar */}
            <section
              ref={panelRef}
              className="fixed top-0 right-0 z-[99] h-screen w-64 px-4 py-2 bg-white shadow-lg"
            >
              {/* Close Button */}
              <button
                onClick={hideSidePanel}
                className="absolute top-4 right-4 p-2 bg-neutral-100 rounded-full inline-flex items-center justify-center"
              >
                <IoIosClose size={28} />
              </button>

              {/* Nav links */}
              <ul className="flex flex-col justify-center items-start gap-5 px-6 py-4 mt-16">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.link;
                  return (
                    <li
                      key={index}
                      className={`w-full hover:underline ${
                        item.link === "/contact" ? "mt-10" : ""
                      }`}
                    >
                      {item.link === "/contact" ? (
                        <Link
                          href={item.link}
                          className={`bg-green-200 hover:bg-green-300 transition-all duration-150 px-4 py-3 rounded-full ${
                            isActive && "text-green-800 font-semibold"
                          }`}
                          onClick={hideSidePanel}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          href={item.link}
                          className={`w-full${
                            isActive && "text-green-800 font-semibold"
                          }`}
                          onClick={hideSidePanel}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          </>
        )}
      </nav>
    </section>
  );
}
