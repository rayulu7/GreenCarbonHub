import React from "react";

export default function Subsidy() {
  return (
    <section className="w-full bg-white">
      {/* Container */}
      <div className="mx-auto max-w-7xl">
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 gap-8 lg:gap-12">
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/subsidy image.jpg"
              alt="Solar Calculator"
              className="w-full max-w-lg lg:max-w-none lg:w-[585px] h-64 sm:h-80 lg:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-1/2 px-0 lg:px-4">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left">
              Subsidy Structure
            </h2>

            {/* Subsidy Details */}
            <div className="space-y-6 sm:space-y-8">
              {/* Residential Subsidy */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#111827] mb-3 sm:mb-4">
                  Subsidy for residential households:
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Rs. 30,000/- per kW up to 2 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Rs. 18,000/- per kW for additional capacity up to 3 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Total subsidy for systems larger than 3 kW capped at Rs. 78,000</span>
                  </li>
                </ul>
              </div>

              {/* Group Housing Subsidy */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#111827] mb-3 sm:mb-4">
                  Subsidy for Group Housing Society/ Resident Welfare Association:
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Rs. 18,000 per kW for common facilities, including EV charging, up to 500 kW capacity (@3 kW per house)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Upper limit inclusive of individual rooftop plants installed by individual residents in the GHS/RWA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Request Button */}
            <div className="flex justify-center lg:justify-start mt-6 sm:mt-8">
              <button
                className="text-white font-semibold rounded-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                style={{
                  backgroundColor: "#3a954f",
                }}
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom padding for container */}
      <div className="pb-16 sm:pb-20 lg:pb-24"></div>
    </section>
  );
}