import React from 'react';
import CTAButtons from "./CTAButtons.jsx";
import OtherBenefits from "./OtherBenifits.jsx";
import WhySolarResidential from "./WhySolarResidential.jsx";
import WhatWeDoHousingSociety from "./WhatWeDoHousingSociety.jsx";
import WhyChooseGCH from "./WhyChooseGCH.jsx";
import FAQ from "./FAQ.jsx";
import OurClients from "./OurClients.jsx";
import { Building, Users, DollarSign, Leaf, Zap, Shield } from "lucide-react";

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

const HousingSociety = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* CTA Button Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6" style={{ marginLeft: '120px', marginRight: '120px' }}>
          <div className="flex justify-center items-center">
            <button 
              className="bg-[#3A954F] hover:bg-[#2d7a3d] text-white font-semibold px-8 py-4 text-lg transition-colors duration-200"
              style={{ borderRadius: '25px' }}
            >
              VIEW FINANCE OPTIONS
            </button>
          </div>
        </div>
      </section>
      
      {/* Solar Energy Evolution Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6" style={{ marginLeft: '120px', marginRight: '120px' }}>
          <div className="text-center mb-8">
            <h2 className="text-[32px] font-bold text-[#111827] mb-6">
              SOLAR ENERGY AND ITS EVOLUTION
            </h2>
            <p 
              className="text-[#333333] text-left max-w-4xl mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              Solar is playing a crucial role in changing the global energy landscape. The evolution of solar energy is fast changing the face of many cities and towns. Earlier, installing solar panels on roofs was expensive and not even much efficient. But now they are affordable and highly efficient, which has increased its applications and importance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        {/* Outer container – 120px side padding at xl, smaller on mobile */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          {/* Inner stage fixed at 1200 on desktop; fluid on small screens */}
          <div className="mx-auto w-full lg:w-[1200px]">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-4">
                Benefits of Choosing A Rooftop Solar Power System For Housing Society?
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
                Housing Socieity's Maintenance associations can halt the fixed expenditure and also avail power at a fixed cost for atleast 25 years by switching over to rooftop solar power system, and at the same time they can get environment friendly power. Associations has to incur heavy monthly expenditure to maintain the power needs of common areas like lifts, corridors, water supply, lighting etc. Not only they charged as per commercial rates, they are also subject to periodical upward revision. Benefits of choosing a rooftop solar power system for housing society includes
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
                desc="By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030."
              />
              <TopCard
                icon={<DollarSign />}
                title="Economical Benefits"
                desc="By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
              />
              <TopCard
                icon={<Building />}
                title="National Interest"
                desc="India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Benefits Section */}
      <OtherBenefits />
      
      {/* Why Solar For Residential Section */}
      <WhySolarResidential />
      
      {/* What We Do Section */}
      <WhatWeDoHousingSociety />
      
      {/* Why Choose GCH Section */}
      <WhyChooseGCH />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Our Clients Section */}
      <OurClients />
    </div>
  );
};

export default HousingSociety;