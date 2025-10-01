import React from 'react';

const WhyChooseSolar = () => {
  const benefits = [
    {
      id: 1,
      title: 'Environmental Benefits',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=380&h=349&dpr=1',
      bgColor: 'bg-green-900',
      popupColor: 'bg-green-600',
      description: 'Installing 1 kW solar panel cuts 0.84 tonnes of CO₂ annually. Aligning with this, India aims to achieve 500 GW of renewable energy capacity by 2030.'
    },
    {
      id: 2,
      title: 'Economical Benefits',
      image: 'https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=380&h=349&dpr=1',
      bgColor: 'bg-blue-900',
      popupColor: 'bg-blue-600',
      description: 'Solar energy reduces electricity bills by up to 90%. With government subsidies and net metering, payback period is just 3-5 years with 25+ years of savings.'
    },
    {
      id: 3,
      title: 'National Interest',
      image: 'https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=380&h=349&dpr=1',
      bgColor: 'bg-yellow-900',
      popupColor: 'bg-yellow-600',
      description: 'Solar adoption reduces dependency on fossil fuel imports, strengthens energy security, and supports India\'s commitment to carbon neutrality by 2070.'
    }
  ];

  return (
    <div className="bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-10 lg:mb-12">
          Why Choose Solar Energy?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer w-full max-w-sm lg:max-w-none" 
              style={{ height: '280px', maxHeight: '349px' }}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url(${benefit.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className={`absolute inset-0 ${benefit.bgColor} bg-opacity-60 flex items-center justify-center`}>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center px-4">{benefit.title}</h3>
                </div>
              </div>
              
              {/* Popup that slides from bottom */}
              <div className={`absolute inset-x-0 bottom-0 ${benefit.popupColor} text-white p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}>
                <h4 className="font-bold text-base sm:text-lg mb-2">{benefit.title}</h4>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSolar;