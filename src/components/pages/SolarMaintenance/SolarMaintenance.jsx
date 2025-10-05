import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Wrench, Zap, Shield, TrendingUp, Clock, Star } from 'lucide-react';

const SolarMaintenance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Maintenance",
      description: "Keep your solar system at peak efficiency with our predictive maintenance solutions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Regular Cleaning",
      description: "Ensure maximum output through regular cleaning and professional upkeep.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Expert Services",
      description: "Rely on our expert maintenance services for long-lasting, worry-free solar performance.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "24/7 System Monitoring",
    "Preventive Maintenance Alerts",
    "Professional Cleaning Services",
    "Performance Optimization",
    "Warranty Protection",
    "Emergency Support"
  ];

  // Intersection Observer for header animation
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* HIDDEN CONTENT - All sections commented out */}
      {/* Hero Section - HIDDEN */}
      {/* <section ref={headerRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Solar Maintenance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Keep your solar investment performing at its best with our comprehensive maintenance solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-4 py-2">
                <Star className="w-4 h-4" />
                <span className="font-medium text-sm">Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium text-sm">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section - HIDDEN */}
      {/* <section ref={sectionRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out p-8 cursor-pointer
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeFeature === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-5
                  ${activeFeature === index ? 'opacity-10' : ''}
                `} />
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 mx-auto
                    ${activeFeature === index ? 'scale-110' : ''}
                    transition-transform duration-300
                  `}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Coming Soon Section - ACTIVE */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              Solar Maintenance
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-green-600">
              Coming Soon!
            </h2>
            <p className="text-lg text-gray-600">
              We're working on comprehensive solar maintenance solutions. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SolarMaintenance;
