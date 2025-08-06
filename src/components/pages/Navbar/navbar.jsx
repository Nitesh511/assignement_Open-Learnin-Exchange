import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  border-gray-200">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <Link
            to={"/"}
            className="flex-shrink-0 flex items-center  "
            aria-label="Home"
          >
            <img
              src={logo}
              alt="Logo"
              className="object-contain "
              style={{
                width: 191,
                height: 45,
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="navbar-text text-gray-900 hover:text-blue-700 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-text text-gray-900 hover:text-blue-700 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-text text-gray-900 hover:text-blue-700 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-text text-gray-900 hover:text-blue-700 transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navbar-text text-gray-900 hover:text-blue-700 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="/login"
              className="navbar-text   inline-block px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition"
            >
              Login
            </a>
          </div>

       <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            >
              {isOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden  fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          >
            <HiOutlineX className="h-8 w-8" />
          </button>

          <ul className="space-y-6 text-center">
            <li>
              <a
                href="#"
                className="navbar-text block text-gray-900 hover:text-blue-700 transition text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="navbar-text block text-gray-900 hover:text-blue-700 transition text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="navbar-text block text-gray-900 hover:text-blue-700 transition text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="navbar-text block text-gray-900 hover:text-blue-700 transition text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="navbar-text block text-gray-900 hover:text-blue-700 transition text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
