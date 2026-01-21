import React, { useEffect, useState } from "react";
import { Layout, Wrench, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Layout className="text-green-600" />,
    title: "Residential Rooftop Solar Panel Layout Design",
    description: "Whether it may be big or medium or small, whatever be your Residential Rooftop Space is, we visit your residential location and provide a perfect rooftop solar panel layout design that best suits for your requirement."
  },
  {
    id: 2,
    icon: <Wrench className="text-green-600" />,
    title: "Residential Rooftop Solar Panel Installation",
    description: "Once designing of layout is completed, our Solar system installation team guides you in each and every step of the product selection. Further, we install the whole solar system plant and makes sure it is working properly without any flaws."
  },
  {
    id: 3,
    icon: <CheckCircle className="text-green-600" />,
    title: "Residential Rooftop Solar Commissioning",
    description: "Solar Commissioning helps you to ensure that the residential rooftop solar system is installed correctly and safely. Our GreenCarbonHub team of expert solar technicians will visit your rooftop solar power system and make sure that it is operating perfectly."
  }
];

const ServicesTabs = ({ items }) => {
  const [activeService, setActiveService] = useState(items[0]);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
      <div className="w-full lg:w-[400px] space-y-4 lg:mt-8">
        {items.map((service) => {
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
              className: "w-16 h-16 sm:w-20 sm:h-20 text-green-600",
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
  );
};

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`w-full bg-[#EBF3ED] pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 lg:pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-6 xl:px-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
            What <span className="text-green-600">GreenCarbon</span><span className="text-orange-500">Hub</span> Does?
          </h2>
        </div>

        <ServicesTabs items={services} />
      </div>
    </section>
  );
}
