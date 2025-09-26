import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="relative z-10 px-6 py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side: Logo + Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-green-600">Green</span>
                <span className="text-orange-500">Carbon</span>
                <span className="text-gray-800">Hub</span>
              </h1>
              <p className="text-sm text-gray-600">Net-Zero Solutions</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </a>

            {/* Installation Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 font-medium focus:outline-none">
                Installation
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 
                              opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible 
                              transition-opacity duration-300 ease-in-out z-50 pointer-events-auto">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                    Solar Panels
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    Wind Turbines
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                    Bio-Methanation
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Right side: Login */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
