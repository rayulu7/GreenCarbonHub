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
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center">
          {/* Content - Centered */}
          <div className={`
            w-full max-w-2xl
            transition-all duration-700
            ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
              Why <span className="text-green-600">GCH</span> ?
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-xl shadow-md cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onTouchStart={() => setActiveIndex(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                        transition-all duration-300
                        ${isActive ? 'bg-green-600' : 'bg-green-100'}
                      `}>
                        <Check className={`
                          w-5 h-5 md:w-6 md:h-6 transition-colors duration-300
                          ${isActive ? 'text-white' : 'text-green-600'}
                        `}/>
                      </div>
                    </div>
                    <p className="text-base md:text-lg font-medium text-gray-800 flex-1">{benefit}</p>
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
