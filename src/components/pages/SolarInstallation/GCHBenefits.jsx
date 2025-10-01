import React from "react";
import {
  DollarSign,
  Users,
  TrendingDown,
  Home,
  CheckCircle,
  Settings,
} from "lucide-react";

const GCHBenefits = () => {
  const benefits = [
    { id: 1, icon: <DollarSign className="w-12 h-12 text-green-600" />, title: "Easy Finance Options" },
    { id: 2, icon: <Users className="w-12 h-12 text-green-600" />, title: "Free Consultancy" },
    { id: 3, icon: <TrendingDown className="w-12 h-12 text-green-600" />, title: "Lowest Industry Prices" },
    { id: 4, icon: <Home className="w-12 h-12 text-green-600" />, title: "Transparent & Haggle-free purchase" },
    { id: 5, icon: <CheckCircle className="w-12 h-12 text-green-600" />, title: "Standardised scope of work" },
    { id: 6, icon: <Settings className="w-12 h-12 text-green-600" />, title: "Choice of Branded Components" },
  ];

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#111827] text-center font-bold mb-4 md:mb-6 lg:mb-8">
          Why Should You Choose GCH for Your Rooftop Solar Power Project?
        </h2>

        <p className="text-center mx-auto max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#555] font-sans mb-6 md:mb-8 lg:mb-10">
          <span className="font-bold text-gray-800">GreenCarbonHub</span> is promoted by a Civil Servant with 23 years of
          experience in administration, particularly in power management, solid waste management, and liquid waste
          management. Supported by a team of experienced experts, GreenCarbonHub offers all Net-Zero solutions under one
          roof. If you are looking for the best rooftop solar company in Hyderabad, we are just a few miles away. Here
          are the reasons to choose us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-sm lg:max-w-none"
              style={{ minHeight: '120px', height: 'auto' }}
            >
              <div className="mb-3 md:mb-4">{benefit.icon}</div>
              <h3 className="text-gray-800 font-semibold text-center leading-tight text-sm sm:text-base lg:text-lg">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GCHBenefits;