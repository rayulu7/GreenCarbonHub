import React, { useState } from "react";
import { Laptop, Zap, Waves, Recycle, Cog } from "lucide-react";

const TECHNOLOGIES = [
  {
    id: "aerobic",
    icon: <Laptop className="text-green-600" />,
    title: "Aerobic Technology",
    description:
      "Wastewater has contaminants that require technology to filter. Aerobic Technology uses oxygen to break down organic matter in the waste."
  },
  {
    id: "anaerobic",
    icon: <Zap className="text-green-600" />,
    title: "Anaerobic Technology",
    description:
      "Anaerobic Technology treats wastewater without oxygen using microorganisms, breaking down contaminants into sludge."
  },
  {
    id: "mbbr",
    icon: <Waves className="text-green-600" />,
    title: "MBBR Technology",
    description:
      "The Moving Bed Biofilm Reactor (MBBR) uses biofilm carriers to support microorganisms that break down pollutants in water."
  },
  {
    id: "sbr",
    icon: <Recycle className="text-green-600" />,
    title: "SBR Technology",
    description:
      "Sequencing Batch Reactor (SBR) uses a single tank for all stages of wastewater treatment, filtering and breaking down pollutants."
  },
  {
    id: "mbr",
    icon: <Cog className="text-green-600" />,
    title: "MBR Technology",
    description:
      "Moving Bed Bioreactor (MBR) uses plastic carriers to break down organic matter, making wastewater treatment more efficient."
  }
];

const TechnologiesSection = () => {
  const [activeTech, setActiveTech] = useState(TECHNOLOGIES[0]);

  return (
    <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-8 md:mb-12">
            Technologies Used in Effluent/Sewage Treatment Plants
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#555555]">
            Here are the ETP/STP Treatment Technologies that are used to treat the waste water.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-[380px] flex flex-col gap-4">
            {TECHNOLOGIES.map((tech) => {
              const isActive = activeTech.id === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(tech)}
                  className={`w-full pt-4 pb-5 px-5 text-left text-sm sm:text-base md:text-lg font-bold rounded-2xl transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                    isActive
                      ? "bg-[#3A954F] text-white"
                      : "bg-white text-[#828282] hover:bg-gray-50"
                  }`}
                >
                  {tech.title}
                </button>
              );
            })}
          </div>

          <div className="w-full flex-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:p-12 min-h-[360px] flex flex-col items-center text-center justify-center">
              <div className="mb-6">
                {React.cloneElement(activeTech.icon, {
                  className: "w-16 h-16 sm:w-20 sm:h-20 text-green-600"
                })}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 text-center">
                {activeTech.title}
              </h3>
              <p className="text-base sm:text-lg text-[#333333] leading-relaxed text-center">
                {activeTech.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
