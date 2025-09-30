import React from "react";
import { Laptop, Zap, Waves, Recycle, Cog } from "lucide-react";

const TopCard = ({ icon, title, desc }) => (
  <article className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center w-full max-w-[379px] p-4 sm:p-5 lg:p-[15px]">
    <div className="mb-4 text-green-600">
      {React.cloneElement(icon, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
    </div>
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-[#111827] mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-[15px] sm:text-[16px] leading-7 text-[#333333] text-justify">
      {desc}
    </p>
  </article>
);

const BottomCard = ({ icon, title, desc }) => (
  <article className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center w-full max-w-[585px] p-4 sm:p-5 lg:p-[15px]">
    <div className="mb-4 text-green-600">
      {React.cloneElement(icon, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
    </div>
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-[#111827] mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-[15px] sm:text-[16px] leading-7 text-[#333333] text-justify">
      {desc}
    </p>
  </article>
);

const WaterTechnologiesSection = () => {
  return (
    <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14 overflow-x-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-2">
            Technologies Used in Effluent/Sewage Treatment Plants
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#555555]">
            Here are the ETP/STP Treatment Technologies that are used to treat the wastewater.
          </p>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 justify-center mb-8 sm:mb-10 md:mb-12">
          <TopCard
            icon={<Laptop />}
            title="Aerobic Technology"
            desc="Wastewater has contaminants that require technology to filter. Aerobic Technology uses oxygen to break down organic matter in the waste."
          />
          <TopCard
            icon={<Zap />}
            title="Anaerobic Technology"
            desc="Anaerobic Technology treats wastewater without oxygen using microorganisms, breaking down contaminants into sludge."
          />
          <TopCard
            icon={<Waves />}
            title="MBBR Technology"
            desc="The Moving Bed Biofilm Reactor (MBBR) uses biofilm carriers to support microorganisms that break down pollutants in water."
          />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-8 justify-center">
          <BottomCard
            icon={<Recycle />}
            title="SBR Technology"
            desc="Sequencing Batch Reactor (SBR) uses a single tank for all stages of wastewater treatment, filtering and breaking down pollutants."
          />
          <BottomCard
            icon={<Cog />}
            title="MBR Technology"
            desc="Moving Bed Bioreactor (MBR) uses plastic carriers to break down organic matter, making wastewater treatment more efficient."
          />
        </div>
      </div>
    </section>
  );
};

export default WaterTechnologiesSection;