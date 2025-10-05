import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Leaf, Shield, Target, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Investments = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInvestment, setActiveInvestment] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const investmentPoints = [
    "Earn assured returns with our expertly curated solar and carbon removal investments.",
    "Support a sustainable future while growing your portfolio with confidence.",
    "Join us in powering progress through profitable, eco-friendly opportunities."
  ];

  const investmentTypes = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Solar Energy Investments",
      description: "Invest in solar projects with guaranteed returns and environmental impact",
      returns: "12-15%",
      duration: "5-7 years",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Removal Projects",
      description: "Support carbon capture and removal initiatives with attractive returns",
      returns: "10-12%",
      duration: "3-5 years",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Green Infrastructure",
      description: "Invest in sustainable infrastructure projects with long-term stability",
      returns: "8-10%",
      duration: "7-10 years",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const benefits = [
    "Assured Returns",
    "Environmental Impact",
    "Portfolio Diversification",
    "Expert Curation",
    "Transparent Reporting",
    "Risk Management"
  ];

  const stats = [
    { number: "₹50Cr+", label: "Total Investments" },
    { number: "500+", label: "Active Investors" },
    { number: "15%", label: "Average Returns" },
    { number: "99%", label: "Success Rate" }
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

  // Auto-rotate investments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInvestment(prev => (prev + 1) % investmentTypes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [investmentTypes.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`
            text-center transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable <span className="text-yellow-400">Investments</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Grow your wealth while building a sustainable future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Assured Returns</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Leaf className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Points Section */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center mb-16 transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our <span className="text-green-600">Investment</span> Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invest in the future with confidence and purpose
            </p>
          </div>

          {/* Investment Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {investmentPoints.map((point, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out p-8 text-center
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  hover:scale-105
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-6 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Investment Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {investmentTypes.map((investment, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out p-8 cursor-pointer
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeInvestment === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                  ${hoveredCard === index ? 'ring-4 ring-green-200' : ''}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => {
                  setHoveredCard(index);
                  setActiveInvestment(index);
                }}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${investment.color} opacity-5
                  ${activeInvestment === index ? 'opacity-10' : ''}
                `} />
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-br ${investment.color} flex items-center justify-center text-white mb-6 mx-auto
                    ${activeInvestment === index ? 'scale-110' : ''}
                    transition-transform duration-300
                  `}>
                    {investment.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {investment.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-6">
                    {investment.description}
                  </p>

                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{investment.returns}</div>
                      <div className="text-sm text-gray-600">Returns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{investment.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-500
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

          {/* Stats Section */}
          <div className={`
            grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`
            transition-all duration-1000 delay-800
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Sustainable Investment Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of investors who are building wealth while saving the planet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Start Investing</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>View Portfolio</span>
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;
