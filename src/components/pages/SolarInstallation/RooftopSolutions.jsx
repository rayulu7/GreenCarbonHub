import React, { useEffect, useState } from "react";

const solutions = [
  {
    id: 1,
    name: "Standard",
    image: "/standard.jpeg",
    description: "Mounting Dimensions - Back Leg 3 Feet and Front Leg 2 Feet"
  },
  {
    id: 2,
    name: "Elevated Structure",
    image: "/Elevated.jpeg",
    description: "Mounting Dimensions - Back Leg 7 Feet and Front Leg 6 Feet"
  },
  {
    id: 3,
    name: "High-Rise Structure",
    image: "/Highrise.jpeg",
    description: "Mounting Dimensions - Back Leg 10 Feet and Front Leg 9 Feet"
  },
  {
    id: 4,
    name: "Car Port",
    image: "/Carport.jpeg",
    description: "Solar car port structure"
  },
  {
    id: 5,
    name: "Shed Mounted",
    image: "/shed.webp",
    description: "Shed mounted solar panels"
  }
];

export default function RooftopSolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`w-full bg-white py-12 md:py-16 lg:py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            Our rooftop solutions
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
          {/* Left Section - Solution Buttons */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-3 md:space-y-4">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution)}
                  className={`w-full pt-3 pb-4 px-4 text-left text-sm sm:text-base md:text-lg font-bold transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                    activeSolution.id === solution.id
                      ? 'bg-[#3A954F] text-white'
                      : 'bg-white text-[#828282] hover:bg-gray-50'
                  }`}
                  style={{ borderRadius: '10px' }}
                >
                  {solution.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative">
              <img
                src={activeSolution.image}
                alt={activeSolution.name}
                className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-lg"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute bottom-0 left-0 w-full h-full rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(31, 34, 32, 0) 30.39%, rgba(31, 34, 32, 0.8) 73.54%)'
                }}
              ></div>
            </div>
            
            {/* Image Overlay */}
            <div className="absolute bottom-4 md:bottom-8 left-2 md:left-4 text-white p-2 md:p-4 rounded-lg">
              <h3 className="text-base md:text-lg font-bold mb-1">{activeSolution.name}</h3>
              <p className="text-xs md:text-sm">{activeSolution.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}