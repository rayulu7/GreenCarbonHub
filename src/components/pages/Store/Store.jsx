import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Package, Star, Truck, Shield, Zap, Droplets, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const Store = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const storePoints = [
    "Get high-quality solar, water, and wastewater management components and consumables all in one place.",
    "Designed for the convenience of our customers and partners, we make sourcing simple.",
    "Enjoy discounted prices with reliable products that ensure long-term performance."
  ];

  const categories = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Solar Components",
      description: "High-efficiency solar panels, inverters, batteries, and accessories",
      productCount: "50+ Products",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Management",
      description: "Water treatment systems, pumps, filters, and monitoring equipment",
      productCount: "30+ Products",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance Tools",
      description: "Professional tools and consumables for system maintenance",
      productCount: "25+ Products",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const featuredProducts = [
    {
      name: "Premium Solar Panels",
      price: "₹45,000",
      originalPrice: "₹50,000",
      rating: 4.8,
      image: "/solar-panel.jpg",
      badge: "Best Seller"
    },
    {
      name: "Smart Water Pump",
      price: "₹12,500",
      originalPrice: "₹15,000",
      rating: 4.6,
      image: "/water-pump.jpg",
      badge: "New"
    },
    {
      name: "Battery Storage System",
      price: "₹85,000",
      originalPrice: "₹95,000",
      rating: 4.9,
      image: "/battery.jpg",
      badge: "Limited"
    },
    {
      name: "Water Treatment Kit",
      price: "₹8,500",
      originalPrice: "₹10,000",
      rating: 4.7,
      image: "/treatment-kit.jpg",
      badge: "Sale"
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
    { number: "1000+", label: "Products Available" },
    { number: "500+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" },
    { number: "99%", label: "Satisfaction Rate" }
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

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [categories.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero Section */}
      <section ref={headerRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Store
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Your one-stop destination for sustainable technology components
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-4 py-2">
                <Package className="w-4 h-4" />
                <span className="font-medium text-sm">1000+ Products</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
                <Truck className="w-4 h-4" />
                <span className="font-medium text-sm">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Points Section */}
      <section ref={sectionRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Store Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {storePoints.map((point, index) => (
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
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Featured Products */}
          <div className={`
            mb-12 lg:mb-16 transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 lg:mb-8">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Package className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-700
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

      {/* Coming Soon Section */}
      <section className="pt-2 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Coming Soon!
            </h2>
            <p className="text-xl text-gray-600">
              We're working on exciting new features and services. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Store;
