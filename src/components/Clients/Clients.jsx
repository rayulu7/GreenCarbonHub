import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "General Electric",
      image: "/Client1.png",
      description: "Leading renewable energy solutions provider"
    },
    {
      id: 2,
      name: "AP Food Processing Society", 
      image: "/Client2.png",
      description: "Sustainable technology innovation partner"
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations in sustainable energy solutions
          </p>
        </div>

        {/* Client Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`
                bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-32 h-32 mx-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
