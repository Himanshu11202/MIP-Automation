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
    { name: "Product", link: "/products" },
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact us", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];
  const panelRef = useRef(null);

  // Set initial collapsed style
  useGSAP(() => {
    if (panelRef.current) {
      gsap.set(panelRef.current, {
        height: 0,
        overflow: "hidden",
        // opacity: 0, // Add opacity for extra safety
        visibility: "visible",
      });
    }
  }, []);

  // Toggle animation
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
        // opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <Disclosure>
      {({ open }) => {
        // Animate when `open` changes
        useEffect(() => {
          animatePanel(open);
        }, [open]);

        return (
          <div className="relative w-full">
            {/* Navbar */}
            <nav className="container relative z-30 flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
              {/* Left: Logo + Burger */}
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                >
                  <img src="/img/logo.svg" alt="Logo" width={32} height={32} />
                  <span>Nextly</span>
                </Link>

                {/* ThemeChanger visible only on mobile */}
                <div className="lg:hidden mr-2 flex justify-center items-center gap-8">
                  <div className="scale-125">
                    <ThemeChanger />
                  </div>
                  <DisclosureButton
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:text-gray-300 dark:focus:bg-trueGray-700"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
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
              <div className="hidden lg:flex items-center space-x-6">
                <ul className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-gray-800 dark:text-gray-200 hover:text-indigo-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/"
                  className="px-6 py-2 text-white bg-indigo-600 rounded-md"
                >
                  contact us
                </Link>
                <ThemeChanger />
              </div>
            </nav>

            {/* Mobile Menu - Remove static prop */}
            <DisclosurePanel static>
              <div
                ref={panelRef}
                className="absolute top-full left-0 right-0 z-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 lg:hidden"
                style={{ visibility: "hidden" }}
              >
                <div className="flex flex-col py-4 px-6 space-y-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-4 text-center text-white bg-indigo-600 rounded-md"
                  >
                    Get Started
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
