import React, { useEffect, useState } from "react";

const OurClients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    {
      id: 1,
      name: "GE",
      logo: "/ge.png",
      alt: "Our Client - GE"
    },
    {
      id: 2,
      name: "AP Food Processing Society",
      logo: "/ap.png",
      alt: "Our Client - AP Food Processing Society"
    }
  ];

  return (
    <section className={`w-full bg-white pt-[100px] pb-[70px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Container */}
      <div className="mx-auto max-w-[1440px] px-[15px]" style={{ marginLeft: '120px', marginRight: '120px' }}>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            Our Clients
          </h2>
        </div>

        {/* Client Logos */}
        <div className="flex justify-between items-center px-8">
          {clients.map((client, index) => (
            <div key={client.id} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.alt}
                className="w-[185px] h-[185px] object-contain"
                style={{ 
                  border: 'none', 
                  outline: 'none',
                  margin: '5px 0 0 0'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;