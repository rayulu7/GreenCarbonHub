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
      className={`w-full bg-white pt-[100px] pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Container */}
      <div className="mx-auto max-w-[1440px] px-[15px] mx-[120px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            Components
          </h2>
        </div>

        {/* Components Grid */}
        <div className="flex justify-center gap-8">
          {components.map((component) => (
            <div 
              key={component.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{
                width: "379.99px",
                height: "415.34px" // 318.54 + 96.8
              }}
            >
              {/* Image Section */}
              <div 
                className="w-full"
                style={{
                  height: "318.54px"
                }}
              >
                <img
                  src={component.image}
                  alt={component.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading Section */}
              <div 
                className="flex items-center justify-center"
                style={{
                  height: "96.8px"
                }}
              >
                <h3 className="text-[24px] font-bold text-[#1F2220] text-center">
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