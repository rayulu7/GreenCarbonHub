import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const FooterContent = () => {
  return (
    <footer className="relative z-10 bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-green-400">Green</span>
                <span className="text-orange-500">Carbon</span>
                <span className="text-green-400">Hub</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              GreenCarbonHub is promoted by a Civil Servant with 23 years of 
              experience in administration, specializing in power management, 
              solid waste management, and liquid waste management. With a team 
              of experienced subject experts, GreenCarbonHub offers complete 
              Net-Zero solutions under one roof.
            </p>
          </div>

          {/* Our Offerings */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Offerings</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Solar Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Water & Waste-water Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Bio-Methanation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Partner with Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Client Registration</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91-9182445300</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91-9182445715</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@greencarbonhub.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mansoorabad, Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 <span className="text-orange-500">GreenCarbonHub</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:opacity-80 transition">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center hover:opacity-80 transition">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:opacity-80 transition">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
