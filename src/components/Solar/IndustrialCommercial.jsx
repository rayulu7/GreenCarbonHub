import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import OtherBenefits from './OtherBenefits';
import GCHBenefits from './GCHBenefits';
import Weprovide from './Weprovide';
import FAQ from './FAQ';
import OurClients from './OurClients';
import { Building, DollarSign, Leaf, Factory, GraduationCap, Pill, Snowflake, Cross, Egg } from "lucide-react";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    locality: "",
    city: "",
    units: '',
    businessType: 'industrial-commercial'
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

  const handleBookAppointment = () => {
    navigate('/signup');
  };

  const industrialBenefits = [
    {
      id: "env",
      icon: <Leaf className="text-green-600" />,
      title: "Environmental Benefits",
      desc: "By installing one kw solar panel, you can reduce 0.84 tonnes of carbon dioxide emissions. Keeping this in view, the Indian government has set a target of installing Gigawatt by 2030."
    },
    {
      id: "eco",
      icon: <DollarSign className="text-green-600" />,
      title: "Economical Benefits",
      desc: "By installing solar power, you can reduce your power bill by as much as 90% and get your ROI within 3 to 4 years. After that you enjoy free power for upto 21 to 22 years."
    },
    {
      id: "national",
      icon: <Building className="text-green-600" />,
      title: "National Interest",
      desc: "India imported coal worth 2.3 lakh crore between April to September of financial year 2023. We can save precious foreign exchange by switching to solar."
    }
  ];

  const [activeBenefit, setActiveBenefit] = useState(industrialBenefits[0]);
  const industrialUseCases = [
    {
      id: "manufacturing",
      icon: <Factory className="text-green-600" />,
      title: "Rooftop Solar For Manufacturing Industries",
      desc: "Various manufacturing industries such as Aerospace, Automobile, textile, Chemicals, Consumer Goods, Agricultural Machinery, etc. can utilize Rooftop Solar Energy to power their devices and components. This includes manufacturing machines, machine tools, equipment, lighting systems, and HVAC systems."
    },
    {
      id: "education",
      icon: <GraduationCap className="text-green-600" />,
      title: "Rooftop Solar For Educational Institutes",
      desc: "Educational institutes like Schools, Colleges, and Private Institutes house computer laboratories, science laboratories, research, and development centers that consume a significant amount of electricity. Installing Rooftop Solar Energy in these institutions can lead to substantial cost savings on these devices."
    },
    {
      id: "pharma",
      icon: <Pill className="text-green-600" />,
      title: "Rooftop Solar For Pharma Companies",
      desc: "Pharma Companies are large commercial spaces where electricity and water consumption are critical. By installing Solar Power Plants in Pharma Companies, a considerable amount of money can be saved while powering their machinery and devices."
    },
    {
      id: "cold-storage",
      icon: <Snowflake className="text-green-600" />,
      title: "Rooftop Solar For Cold Storages",
      desc: "Cold Storages and Warehouses used by Manufacturers, Importers, Exporters, and Farmers can use Rooftop Solar Energy to power cooling systems, lights, fans, and other equipment."
    },
    {
      id: "hospitals",
      icon: <Cross className="text-green-600" />,
      title: "Rooftop Solar For Hospitals",
      desc: "Hospitals require a significant amount of energy for medical devices, lighting, HVAC systems, and more. Rooftop Solar Panels can greatly reduce energy costs while ensuring uninterrupted power supply."
    },
    {
      id: "hatcheries",
      icon: <Egg className="text-green-600" />,
      title: "Rooftop Solar For Hatcheries",
      desc: "Hatcheries use machines such as incubators and air conditioners, consuming significant electricity. Installing Rooftop Solar Panels can help hatcheries save costs while operating sustainably."
    }
  ];
  const [activeUseCase, setActiveUseCase] = useState(industrialUseCases[0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
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
              {/* Badge */}
              {/* <div className="text-green-400 mb-6 md:mb-8">
                <span className="text-sm md:text-base font-semibold uppercase tracking-wide">Save Money, Save The Environment!</span>
              </div> */}
              
              {/* Main Heading */}
              <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8">
                Reduce Your Power Bill By Upto 90% By Switching To Solar
              </h1>
              
              {/* Description */}
              <p className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[38px] mb-6">
                Achieve NET ZERO emissions by shifting from fossil fuel-based energy to renewable energy by engaging GreenCarbonHub.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleBookAppointment}
                  className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-500 hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10 cursor-pointer"
                >
                  Book Appointment
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
                  name="locality"
                  required
                  className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-base"
                  placeholder="Locality"
                  value={form.locality}
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
                <select
                  name="businessType"
                  required
                  className="w-full block border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 text-base"
                  value={form.businessType}
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>
                  <option value="residential">Residential</option>
                  <option value="housing-society">Housing Society</option>
                  <option value="industrial-commercial">Industrial/Commercial</option>
                </select>
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
                Reduce Your Power Bill By Upto 90% By Switching To Solar
              </h1>
              
              {/* Description */}
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 leading-relaxed">
                Achieve NET ZERO emissions by shifting from fossil fuel-based energy to renewable energy by engaging GreenCarbonHub.
              </p>
              <button
                onClick={handleBookAppointment}
                className="inline-block bg-orange-500 text-white px-8 lg:px-10 xl:px-12 py-3 lg:py-4 xl:py-5 rounded-full text-base lg:text-lg xl:text-xl font-semibold shadow-lg transition-all duration-500 hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10 cursor-pointer"
              >
                Book Appointment
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
                  name="locality"
                  required
                  className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                  placeholder="Locality"
                  value={form.locality}
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
                <select
                  name="businessType"
                  required
                  className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 block border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 text-sm sm:text-base"
                  value={form.businessType}
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>
                  <option value="residential">Residential</option>
                  <option value="housing-society">Housing Society</option>
                  <option value="industrial-commercial">Industrial/Commercial</option>
                </select>
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

      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-12 2xl:px-[120px]">
          <div className="mx-auto w-full lg:max-w-[1100px] xl:max-w-[1200px]">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold text-[#333333] mb-2 leading-tight px-2 sm:px-0">
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

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-4 xl:gap-10">
              <div className="w-full lg:w-[300px] xl:w-[380px] flex flex-col gap-4 lg:mt-4 flex-shrink-0">
                {industrialBenefits.map((benefit) => {
                  const isActive = activeBenefit.id === benefit.id;
                  return (
                    <button
                      key={benefit.id}
                      onClick={() => setActiveBenefit(benefit)}
                      className={`w-full pt-4 pb-5 px-5 text-left text-sm sm:text-base md:text-lg font-bold rounded-2xl transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                        isActive
                          ? "bg-[#3A954F] text-white"
                          : "bg-white text-[#828282] hover:bg-gray-50"
                      }`}
                    >
                      {benefit.title}
                    </button>
                  );
                })}
              </div>

              <div className="w-full flex-1">
                <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:p-12 min-h-[360px] flex flex-col items-center text-center justify-center">
                  <div className="mb-6">
                    {React.cloneElement(activeBenefit.icon, {
                      className: "w-16 h-16 sm:w-20 sm:h-20 text-green-600"
                    })}
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
      
      <OtherBenefits />
      
      <GCHBenefits />
      
      <Weprovide type="industrial" />
      
      <section className="w-full bg-[#EBF3ED] py-10 sm:py-12 md:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-12 2xl:px-[120px]">
          <div className="mx-auto w-full lg:max-w-[1100px] xl:max-w-[1200px]">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-bold text-[#333333] mb-2 leading-tight px-2 sm:px-0">
                How Businesses Can Utilize Industrial Solar Power System?
              </h2>
              <p 
                className="text-[#000000] mb-5 text-left"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0px 0px 5px',
                  textAlign: 'center'
                }}
              >
                Discover how Industries and businesses can use Industrial Solar Power Systems and Solar Energy for their daily purposes.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-4 xl:gap-10">
              <div className="w-full lg:w-[300px] xl:w-[380px] flex flex-col gap-4 lg:mt-4 max-h-[520px] overflow-y-auto pr-1 flex-shrink-0">
                {industrialUseCases.map((useCase) => {
                  const isActive = activeUseCase.id === useCase.id;
                  return (
                    <button
                      key={useCase.id}
                      onClick={() => setActiveUseCase(useCase)}
                      className={`w-full pt-4 pb-5 px-5 text-left text-sm sm:text-base md:text-lg font-bold rounded-2xl transition-all duration-200 shadow-[0px_2px_10px_0px_rgba(3,4,28,0.06)] ${
                        isActive
                          ? "bg-[#3A954F] text-white"
                          : "bg-white text-[#828282] hover:bg-gray-50"
                      }`}
                    >
                      {useCase.title}
                    </button>
                  );
                })}
              </div>

              <div className="w-full flex-1">
                <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:p-12 min-h-[360px] flex flex-col items-center text-center justify-center">
                  <div className="mb-6">
                    {React.cloneElement(activeUseCase.icon, {
                      className: "w-16 h-16 sm:w-20 sm:h-20 text-green-600"
                    })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 text-center">
                    {activeUseCase.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#333333] leading-relaxed text-center">
                    {activeUseCase.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      
      <OurClients />
    </div>
  );
};

export default IndustrialCommercial;