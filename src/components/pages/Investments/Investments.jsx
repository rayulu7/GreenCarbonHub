import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Leaf, Shield, Target, Users, ArrowRight, Star, CheckCircle, PiggyBank, Globe, Zap, Briefcase, TrendingDown, BarChart3 } from 'lucide-react';

const Investments = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeInvestment, setActiveInvestment] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const investmentPoints = [
    {
      text: "Earn assured returns with our expertly curated solar and carbon removal investments.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      text: "Support a sustainable future while growing your portfolio with confidence.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      text: "Join us in powering progress through profitable, eco-friendly opportunities.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
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
      <section ref={headerRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Investments
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Grow your wealth while building a sustainable future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-6 py-3">
                <DollarSign className="w-5 h-5" />
                <span className="font-medium">Assured Returns</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-6 py-3">
                <Leaf className="w-5 h-5" />
                <span className="font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Points Section */}
      <section ref={sectionRef} className="pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6">

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
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${point.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                  {point.icon}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{point.text}</p>
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

        </div>
      </section>

    </div>
  );
};

export default Investments;
