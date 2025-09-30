import React from "react";

export default function Subsidy() {
  return (
    <section className="w-full bg-white">
      {/* Container */}
      <div className="mx-auto max-w-[1440px]">
        {/* Content Section */}
        <div className="flex items-center justify-center py-16" style={{ marginLeft: '120px', marginRight: '120px' }}>
          {/* Left Section - Image */}
          <div className="pt-[15px] pr-[15px] pb-[15px]">
            <img
              src="/subsidy image.jpg"
              alt="Solar Calculator"
              className="w-[585px] h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right Section - Content */}
          <div className="w-[615px] px-[15px]">
            {/* Heading */}
            <h2 className="text-[32px] font-bold text-[#111827] mb-[10px] mt-[15px]">
              Subsidy Structure
            </h2>

            {/* Subsidy Details */}
            <div className="space-y-4">
              {/* Residential Subsidy */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">
                  Subsidy for residential households:
                </h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Rs. 30,000/- per kW up to 2 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Rs. 18,000/- per kW for additional capacity up to 3 kW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Total subsidy for systems larger than 3 kW capped at Rs. 78,000</span>
                  </li>
                </ul>
              </div>

              {/* Group Housing Subsidy */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">
                  Subsidy for Group Housing Society/ Resident Welfare Association:
                </h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Rs. 18,000 per kW for common facilities, including EV charging, up to 500 kW capacity (@3 kW per house)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Upper limit inclusive of individual rooftop plants installed by individual residents in the GHS/RWA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Request Button */}
            <div className="flex justify-center mt-8">
              <button
                className="text-white font-semibold rounded-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                width: "283.54px",
                height: "60px",
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
      <div className="pb-[100px]"></div>
    </section>
  );
}