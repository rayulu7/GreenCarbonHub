import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Maintenance',
      image: '/maitntence.jpg',
      content: 'Keep your system at peak efficiency with our predictive maintenance solutions. Ensure maximum output through regular cleaning and professional up-keep. Rely on our expert maintenance services for long lasting worry-free performance.',
      link: '/maintenance'
    },
    {
      id: 2,
      title: 'Investments',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      content: 'Earn assured returns with our expertly curated solar and carbon removal investments. Support a sustainable future future while growing your portfolio with confidence. Join us in powering progress through profitable, eco-friendly opportunities.',
      link: '/investments'
    },
    {
      id: 3,
      title: 'GCH Store',
      image: '/solar_service.jpg',
      content: 'Get high-quality solar, water and wastewater management components consumables all in one place. Designed for the conveinence of our customers and partners. We make sourcing simple. Enjoy discounted prices with reliable products that ensure long-term performance.',
      link: '/gch-store'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`w-full ${service.title === 'GCH Store' ? 'group' : ''} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              
              <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 text-center ${service.title === 'GCH Store' ? 'cursor-pointer group-hover:scale-105 transition-transform duration-300' : ''}`}>
                {service.title === 'GCH Store' ? (
                  <><span className="text-green-600">GC</span><span className="text-orange-500">H</span> Store</>
                ) : (
                  service.title
                )}
              </h3>
              
             
              {/* <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-center max-w-3xl mx-auto">
                {service.content}
              </p> */}
              
              
              <div className="relative bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm sm:max-w-md mx-auto group mb-6"
                style={{ minHeight: '320px' }}
              >
                <div className="flex flex-col items-center w-full z-10 relative flex-1">
                  <div className="flex justify-center items-center mb-4 sm:mb-6 w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full text-center flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 group-hover:text-white transition-colors">
                        {service.content}
                      </p>
                    </div>
                    <Link
                      to={service.link}
                      className="mt-auto text-[#3A954F] font-semibold hover:underline text-base sm:text-lg group-hover:text-white transition-colors"
                    >
                      View More
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl pointer-events-none transition-colors duration-200 group-hover:bg-[#3A954F] z-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
