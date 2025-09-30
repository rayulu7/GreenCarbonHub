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
    <section className="bg-white py-16 px-0">
      {/* Use padding for side “margins” and keep it responsive */}
       <div className="mx-auto max-w-7xl md:px-10 xl:px-[120px]">
        <h2 className="text-[#111827] text-center font-bold mb-5 text-[35.2px]">
          Why Should You Choose GCH for Your Rooftop Solar Power Project?
        </h2>

        {/* Keep text centered and constrain width instead of hard width */}
        <p className="text-center mx-auto max-w-[1200px] text-[17.6px] leading-[1.6] text-[#555] font-sans mb-6">
          <span className="font-bold text-gray-800">GreenCarbonHub</span> is promoted by a Civil Servant with 23 years of
          experience in administration, particularly in power management, solid waste management, and liquid waste
          management. Supported by a team of experienced experts, GreenCarbonHub offers all Net-Zero solutions under one
          roof. If you are looking for the best rooftop solar company in Hyderabad, we are just a few miles away. Here
          are the reasons to choose us:
        </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-items-center">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-6 w-[380px] h-[150.4px]"
              style={{ marginBottom: index >= 3 ? "4px" : "0px" }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-gray-800 font-semibold text-center leading-tight text-[16px] mt-2">
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