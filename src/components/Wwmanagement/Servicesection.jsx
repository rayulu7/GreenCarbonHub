import React, { useState } from "react";
import { Settings, Wrench, Cog, Hammer } from "lucide-react";

const SERVICE_ITEMS = [
  {
    id: "design",
    icon: <Settings className="text-green-600" />,
    title: "Wastewater Treatment Plant Designing",
    description:
      "Greencarbonhub can design a proper Effluent/Sewage Treatment Plant according to your requirements. Our team of experts visit your site to analyze the available space, your requirements, etc. Once proper inputs are gathered, experts will design a well-suited wastewater treatment plant that is optimal and efficient."
  },
  {
    id: "installation",
    icon: <Hammer className="text-green-600" />,
    title: "Wastewater Treatment Plant Installation",
    description:
      "Once the designing of the effluent/sewage treatment plant is done, we give you a choice of branded components that are cost-effective and long-lasting. Our aim is not only to install the plant but also to ensure the plant lasts for many years without any damage or repairs."
  },
  {
    id: "repairing",
    icon: <Wrench className="text-green-600" />,
    title: "Wastewater Treatment Plant Repairing",
    description:
      "Whenever the usage of Effluent/Sewage Treatment Plant is high, due to wear and tear, components require replacement or repair. Our team will fix your plant issues and ensure it is running properly."
  },
  {
    id: "maintenance",
    icon: <Cog className="text-green-600" />,
    title: "Wastewater Treatment Plant Maintenance",
    description:
      "Most Housing Societies and Industrial Effluent/Sewage Treatment Plants are large and require regular maintenance, or else the efficiency of the plant decreases. To improve efficiency and increase the plant's life, we offer preventive maintenance."
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(SERVICE_ITEMS[0]);

  return (
    <section className="bg-[#EBF3ED] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333]">
            Effluent/Sewage Treatment Plant Services Include:
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-[380px] flex flex-col gap-4">
            {SERVICE_ITEMS.map((service) => {
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
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 text-center">
                {activeService.title}
              </h3>
              <p className="text-base sm:text-lg text-[#333333] leading-relaxed text-center">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
