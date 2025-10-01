import React, { useEffect, useState } from "react";

const components = [
  {
    id: 1,
    name: "Mono Crystalline",
    image: "/mono-crystalline.jpg",
    description: "High-efficiency solar panels with superior performance"
  },
  {
    id: 2,
    name: "String Inverter",
    image: "/string-inverter.jpg", 
    description: "Advanced power conversion technology"
  },
  {
    id: 3,
    name: "Mounting Structure",
    image: "/mounting-structure.jpg",
    description: "Durable and weather-resistant mounting solutions"
  }
];

export default function Components() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className={`w-full bg-white py-8 md:py-12 lg:py-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            Components
          </h2>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {components.map((component) => (
            <div 
              key={component.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm lg:max-w-none"
              style={{
                maxWidth: "379.99px",
                height: "auto",
                minHeight: "350px"
              }}
            >
              {/* Image Section */}
              <div 
                className="w-full h-48 sm:h-64 lg:h-80"
              >
                <img
                  src={component.image}
                  alt={component.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading Section */}
              <div 
                className="flex items-center justify-center p-4 md:p-6"
                style={{
                  minHeight: "80px"
                }}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1F2220] text-center">
                  {component.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}