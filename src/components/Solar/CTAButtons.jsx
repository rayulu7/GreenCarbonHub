import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CTAButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubsidyClick = () => {
    if (location.pathname === '/solar-installation') {
      scrollToSection('subsidy-structure');
    } else {
      navigate('/solar-installation');
      setTimeout(() => {
        scrollToSection('subsidy-structure');
      }, 100);
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={handleSubsidyClick}
            className="w-full sm:w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
          >
            AVAIL SUBSIDY
          </button>
          
          <button 
            onClick={() => scrollToSection('our-finance-options')}
            className="w-full sm:w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
          >
            VIEW FINANCE OPTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAButtons;

