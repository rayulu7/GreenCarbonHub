import React, { useState, useEffect } from 'react';
import OtherBenefits from './OtherBenifits.jsx';
import GCHBenefits from './GCHBenefits.jsx';

import FAQ from './FAQ.jsx';
import OurClients from './OurClients.jsx';
import { Building, DollarSign, Leaf, Factory, GraduationCap, Pill, Snowflake, Cross, Egg } from "lucide-react";
import Weprovide from './WeProvide.jsx';

/** Reusable cards with original dimensions and padding */
const TopCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[507.2px]
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

/** Smaller cards for the main benefits section */
const SmallCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[389.6px]
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

/** Medium cards for the main benefits section */
const MediumCard = ({ icon, title, desc }) => (
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

const IndustrialCommercial = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* VIEW FINANCE OPTIONS Button Section */}
      <section className="w-full bg-white pt-[120px] pb-[80px]">
        <div className="flex justify-center">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ borderRadius: '25px' }}
          >
            VIEW FINANCE OPTIONS
          </button>
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
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-2">
                Why Choose An Industrial Rooftop Solar Power System For Your Business?
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
                Industries like manufacturing, food processing, fabrication, and others require high electricity demands. Industrial rooftop solar power systems offer a renewable and cost-effective alternative to thermal power. Businesses benefit significantly from industrial rooftop solar installations.
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
              <MediumCard
                icon={<Leaf />}
                title="Environmental Benefits"
                desc="By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030."
              />
              <MediumCard
                icon={<DollarSign />}
                title="Economical Benefits"
                desc="By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
              />
              <MediumCard
                icon={<Building />}
                title="National Interest"
                desc="India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Benefits Section */}
      <OtherBenefits type="industrial" cardHeight={84} />
      
      {/* Industrial Applications Section */}
      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        {/* Outer container – 120px side padding at xl, smaller on mobile */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          {/* Inner stage fixed at 1200 on desktop; fluid on small screens */}
          <div className="mx-auto w-full lg:w-[1200px]">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#333333] mb-2">
                Rooftop Solar Applications for Industrial & Commercial Sectors
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
                Industrial and commercial rooftop solar installations have become more efficient and cost-effective, making them a viable option for various sectors. Rooftop solar panel installation not only helps reduce electricity costs but also provides sustainable energy solutions for different industries.
              </p>
            </div>

            {/* 6 CARDS – matching the image layout */}
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
                icon={<Factory />}
                title="Rooftop Solar For Manufacturing Industries"
                desc="Various manufacturing industries such as Aerospace, Automobile, textile, Chemicals, Consumer Goods, Agricultural Machinery, etc. can utilize Rooftop Solar Energy to power their devices and components. This includes manufacturing machines, machine tools, equipment, lighting systems, and HVAC systems."
              />
              <TopCard
                icon={<GraduationCap />}
                title="Rooftop Solar For Educational Institutes"
                desc="Educational institutes like Schools, Colleges, and Private Institutes house computer laboratories, science laboratories, research, and development centers that consume a significant amount of electricity. Installing Rooftop Solar Energy in these institutions can lead to substantial cost savings on these devices."
              />
              <TopCard
                icon={<Pill />}
                title="Rooftop Solar For Pharma Companies"
                desc="Pharma Companies are large commercial spaces where electricity and water consumption are critical. By installing Solar Power Plants in Pharma Companies, a considerable amount of money can be saved while powering their machinery and devices."
              />
              <TopCard
                icon={<Snowflake />}
                title="Rooftop Solar For Cold Storages"
                desc="Cold Storages and Warehouses used by Manufacturers, Importers, Exporters, and Farmers can use Rooftop Solar Energy to power cooling systems, lights, fans, and other equipment."
              />
              <TopCard
                icon={<Cross />}
                title="Rooftop Solar For Hospitals"
                desc="Hospitals require a significant amount of energy for medical devices, lighting, HVAC systems, and more. Rooftop Solar Panels can greatly reduce energy costs while ensuring uninterrupted power supply."
              />
              <TopCard
                icon={<Egg />}
                title="Rooftop Solar For Hatcheries"
                desc="Hatcheries use machines such as incubators and air conditioners, consuming significant electricity. Installing Rooftop Solar Panels can help hatcheries save costs while operating sustainably."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* GCH Benefits Section */}
      <GCHBenefits />
      
      {/* We Provide Section */}
      <Weprovide type="industrial" />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Our Clients Section */}
      <OurClients />
    </div>
  );
};

export default IndustrialCommercial;