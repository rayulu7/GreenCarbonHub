import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Package, Star, Truck, Shield, Zap, Droplets, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const Store = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const sectionRef = useRef(null);

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
    "One-Stop Solution",
    "Quality Guaranteed",
    "Competitive Pricing",
    "Fast Delivery",
    "Expert Support",
    "Warranty Protection"
  ];

  const stats = [
    { number: "1000+", label: "Products Available" },
    { number: "500+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" },
    { number: "99%", label: "Satisfaction Rate" }
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
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`
            text-center transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Green <span className="text-yellow-400">Store</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Your one-stop destination for sustainable technology components
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Package className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">1000+ Products</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                <Truck className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Points Section */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center mb-16 transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our <span className="text-green-600">Store</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality products, competitive prices, and exceptional service
            </p>
          </div>

          {/* Store Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out p-8 cursor-pointer
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeCategory === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                  ${hoveredProduct === index ? 'ring-4 ring-green-200' : ''}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => {
                  setHoveredProduct(index);
                  setActiveCategory(index);
                }}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-5
                  ${activeCategory === index ? 'opacity-10' : ''}
                `} />
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 mx-auto
                    ${activeCategory === index ? 'scale-110' : ''}
                    transition-transform duration-300
                  `}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-4">
                    {category.description}
                  </p>

                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                      <Package className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">{category.productCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Products */}
          <div className={`
            mb-16 transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-600
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
              Ready to Shop Sustainable?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Browse our extensive catalog of quality products and start building your sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>View Catalog</span>
                <Package className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
