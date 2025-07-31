"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch"; 
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Automation", link: "/automation" },
    { name: "Training", link: "/training" },
    { name: "Blog", link: "/blog" },
    

  ];

  const panelRef = useRef(null);

  useGSAP(() => {
    if (panelRef.current) {
      gsap.set(panelRef.current, {
        height: 0,
        overflow: "hidden",
        visibility: "visible",
      });
    }
  }, []);

  const animatePanel = (open) => {
    const el = panelRef.current;
    if (!el) return;

    if (open) {
      gsap.to(el, {
        height: el.scrollHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => gsap.set(el, { height: "auto" }),
      });
    } else {
      gsap.to(el, {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <Disclosure>
      {({ open }) => {
        useEffect(() => {
          animatePanel(open);
        }, [open]);

        return (
          <div className="relative w-full bg-gray-100 dark:bg-gray-900 shadow-md">
            <nav className="w-full flex flex-wrap items-center justify-between px-4 lg:px-6 py-2 lg:py-3">
              {/* Logo and Name */}
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/" className="flex items-center space-x-3">
                  <img
                    src="/img/images/logo-155x177.png"
                    alt="Logo"
                    className="w-12 aspect-square object-cover"
                  />
                  <div className="text-left">
                    <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
                      <span className="text-sky-400">MECH IT </span>
                      <span className="text-rose-400">POSSIBLE</span>
                    </h1>
                  </div>
                </Link>

                {/* Mobile Right Side Buttons */}
                <div className="lg:hidden ml-2 flex items-center gap-4">
                  <ThemeChanger />
                  <DisclosureButton
                    aria-label="Toggle Menu"
                    className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 focus:outline-none"
                  >
                    <svg
                      className="w-7 h-7 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {open ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </DisclosureButton>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <ul className="flex space-x-6">
                  {navigation.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 font-semibold transition duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Contact + Theme Right */}
                <div className="flex items-center space-x-4">
                  <Link
                    href="/contact"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md hover:from-purple-600 hover:to-indigo-600 transition duration-300"
                  >
                    Contact Us
                  </Link>
                  <ThemeChanger />
                </div>
              </div>
            </nav>

            {/* Mobile Panel */}
            <DisclosurePanel static>
              <div
                ref={panelRef}
                className="absolute top-full left-0 right-0 z-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 lg:hidden"
                style={{ visibility: "hidden" }}
              >
                <div className="flex flex-col py-4 px-6 space-y-3">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 py-2 font-semibold"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="w-full px-6 py-3 mt-4 text-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </DisclosurePanel>
          </div>
        );
      }}
    </Disclosure>
  );
}
