import React, { useEffect, useState, useRef } from "react";
import {
  DollarSign,
  Users,
  TrendingDown,
  Home,
  CheckCircle,
  Settings,
} from "lucide-react";

const GCHBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    { id: 1, icon: <DollarSign className="w-12 h-12 text-green-600" />, title: "Easy Finance Options" },
    { id: 2, icon: <Users className="w-12 h-12 text-green-600" />, title: "Free Consultancy" },
    { id: 3, icon: <TrendingDown className="w-12 h-12 text-green-600" />, title: "Lowest Industry Prices" },
    { id: 4, icon: <Home className="w-12 h-12 text-green-600" />, title: "Transparent & Haggle-free purchase" },
    { id: 5, icon: <CheckCircle className="w-12 h-12 text-green-600" />, title: "Standardised scope of work" },
    { id: 6, icon: <Settings className="w-12 h-12 text-green-600" />, title: "Choice of Branded Components" },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#111827] text-center font-bold mb-4 md:mb-6 lg:mb-8 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          Why Should You Choose GCH for Your Rooftop Solar Power Project?
        </h2>

        <p className={`text-center mx-auto max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#555] font-sans mb-6 md:mb-8 lg:mb-10 transition-all duration-800 ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'}`}
           style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <span className="font-bold text-gray-800">GreenCarbonHub</span> is promoted by a Civil Servant with 23 years of
          experience in administration, particularly in power management, solid waste management, and liquid waste
          management. Supported by a team of experienced experts, GreenCarbonHub offers all Net-Zero solutions under one
          roof. If you are looking for the best rooftop solar company in Hyderabad, we are just a few miles away. Here
          are the reasons to choose us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-sm lg:max-w-none transform hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ 
                minHeight: '120px', 
                height: 'auto',
                animationDelay: `${0.5 + index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="mb-3 md:mb-4 transition-all duration-300 hover:scale-110">
                <div className="transition-all duration-300 hover:rotate-12">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-gray-800 font-semibold text-center leading-tight text-sm sm:text-base lg:text-lg transition-all duration-300 hover:text-green-600">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GCHBenefits;