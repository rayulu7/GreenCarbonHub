import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Wrench, Zap, Shield, TrendingUp, Clock, Star } from 'lucide-react';

const SolarMaintenance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solar <span className="text-orange-400">Maintenance</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Keep your solar investment performing at its best with our comprehensive maintenance solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center mb-16 transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our <span className="text-green-600">Maintenance</span> Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional maintenance ensures your solar system operates at peak efficiency
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          {/* Benefits Grid */}
          <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`
            transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Solar System?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get professional maintenance services and keep your solar investment performing at its best
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get Maintenance Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarMaintenance;
