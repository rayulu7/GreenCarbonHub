import React from "react";
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <section className="relative h-[88svh] sm:h-[80svh] md:h-screen overflow-hidden">
      <img
        src="/bg_banner.jpeg"
        alt="Sustainability background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="h-full flex flex-col justify-center md:justify-start pt-16 sm:pt-24 md:pt-16 lg:pt-24 xl:pt-32">
          <h1
            className="text-white font-extrabold leading-tight max-w-4xl
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-fade-up"
            style={{ animationDelay: "0.12s" }}
          >
            Reduce/Offset your Carbon Footprint
          </h1>
          <h2 className="text-white font-extrabold max-w-4xl mt-4 sm:mt-6 md:mt-6
                       text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.12s" }}>We offer Integrated Net-zero solutions, with focus on solar and water & wastewater management, for businesses and individuals looking to reduce their carbon footprint. </h2>
          
          <div className="mt-6 md:hidden text-center relative z-10">
            <button
              onClick={handleGetStarted}
              className="inline-block bg-orange-500 text-white
                         px-10 py-4 rounded-full
                         text-lg font-semibold shadow-lg
                         transition-all duration-500
                         animate-roll-up
                         hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl
                         focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10
                         cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute hidden md:block right-2 sm:right-4 md:right-10 bottom-12 sm:bottom-16 md:bottom-24 z-10"
        style={{ animationDelay: "0.25s" }}
      >
        <button
          onClick={handleGetStarted}
          className="inline-block bg-orange-500 text-white
                     px-10 md:px-12 py-4 md:py-5 rounded-full
                     text-lg md:text-xl font-semibold shadow-lg
                     transition-all duration-500
                     animate-roll-up
                     hover:-translate-y-1 hover:rotate-6 hover:bg-green-600 hover:shadow-xl
                     focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black/10
                     cursor-pointer"
        >
          Get Started
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp .6s ease-out both;
        }

        @keyframes rollUpIntro {
          0%   { opacity: 0; transform: translateY(18px) rotate(-8deg) scale(.98); }
          60%  { opacity: 1; transform: translateY(-2px) rotate(4deg)  scale(1.05); }
          100% { opacity: 1; transform: translateY(0)    rotate(0deg)  scale(1); }
        }
        .animate-roll-up {
          animation: rollUpIntro .8s cubic-bezier(.2,.8,.25,1) both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
