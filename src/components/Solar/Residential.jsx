import React, { useState } from 'react';
import Navbar from "../Navbar.jsx";
import CTAButtons from "./CTAButtons.jsx";
import WhySolarResidential from "./WhySolarResidential.jsx";
import WhyChooseGCH from "./WhyChooseGCH.jsx";
import FAQ from "./FAQ.jsx";
import OurClients from "./OurClients.jsx";
import OtherBenefits from "./OtherBenefits.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import { Home, DollarSign, Leaf, Zap, Shield, Settings } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const residentialBenefits = [
  {
    id: "environmental",
    icon: <Leaf className="text-green-600" />,
    title: "Environmental Benefits",
    desc: "By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030 as part of mission net zero."
  },
  {
    id: "economical",
    icon: <DollarSign className="text-green-600" />,
    title: "Economical Benefits",
    desc: "By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
  },
  {
    id: "national-interest",
    icon: <Home className="text-green-600" />,
    title: "National Interest",
    desc: "India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
  }
];

const ResidentialBenefitsSection = () => {
  const [activeBenefit, setActiveBenefit] = useState(residentialBenefits[0]);

  return (
    <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-12 2xl:px-16">
        <div className="mx-auto w-full lg:max-w-[1100px] xl:max-w-[1200px]">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#333333] mb-2 px-2 sm:px-0 leading-tight">
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

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-4 xl:gap-8">
            <div className="w-full lg:w-[300px] xl:w-[360px] flex flex-col gap-4 lg:mt-4 flex-shrink-0">
              {residentialBenefits.map((benefit) => {
                const isActive = activeBenefit.id === benefit.id;
                return (
                  <button
                    key={benefit.id}
                    onClick={() => setActiveBenefit(benefit)}
                    className={`w-full pt-4 pb-5 px-5 text-left text-sm sm:text-base md:text-lg font-bold rounded-2xl transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                      isActive
                        ? 'bg-[#3A954F] text-white'
                        : 'bg-white text-[#828282] hover:bg-gray-50'
                    }`}
                  >
                    {benefit.title}
                  </button>
                );
              })}
            </div>

            <div className="w-full flex-1 min-w-0">
              <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12 min-h-[360px] flex flex-col items-center text-center justify-center">
                <div className="mb-6">
                  {React.cloneElement(activeBenefit.icon, { className: "w-16 h-16 sm:w-20 sm:h-20 text-green-600" })}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4">
                  {activeBenefit.title}
                </h3>
                <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                  {activeBenefit.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResidentialHeroSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    units: "",
    service: "Residential"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted:\n" + JSON.stringify(form, null, 2));
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - For desktop */}
      <div 
        className="hidden lg:block absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/residential-solar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      {/* Overlay - Desktop */}
      <div className="hidden lg:block absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Mobile Banner Section - Hidden on desktop */}
      <div 
        className="block lg:hidden relative min-h-screen"
        style={{
          backgroundImage: "url('/residential-solar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "30% center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay - Mobile */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6 md:p-8">
          <div className="text-white max-w-2xl w-full text-center">
            {/* Badge */}
            {/* <div className="text-green-400 mb-6 md:mb-8">
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide">Save Money, Save The Environment!</span>
            </div> */}
            
            {/* Main Heading */}
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8">
              Best Residential Rooftop Solar Panel Installation Company in Hyderabad
            </h1>
            
            {/* Description */}
            <p className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px] mb-6">
              Achieve NET ZERO emissions by shifting from fossil fuel-based energy to renewable energy by engaging GreenCarbonHub. Reduce 0.84 tonnes of CO2 emissions per annum per KW of Solar power installed.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleGetStarted}
                className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-500 hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Form Section - Below Banner */}
      <div className="block lg:hidden w-full p-6 md:p-8 relative z-10" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-md mx-auto">
          {/* Contact Form */}
          <div className="rounded-lg p-6 md:p-8" style={{ backgroundColor: '#ffffff' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" autoComplete="off">
              <input
                type="text"
                name="name"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="Home Address"
                value={form.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="units"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="Average Monthly Units"
                value={form.units}
                onChange={handleChange}
              />
              <input
                type="hidden"
                name="service"
                value="Residential"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-12 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base min-w-[200px]"
                  style={{ borderRadius: '5px' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex relative z-10 min-h-screen flex-row w-full">
        {/* Banner Section - Left Side (Desktop) */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-8 xl:p-12">
          <div className="text-white max-w-2xl w-full">
            {/* Badge */}
            {/* <div className="text-green-400 mb-8">
              <span className="text-base font-semibold uppercase tracking-wide">Save Money, Save The Environment!</span>
            </div> */}
            
            {/* Main Heading */}
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 lg:mb-8">
              Best Residential Rooftop Solar Panel Installation Company in Hyderabad
            </h1>
            
            {/* Description */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 leading-relaxed">
              Achieve NET ZERO emissions by shifting from fossil fuel-based energy to renewable energy by engaging GreenCarbonHub. Reduce 0.84 tonnes of CO2 emissions per annum per KW of Solar power installed.
            </p>
            <button
              onClick={handleGetStarted}
              className="inline-block bg-orange-500 text-white px-8 lg:px-10 xl:px-12 py-3 lg:py-4 xl:py-5 rounded-full text-base lg:text-lg xl:text-xl font-semibold shadow-lg transition-all duration-500 hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Form Section - Right Side (Desktop) */}
        <div className="w-[500px] lg:w-[550px] xl:w-[600px] 2xl:w-[700px] flex-shrink-0 p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none lg:mx-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6" autoComplete="off">
              <input
                type="text"
                name="name"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Home Address"
                value={form.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="units"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Average Monthly Units"
                value={form.units}
                onChange={handleChange}
              />
              <input
                type="hidden"
                name="service"
                value="Residential"
              />
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base min-w-[160px] sm:min-w-[200px]"
                  style={{ borderRadius: '5px' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Residential = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ResidentialHeroSection />
      <CTAButtons />
      
      <ResidentialBenefitsSection />
      
      {}
      <OtherBenefits />
      
      {}
      <WhatWeDo />
      
      {}
      <WhySolarResidential />
      
      {}
      <WhyChooseGCH />
      
      {}
      <FAQ />
      
      {}
      <OurClients />
    </div>
  );
};

export default Residential;
