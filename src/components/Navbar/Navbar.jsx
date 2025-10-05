import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMaintenanceDropdownOpen, setIsMaintenanceDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const maintenanceTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  const handleMaintenanceMouseEnter = () => {
    if (maintenanceTimeoutRef.current) clearTimeout(maintenanceTimeoutRef.current);
    setIsMaintenanceDropdownOpen(true);
  };

  const handleMaintenanceMouseLeave = () => {
    maintenanceTimeoutRef.current = setTimeout(() => setIsMaintenanceDropdownOpen(false), 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMaintenanceDropdown = () => {
    setIsMaintenanceDropdownOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 md:py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-green-600">Green</span>
              <span className="text-orange-500">Carbon</span>
              <span className="text-gray-800">Hub</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Net-Zero Solutions</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <Link
            to="/"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Home
          </Link>

          {/* Installation Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center text-green-600 font-medium bg-transparent focus:outline-none hover:text-orange-500 transition-colors text-sm xl:text-base">
              Installation
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <Link
                    to="/solar-installation"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors text-sm"
                  >
                    Solar Installation
                  </Link>
                  <Link
                    to="/water-management"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors text-sm"
                  >
                    Water & Wastewater Management
                  </Link>
                  <Link
                    to="/bio-methanation"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors text-sm"
                  >
                    Bio-Methanation
                  </Link>

                </div>
              </div>
            )}
          </div>

          {/* Maintenance Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMaintenanceMouseEnter}
            onMouseLeave={handleMaintenanceMouseLeave}
          >
            <button className="flex items-center text-green-600 font-medium bg-transparent focus:outline-none hover:text-orange-500 transition-colors text-sm xl:text-base">
              Maintenance
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isMaintenanceDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <Link
                    to="/solar-maintenance"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors text-sm"
                  >
                    Solar Maintenance
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/investments"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Investments
          </Link>
          <Link
            to="/store"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Store
          </Link>
          <Link
            to="/#why-gch"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            About Us
          </Link>
          <Link
            to="/#contact-us"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Contact Us
          </Link>
        </nav>

        {/* Login + Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden lg:block bg-green-600 hover:bg-green-700 text-white px-4 xl:px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm xl:text-base">
            Login
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg">
          <Link
            to="/"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-green-600 font-medium hover:text-orange-500 transition-colors text-sm sm:text-base"
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
                  className="block text-black hover:text-orange-500 transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solar Installation
                </Link>
                <Link
                  to="/water-management"
                  className="block text-black hover:text-orange-500 transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Water & Wastewater Management
                </Link>
                <Link
                  to="/bio-methanation"
                  className="block text-black hover:text-orange-500 transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bio-Methanation
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Maintenance Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-green-600 font-medium hover:text-orange-500 transition-colors text-sm sm:text-base"
              onClick={toggleMobileMaintenanceDropdown}
            >
              Maintenance
              <ChevronDown
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  isMaintenanceDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMaintenanceDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <Link
                  to="/solar-maintenance"
                  className="block text-black hover:text-orange-500 transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solar Maintenance
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/investments"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Investments
          </Link>
          <Link
            to="/store"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Store
          </Link>
          <Link
            to="/#why-gch"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/#contact-us"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
