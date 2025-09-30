import React from "react";

const Effluenttreatment = () => {
  return (
    <section className="w-full bg-[#EBF3ED] py-8 overflow-x-hidden">
      {/* Responsive outer card */}
      <div className="max-w-full mx-auto rounded-[15px] shadow-xl px-4 md:px-6 pb-8 md:pb-12 bg-[#EBF3ED]">
        {/* Heading */}
        <h4 className="text-[32px] font-bold text-[#333333] text-center mb-[55px] pt-6">
          Expert Sewage Treatment Plant Services in India
        </h4>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-full">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start max-w-full">
            <img
              src="/E2.jpeg"
              alt="Expert Effluent Treatment Plant Services in India"
              className="w-full max-w-full h-auto rounded shadow-md object-cover"
            />
          </div>

          {/* Right: Description */}
          <div className="space-y-6 max-w-full">
            <p className="text-[18px] leading-8 text-justify text-[#333333]">
              Effluent treatment plants (ETP) are playing a crucial role in
              protecting the environment by purifying the industrial wastewater.
              Generally the Industrial wastewater consists of a higher
              concentration of hazardous chemicals, heavy metals and a few other
              pollutants which are harmful if they are released directly into
              the environment without treating or purifying.
            </p>
            <p className="text-[18px] leading-8 text-justify text-[#333333]">
              Our Expert Effluent Treatment Plant team will verify your
              Industrial wastewater, design a proper Effluent Treatment Plant
              setup and install accordingly. Furthermore, provides Effluent
              Treatment Plant maintenance services, repairs and supply plant
              components if necessary. If you are looking forward to install
              Effluent treatment plant in India, then we are always at your
              service. Contact today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effluenttreatment;