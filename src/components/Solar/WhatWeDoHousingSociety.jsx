import React, { useEffect, useState } from "react";
import { Layout, Wrench, CheckCircle } from "lucide-react";

const housingServices = [
  {
    id: "layout",
    icon: <Layout className="text-green-600" />,
    title: "Rooftop Solar Panel Layout Design For Housing Society",
    description:
      "Whether it may be big or small, whatever size is your Housing Society, we visit your location and provide a perfect rooftop Solar panel layout design that is best in Hyderabad."
  },
  {
    id: "installation",
    icon: <Wrench className="text-green-600" />,
    title: "Rooftop Solar Panel Installation For Housing Society",
    description:
      "Once designing of layout is completed, our team of Solar System installers guides you in each and every step of the product selection. Further, we install the whole solar system without any flaws."
  },
  {
    id: "commissioning",
    icon: <CheckCircle className="text-green-600" />,
    title: "Rooftop Solar Commissioning For Housing Society",
    description:
      "Solar Commissioning for Housing Society helps you to ensure the rooftop solar system installed correctly. Our team of expert solar technicians visit your space & confirms your solar system."
  }
];

export default function WhatWeDoHousingSociety() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(housingServices[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`w-full bg-white pt-[100px] pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] text-center">
            What We Do?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-[380px] flex flex-col gap-4 lg:mt-4">
            {housingServices.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full pt-4 pb-5 px-5 text-left text-sm sm:text-base md:text-lg font-bold rounded-2xl transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                    isActive
                      ? "bg-[#3A954F] text-white"
                      : "bg-white text-[#828282] hover:bg-gray-50"
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          <div className="w-full flex-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:p-12 min-h-[360px] flex flex-col items-center text-center justify-center">
              <div className="mb-6">
                {React.cloneElement(activeService.icon, {
                  className: "w-16 h-16 sm:w-20 sm:h-20 text-green-600"
                })}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4">
                {activeService.title}
              </h3>
              <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
