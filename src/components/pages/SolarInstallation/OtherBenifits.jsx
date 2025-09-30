import React, { useEffect, useState } from "react";
import { Sun, DollarSign, Wrench, Heart, Clock } from "lucide-react";

const residentialBenefits = [
  {
    id: 1,
    name: "Renewable & Clean Energy",
    icon: <Sun className="w-16 h-16 text-yellow-500" />,
    title: "Renewable & Clean Source of Energy",
    description: "As Solar Energy is a clean and renewable source, you are helping the environment by reducing carbon footprint and protecting the Earth."
  },
  {
    id: 2,
    name: "Reduces Electricity Cost",
    icon: <DollarSign className="w-16 h-16 text-blue-500" />,
    title: "Solar Energy Reduces Electricity Cost",
    description: "Rooftop Solar Panels can generate a good amount of electricity to power your home, which helps you to save energy bills each year."
  },
  {
    id: 3,
    name: "Low Maintenance",
    icon: <Wrench className="w-16 h-16 text-green-500" />,
    title: "Low Maintenance",
    description: "As the solar panels are stable, they do not require any high maintenance services, which saves time and money."
  },
  {
    id: 4,
    name: "Adds Value to Life",
    icon: <Heart className="w-16 h-16 text-red-500" />,
    title: "Adds Value to Your Life",
    description: "Choosing the Rooftop Solar Energy adds value to your home and makes it more attractive to potential buyers."
  },
  {
    id: 5,
    name: "High Life Span",
    icon: <Clock className="w-16 h-16 text-purple-500" />,
    title: "High Life Span",
    description: "Solar panels have a lifespan of 25+ years with minimal degradation, providing decades of reliable clean energy generation for your home."
  }
];

const industrialBenefits = [
  {
    id: 1,
    name: "Renewable & Clean Source Of Energy",
    icon: <Sun className="w-16 h-16 text-yellow-500" />,
    title: "Renewable & Clean Source Of Energy",
    description: "Industrial solar energy is a clean and renewable source that helps businesses reduce their carbon footprint and contribute to environmental sustainability."
  },
  {
    id: 2,
    name: "Solar Energy Reduces Electricity Cost",
    icon: <DollarSign className="w-16 h-16 text-blue-500" />,
    title: "Solar Energy Reduces Electricity Cost",
    description: "Industrial rooftop solar panels can generate significant electricity to power manufacturing facilities, reducing operational costs and energy bills."
  },
  {
    id: 3,
    name: "Maintenance Of Industrial Rooftop Solar Panels Is Low",
    icon: <Wrench className="w-16 h-16 text-green-500" />,
    title: "Maintenance Of Industrial Rooftop Solar Panels Is Low",
    description: "As the solar panels are stable, they do not require any high maintenance services, which saves time and money."
  },
  {
    id: 4,
    name: "Eco-Friendly And Reduces CO2 Emissions",
    icon: <Heart className="w-16 h-16 text-red-500" />,
    title: "Eco-Friendly And Reduces CO2 Emissions",
    description: "Industrial solar installations help businesses reduce CO2 emissions and demonstrate environmental responsibility to stakeholders and customers."
  }
];

export default function OtherBenefits({ type = "residential", cardHeight = 60 }) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Select benefits based on type
  const benefits = type === "industrial" ? industrialBenefits : residentialBenefits;
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  useEffect(() => {
    setIsVisible(true);
    setActiveBenefit(benefits[0]); // Reset to first benefit when type changes
  }, [type]);

  return (
    <section className={`w-full bg-white pt-[100px] pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Container */}
      <div className="mx-auto max-w-[1440px] mx-[120px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            Other Benefits
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex items-start justify-between gap-8" style={{ marginLeft: '120px', marginRight: '120px' }}>
          {/* Left Section - Benefit Buttons */}
          <div style={{ width: '305.99px' }}>
            <div className="space-y-[15px]">
              {benefits.map((benefit) => (
                <button
                  key={benefit.id}
                  onClick={() => setActiveBenefit(benefit)}
                  className={`text-left text-[18px] font-bold transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                    activeBenefit.id === benefit.id
                      ? 'bg-[#3A954F] text-white'
                      : 'bg-white text-[#828282] hover:bg-gray-50'
                  }`}
                  style={{ 
                    borderRadius: '10px',
                    width: '305.99px',
                    height: `${cardHeight}px`,
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    boxSizing: 'border-box'
                  }}
                >
                  {benefit.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Benefit Details */}
          <div style={{ width: '789.99px' }}>
            <div 
              className="bg-white rounded-lg shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] text-center"
              style={{ 
                width: '789.99px',
                height: '375px',
                padding: '16px',
                boxSizing: 'border-box',
                color: '#828282',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {activeBenefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-[24px] font-bold text-[#111827] text-center mb-6">
                {activeBenefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-[16px] text-[#333333] text-center leading-7">
                {activeBenefit.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}