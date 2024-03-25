import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

import Icons from "./icons"

const Menubar = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="https://st5.depositphotos.com/28687978/65164/v/600/depositphotos_651643312-stock-illustration-letter-logo-design-initial-letter.jpg"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="hidden md:block mr-[400px]">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/" ? "bg-gray-700" : ""
                }`}
                onClick={() => router.push("/")}
              >
                Home
              </a>
              <a
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/about" ? "bg-gray-700" : ""
                }`}
                onClick={() => router.push("/about")}
              >
                About
              </a>
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
                    showDropdown ? "bg-gray-700" : ""
                  }`}
                >
                  Categories{" "}
                  <svg
                    className={`inline-block h-4 w-4 transition-transform ${
                      showDropdown ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showDropdown && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="/categories/category1"
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                          router.pathname === "/categories/category1"
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        Item 1
                      </a>
                      <a
                        href="/categories/category2"
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                          router.pathname === "/categories/category2"
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        Item 2
                      </a>
                      <a
                        href="/categories/category3"
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                          router.pathname === "/categories/category3"
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        Item 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/contact" ? "bg-gray-700" : ""
                }`}
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Icons */}
        <Icons />
      </div>
    </nav>
  );
};

export default Menubar;
