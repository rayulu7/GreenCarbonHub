import React, { useState } from "react";

const services = [
  "STP (Sewage Treatment Plant)",
  "ETP (Effluent Treatment Plant)",
  "Water Treatment Plant",
];

const cities = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Mumbai"
];

const WWHeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    city: "",
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - For desktop */}
      <div 
        className="hidden lg:block absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg_banner.jpeg')",
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
          backgroundImage: "url('/bg_banner.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "30% center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay - Mobile */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6 md:p-8">
          <div className="text-white max-w-2xl w-full text-center">
            {/* Main Heading */}
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8">
              Best Effluent/ Sewage Treatment Plant Services in India
            </h1>
            
            {/* Description */}
            <p className="text-white font-semibold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px]">
              Choose Greencarbonhub's Expert Wastewater Treatment Plant Team For Optimal Water Quality
            </p>
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
                name="location"
                required
                className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                placeholder="Location"
                value={form.location}
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
        <div className="flex-1 flex items-center justify-center p-12">
          <div className="text-white max-w-2xl w-full">
            {/* Main Heading */}
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl mb-8">
              Best Effluent/ Sewage Treatment Plant Services in India
            </h1>
            
            {/* Description */}
            <p className="text-white font-semibold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px]">
              Choose Greencarbonhub's Expert Wastewater Treatment Plant Team For Optimal Water Quality
            </p>
          </div>
        </div>

        {/* Form Section - Right Side (Desktop) */}
        <div className="w-[600px] xl:w-[700px] flex-shrink-0 p-12 flex flex-col justify-center">
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
                name="location"
                required
                className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                placeholder="Location"
                value={form.location}
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

export default WWHeroSection;
