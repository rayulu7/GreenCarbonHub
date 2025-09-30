import React from 'react';
import CTAButtons from "./CTAButtons.jsx";
import WhySolarResidential from "./WhySolarResidential.jsx";
import WhyChooseGCH from "./WhyChooseGCH.jsx";
import FAQ from "./FAQ.jsx";
import OurClients from "./OurClients.jsx";
import OtherBenefits from "./OtherBenifits.jsx";
import Subsidy from "./Subsidy.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import { Home, DollarSign, Leaf, Zap, Shield, Settings } from "lucide-react";

/** Reusable cards with original dimensions and padding */
const TopCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[413.6px]
    "
    style={{
      paddingTop: '60px',
      paddingRight: '50px', 
      paddingBottom: '60px',
      paddingLeft: '60px'
    }}
  >
    <div className="mb-4 text-green-600">
      {React.cloneElement(icon, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
    </div>
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-[#111827] mb-3 sm:mb-4">
      {title}
    </h3>
    <p 
      className="text-[#828282] text-justify"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: '30px'
      }}
    >
      {desc}
    </p>
  </article>
);

const BottomCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[620px] mx-auto
      lg:w-[585px] lg:h-[341.6px]
      p-4 sm:p-5 lg:p-[15px]
    "
  >
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

const Residential = () => {
  return (
    <div className="min-h-screen bg-white">
      <CTAButtons />
      
      {/* Benefits Section */}
      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        {/* Outer container – 120px side padding at xl, smaller on mobile */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          {/* Inner stage fixed at 1200 on desktop; fluid on small screens */}
          <div className="mx-auto w-full lg:w-[1200px]">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-2">
                Benefits of Choosing Rooftop Solar Power for Homes
              </h2>
              <p 
                className="text-[#000000] mb-5 text-left"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0px 0px 5px'
                }}
              >
                Residential Rooftop Solar Panels have become more efficient and affordable with its vast benefits and government subsidies, making them a viable option for various types of homes, from single-family houses to multi-unit dwellings. Rooftop solar panel installation in Hyderabad not only helps you get free electricity but also helps you to earn money on each unit your solar power system produces.
              </p>
            </div>

            {/* 3 CARDS ONLY – matching the image layout */}
            <div
              className="
                grid place-items-center
                gap-y-8 sm:gap-y-10
                sm:grid-cols-2 sm:gap-x-6
                lg:grid-cols-3
                lg:gap-x-8
                lg:justify-center
              "
            >
              <TopCard
                icon={<Leaf />}
                title="Environmental Benefits"
                desc="By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030 as part of mission net zero."
              />
              <TopCard
                icon={<DollarSign />}
                title="Economical Benefits"
                desc="By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
              />
              <TopCard
                icon={<Home />}
                title="National Interest"
                desc="India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Benefits Section */}
      <OtherBenefits />
      
      {/* Subsidy Structure Section */}
      <Subsidy />
      
      {/* What GreenCarbonHub Does Section */}
      <WhatWeDo />
      
      {/* Why Solar For Residential Section */}
      <WhySolarResidential />
      
      {/* Why Choose GCH Section */}
      <WhyChooseGCH />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Our Clients Section */}
      <OurClients />
    </div>
  );
};

export default Residential;