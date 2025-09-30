import React from "react";

export default function HousingSocietyInvestment() {
  return (
    <section className="w-full bg-white">
      {/* Container */}
      <div className="mx-auto max-w-[1440px]">
        {/* Content Section */}
        <div className="flex items-center justify-center py-16" style={{ marginLeft: '120px', marginRight: '120px' }}>
          {/* Left Section - Image */}
          <div className="pt-[15px] pr-[15px] pb-[15px]">
            <img
              src="/Housing-Society-Image.jpg"
              alt="Housing Society Solar Installation"
              className="w-[585px] h-[400px] object-cover rounded-lg"
            />
          </div>
          {/* Right Section - Content */}
          <div className="w-[615px] px-[15px]">
            {/* Heading */}
            <h2 className="text-[32px] font-bold text-[#111827] mb-[10px] mt-[15px]">
              What You'll Invest As The Upfront Cost Will Be Recovered Within 3 To 5 Years
            </h2>
            {/* Content */}
            <div className="space-y-4">
              <p className="text-[#333333] text-[16px] leading-relaxed">
                Housing Socieities' maintenance associations can significantly reduce the fixed expenditure and also avail power at a fixed cost for atleast 25 years by switching over to rooftop solar power system, and at the same time they can get environment friendly power. Associations have to incur heavy monthly expenditure to maintain the power needs of common areas like lifts, corridors, water supply, lighting etc. Not only they are charged as per commercial rates, they are also subject to periodical upward revision.
              </p>
              <p className="text-[#333333] text-[16px] leading-relaxed">
                Maintenance associations can put a stop to this fixed expenditure and also avail power at a fixed cost for atleast 25 years by switching over to solar power.
              </p>
            </div>
            {/* Book Consultation Button */}
            <div className="flex justify-center mt-8">
              <button
                className="text-white font-semibold rounded-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
                style={{
                  width: "283.54px",
                  height: "60px",
                  backgroundColor: "#3a954f",
                }}
              >
                Book consultation
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