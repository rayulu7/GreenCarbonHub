import React, { useEffect, useState } from "react";
import { Layout, Wrench, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Layout className="w-12 h-12 text-green-600" />,
    title: "Residential Rooftop Solar Panel Layout Design",
    description: "Whether it may be big or medium or small, whatever be your Residential Rooftop Space is, we visit your residential location and provide a perfect rooftop solar panel layout design that best suits for your requirement."
  },
  {
    id: 2,
    icon: <Wrench className="w-12 h-12 text-green-600" />,
    title: "Residential Rooftop Solar Panel Installation",
    description: "Once designing of layout is completed, our Solar system installation team guides you in each and every step of the product selection. Further, we install the whole solar system plant and makes sure it is working properly without any flaws."
  },
  {
    id: 3,
    icon: <CheckCircle className="w-12 h-12 text-green-600" />,
    title: "Residential Rooftop Solar Commissioning",
    description: "Solar Commissioning helps you to ensure that the residential rooftop solar system is installed correctly and safely. Our GreenCarbonHub team of expert solar technicians will visit your rooftop solar power system and make sure that it is operating perfectly."
  }
];

/** Reusable cards with original dimensions and padding */
const ServiceCard = ({ icon, title, desc }) => (
  <article
    className="
      bg-white rounded-2xl shadow-md
      flex flex-col items-center text-center
      w-full max-w-[520px] mx-auto
      lg:w-[379.99px] lg:h-[413.6px]
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-xl hover:-translate-y-2
      hover:bg-[#3A954F]
      cursor-pointer
      group
    "
    style={{
      paddingTop: '60px',
      paddingRight: '50px', 
      paddingBottom: '60px',
      paddingLeft: '60px'
    }}
  >
    <div className="mb-4 text-green-600 group-hover:text-orange-500 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold mb-3 sm:mb-4 text-[#111827] group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p 
      className="text-justify text-[#828282] group-hover:text-white transition-colors duration-300"
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

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`w-full bg-[#EBF3ED] pt-[100px] pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Container */}
      <div className="mx-auto max-w-[1440px] mx-[120px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            What GreenCarbonHub Does?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center items-start gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                marginLeft: index === 0 ? '120px' : '0',
                marginRight: index === 2 ? '120px' : '0'
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}