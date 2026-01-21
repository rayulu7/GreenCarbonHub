import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DollarSign,
  Users,
  TrendingDown,
  Home,
  CheckCircle,
  Settings,
} from "lucide-react";

const WhyChooseGCH = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      scrollToSection('contact-us');
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection('contact-us');
      }, 100);
    }
  };
   const benefits = [
    {
      id: 1,
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Standardised Scope of Work",
    },
     {
      id: 2,
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Choice of Branded Components",
    },

    {
      id: 3,
      icon: <TrendingDown className="w-12 h-12 text-green-600" />,
      title: "Lowest Industry Prices",
    },
    
    {
      id: 4,
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Easy Finance Options",
    },
    {
      id: 5,
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Predictive analytics using AI and ML",
    },
    
    {
      id: 6,
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Lifetime Maintenance",
    },
    
   
  ];

  return (
    <section className="bg-white py-16 px-5 md:px-10 lg:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {}
        <h2 className="text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl leading-snug mb-6">
          Why Choose{" "}
          <span className="text-green-600">GreenCarbon</span><span className="text-orange-500">Hub</span> for Your
          Rooftop Solar Power Project?
        </h2>

        {}
        <p className="text-gray-600 text-base sm:text-lg md:text-[17.5px] leading-relaxed max-w-4xl mx-auto mb-12 text-justify md:text-center">
          <span className="font-semibold text-gray-800"><span className="text-green-600">GreenCarbon</span><span className="text-orange-500">Hub</span></span> is
          promoted by an experienced team with 75+ years of cumulative experience in solar power management. Aided by a strong advisory board <span className="text-green-600">GreenCarbon</span><span className="text-orange-500">Hub</span> offers integrated net-zero solutions.
        </p>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center p-8 border border-gray-100"
            >
              <div className="mb-5">{benefit.icon}</div>
              <h3 className="text-gray-800 font-semibold text-lg sm:text-xl">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {}
        <p className="text-gray-600 text-base sm:text-lg md:text-[17.5px] leading-relaxed max-w-4xl mx-auto mt-14 text-justify md:text-center">
          <span className="font-semibold text-gray-800"><span className="text-green-600">GreenCarbon</span><span className="text-orange-500">Hub</span></span>'s
          engineers have successfully designed and installed numerous rooftop
          solar systems. We work closely with you to tailor solutions for your
          unique energy needs delivering reliability, top-tier products, and
          24/7 support.           Choose excellence. Choose sustainability.{" "}
          <span 
            onClick={handleContactClick}
            className="text-green-600 font-semibold cursor-pointer hover:text-orange-500 transition-colors underline"
          >
            Contact us today!
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseGCH;
