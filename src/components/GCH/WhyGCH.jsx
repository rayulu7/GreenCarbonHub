import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const WhyGCHSection = () => {
  const benefits = [
    "Standardised scope of work",
    "Lowest industry prices", 
    "Transparent and Haggle-free purchase",
    "Get assured returns from sustainable projects"
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Observe scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Animation triggered!'); // Debug log
          setHasAnimated(true); // play animation once
          observer.disconnect(); // stop observing (keeps it visible)
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50"
      onMouseEnter={() => setHasAnimated(true)} // also trigger on hover
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative h-[482px] overflow-hidden rounded-2xl bg-white">
            <img 
              src="/whyGCH.webp"
              alt="Sustainable energy landscape with wind turbines and solar panels"
              className={`w-full h-full object-cover
                ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
          </div>

          {/* Right side - Content */}
          <div className={`
            transition-all duration-700
            ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            <h2 className="text-5xl font-bold text-gray-800 mb-12">
              Why <span className="text-green-600">GCH</span> ?
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onTouchStart={() => setActiveIndex(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center 
                        transition-all duration-300
                        ${isActive ? 'bg-green-600' : 'bg-green-100'}
                      `}>
                        <Check className={`
                          w-6 h-6 transition-colors duration-300
                          ${isActive ? 'text-white' : 'text-green-600'}
                        `}/>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-gray-800 flex-1">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGCHSection;
