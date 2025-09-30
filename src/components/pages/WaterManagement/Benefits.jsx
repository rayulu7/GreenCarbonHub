import React from "react";

const benefits = [
  "Purifies your Wastewater by removing contaminants & harmful substances.",
  "As the purified wastewater is released into water bodies, the aquatic ecosystem will be preserved.",
  "It even prevents Soil, underground water table contamination.",
  "The treated sewage wastewater can be reused for several purposes like cleaning, flushing, etc. in domestic and industrial spaces.",
  "Treating the industrial wastewater before releasing into the atmosphere will reduce the Greenhouse Gas Emissions also."
];

const BenefitsSection = () => {
  return (
    <section className="py-8 bg-white">
      {/* Outer Container */}
      <div
        className="
          max-w-4xl mx-auto
          px-4 md:px-6 pt-8 md:pt-12
          bg-[#f7f7f7]
          rounded-[15px]
          shadow-[0_8px_30px_rgba(0,0,0,0.1)]
        "
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-[20px]">
          Benefits of Effluent/Sewage Treatment Plant
        </h2>
        <p className="text-base text-center text-gray-600 mb-8">
          Benefits of Effluent/Sewage Treatment Plants are many, they are
        </p>

        {/* Benefits List */}
        <ul className="space-y-4">
          {benefits.map((text, i) => (
            <li key={i} className="flex justify-center">
              <div
                className="
                  flex items-center
                  w-full max-w-4xl
                  bg-white border border-gray-300
                  rounded-lg shadow-sm
                  px-4 md:px-6 py-4 md:py-6
                  hover:shadow-md transition
                "
              >
                {/* Icon */}
                <span className="mr-4 text-blue-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 10h7l-3 3 3 3h-7" />
                    <path d="M3 12h10" />
                    <path d="M3 12a4 4 0 0 1 4-4h3" />
                  </svg>
                </span>

                {/* Text */}
                <p className="text-[16px] leading-[24px] text-gray-800 m-0">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
