import React from "react";
import { Settings, Wrench, Cog, Hammer } from "lucide-react";

const WaterManageServices = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Wastewater Treatment Plant Designing",
      description:
        "Greencarbonhub can design a proper Effluent/Sewage Treatment Plant according to your requirements. Our team of experts visit your site to analyze the available space, your requirements, etc. Once proper inputs are gathered, experts will design a well-suited wastewater treatment plant that is optimal and efficient.",
    },
    {
      icon: <Hammer className="w-12 h-12 text-green-600" />,
      title: "Wastewater Treatment Plant Installation",
      description:
        "Once the designing of the effluent/sewage treatment plant is done, we give you a choice of branded components that are cost-effective and long-lasting. Our aim is not only to install the plant but also to ensure the plant lasts for many years without any damage or repairs.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: "Wastewater Treatment Plant Repairing",
      description:
        "Whenever the usage of Effluent/Sewage Treatment Plant is high, due to wear and tear, components require replacement or repair. Our team will fix your plant issues and ensure it is running properly.",
    },
    {
      icon: <Cog className="w-12 h-12 text-green-600" />,
      title: "Wastewater Treatment Plant Maintenance",
      description:
        "Most Housing Societies and Industrial Effluent/Sewage Treatment Plants are large and require regular maintenance, or else the efficiency of the plant decreases. To improve efficiency and increase the plant's life, we offer preventive maintenance.",
    },
  ];

  return (
    <section className="bg-[#EBF3ED] py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">``          <h2 className="text-[32px] font-bold text-[#333333]">
            Effluent/Sewage Treatment Plant Services Include:
          </h2>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid grid-cols-1 gap-y-12
            md:[grid-template-columns:585px_585px] md:gap-x-[30px]
            justify-center place-items-center
          "
        >
          {services.map((service, i) => (
            <article
              key={i}
              className="
                group relative bg-white rounded-2xl
                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                w-full md:w-[585px] h-[389.6px] p-6
                flex flex-col justify-start
                transition-transform duration-300
                focus-within:outline-none
              "
              tabIndex={-1}
            >
              {/* hover/focus animation & polish */}
              <div
                className="
                  absolute inset-0 rounded-2xl pointer-events-none
                  transition-shadow duration-300
                  group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  group-focus-within:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                "
                aria-hidden="true"
              />
              <div
                className="
                  absolute inset-0 rounded-2xl pointer-events-none
                  opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
                  transition-opacity duration-300
                  sheen
                "
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="flex justify-center mb-5">{service.icon}</div>

              {/* Title */}
              <h3
                className="
                  text-[20px] font-bold text-center text-[#111827] mb-4
                  transition-colors duration-200 cursor-pointer
                  group-hover:text-green-600 group-focus-within:text-green-600
                "
                tabIndex={0}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-7 text-justify text-[#333333]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Local styles for sheen effect only */}
      <style>{`
        .sheen::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 30%,
            rgba(255,255,255,0.18) 45%,
            rgba(255,255,255,0) 60%
          );
          transform: translateX(-120%);
          transition: transform 600ms ease;
          pointer-events: none;
        }
        .group:hover .sheen::before,
        .group:focus-within .sheen::before {
          transform: translateX(120%);
        }
      `}</style>
    </section>
  );
};

export default WaterManageServices;
