import React from 'react';
import { Monitor, DollarSign, Home, Settings, Leaf } from 'lucide-react';

const SolarBenefitsCards = () => {
  const benefits = [
    {
      id: 1,
      icon: <Monitor className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Renewable & Clean Source Of Energy',
      description: 'As the Solar Energy is a clean and renewable source, you are helping the environment by reducing carbon footprint and protecting it by choosing solar panels in Hyderabad for your home or office.'
    },
    {
      id: 2,
      icon: <DollarSign className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Solar Energy Reduces Electricity Cost',
      description: 'Rooftop Solar Panels can generate a good amount of electricity that can power up your home, office or industry, helping you to save a lot of money on electricity bills year after year.'
    },
    {
      id: 3,
      icon: <Home className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Adds Value To Your Life',
      description: 'Choosing the rooftop solar energy adds value to your home, office or other spaces and makes it more attractive to the potential buyers. Our experts educate you with all necessary details before starting.'
    },
    {
      id: 4,
      icon: <Settings className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Low Maintenance Cost',
      description: 'Rooftop solar panels require less maintenance and therefore less cost. As they are stable and do not have any moving or rotating parts to generate electricity, thus they require minimum maintenance like cleaning only.'
    },
    {
      id: 5,
      icon: <Leaf className="text-green-600" style={{ width: '52.88px', height: '46.4px' }} />,
      title: 'Eco-Friendly And Reduces CO2 Emissions',
      description: 'Solar Power is an eco-friendly and sustainable energy resource that produces zero emissions. Solar Panels harness the power of the sun to generate electricity, which further used to your requirements.'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Other Benefits
        </h2>
        
        {/* Top row - 3 cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {benefits.slice(0, 3).map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col items-center text-center"
              style={{ width: '379.99px', height: '459.2px' }}
            >
              <div className="mb-8">
                {benefit.icon}
              </div>
              <h3 
                className="text-gray-800 font-semibold leading-tight px-4"
                style={{ fontSize: '18px', marginBottom: '18px' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed text-justify px-4"
                style={{ fontSize: '18px' }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom row - 2 cards centered */}
        <div className="flex justify-center gap-8">
          {benefits.slice(3, 5).map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col items-center text-center"
              style={{ width: '379.99px', height: '459.2px' }}
            >
              <div className="mb-8">
                {benefit.icon}
              </div>
              <h3 
                className="text-gray-800 font-semibold leading-tight px-4"
                style={{ fontSize: '18px', marginBottom: '18px' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed text-justify px-4"
                style={{ fontSize: '18px' }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarBenefitsCards;