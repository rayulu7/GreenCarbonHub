import React, { useEffect, useState, useRef } from 'react';
import { Monitor, DollarSign, Home, Settings, Leaf } from 'lucide-react';

const SolarBenefitsCards = () => {
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
    {
      id: 1,
      icon: <Monitor className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Renewable & Clean Source Of Energy',
      description: 'As the Solar Energy is a clean and renewable source, you are helping the environment by reducing carbon footprint and protecting it by choosing solar panels in Hyderabad for your home or office.'
    },
    {
      id: 2,
      icon: <DollarSign className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Solar Energy Reduces Electricity Cost',
      description: 'Rooftop Solar Panels can generate a good amount of electricity that can power up your home, office or industry, helping you to save a lot of money on electricity bills year after year.'
    },
    {
      id: 3,
      icon: <Home className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Adds Value To Your Life',
      description: 'Choosing the rooftop solar energy adds value to your home, office or other spaces and makes it more attractive to the potential buyers. Our experts educate you with all necessary details before starting.'
    },
    {
      id: 4,
      icon: <Settings className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Low Maintenance Cost',
      description: 'Rooftop solar panels require less maintenance and therefore less cost. As they are stable and do not have any moving or rotating parts to generate electricity, thus they require minimum maintenance like cleaning only.'
    },
    {
      id: 5,
      icon: <Leaf className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Eco-Friendly And Reduces CO2 Emissions',
      description: 'Solar Power is an eco-friendly and sustainable energy resource that produces zero emissions. Solar Panels harness the power of the sun to generate electricity, which further used to your requirements.'
    }
  ];

  return (
    <div ref={sectionRef} className="bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-10 lg:mb-12 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          Other Benefits
        </h2>
        
        {/* Responsive grid for all cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 p-6 md:p-8 flex flex-col items-center text-center w-full max-w-sm lg:max-w-none transform hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ 
                minHeight: '400px', 
                height: 'auto',
                animationDelay: `${0.3 + index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="mb-6 md:mb-8 transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 hover:rotate-12">
                  {benefit.icon}
                </div>
              </div>
              <h3 
                className="text-gray-800 font-semibold leading-tight px-2 text-base md:text-lg lg:text-xl mb-4 md:mb-6 transition-all duration-300 hover:text-green-600"
              >
                {benefit.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed text-justify px-2 text-sm md:text-base lg:text-lg flex-grow transition-all duration-300"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarBenefitsCards;