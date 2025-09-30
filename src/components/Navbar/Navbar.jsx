import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-green-600">Green</span>
              <span className="text-orange-500">Carbon</span>
              <span className="text-gray-800">Hub</span>
            </h1>
            <p className="text-sm text-gray-600">Net-Zero Solutions</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium"
          >
            Home
          </Link>

          {/* Installation Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center text-green-600 font-medium bg-transparent focus:outline-none hover:text-orange-500 transition-colors">
              Installation
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <Link
                    to="/solar-installation"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors"
                  >
                    Solar Installation
                  </Link>
                  <Link
                    to="/water-management"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors"
                  >
                    Water & Wastewater Management
                  </Link>
                  <Link
                    to="/bio-methanation"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors"
                  >
                    Bio-Methanation
                  </Link>

                </div>
              </div>
            )}
          </div>

          <Link
            to="/#why-gch"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            to="/#contact-us"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Login + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            Login
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg">
          <Link
            to="/"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium"
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-green-600 font-medium hover:text-orange-500 transition-colors"
              onClick={toggleMobileDropdown}
            >
              Installation
              <ChevronDown
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <Link
                  to="/solar-installation"
                  className="block text-black hover:text-orange-500 transition-colors"
                >
                  Solar Installation
                </Link>
                <Link
                  to="/water-management"
                  className="block text-black hover:text-orange-500 transition-colors"
                >
                  Water & Wastewater Management
                </Link>
                <Link
                  to="/bio-methanation"
                  className="block text-black hover:text-orange-500 transition-colors"
                >
                  Bio-Methanation
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/#why-gch"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            to="/#contact-us"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium"
          >
            Contact Us
          </Link>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
