import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Linkedin, Mail, GraduationCap, Briefcase, Star, CheckCircle, Globe } from 'lucide-react';

const Board = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeAdvisor, setActiveAdvisor] = useState(0);
  const [hoveredAdvisor, setHoveredAdvisor] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const advisoryBoard = [
    {
      name: "Prof. Dr. Anil Gupta",
      position: "Chairman - Advisory Board",
      expertise: "Renewable Energy Policy",
      experience: "25+ Years",
      education: "PhD in Energy Systems",
      currentRole: "Director, National Institute of Solar Energy",
      image: "/board/anil.jpg",
      bio: "Leading expert in renewable energy policy and sustainable development with extensive government and academic experience.",
      achievements: ["Published 50+ Research Papers", "Policy Advisor to Government", "International Recognition"],
      linkedin: "https://linkedin.com/in/anil-gupta",
      email: "anil@advisory.gch.com"
    },
    {
      name: "Dr. Meera Krishnan",
      position: "Technology Advisor",
      expertise: "Solar Technology Innovation",
      experience: "20+ Years",
      education: "PhD in Photovoltaic Engineering",
      currentRole: "CTO, Global Solar Solutions",
      image: "/board/meera.jpg",
      bio: "Pioneer in solar technology innovation with multiple patents and breakthrough research in photovoltaic systems.",
      achievements: ["15+ Patents", "Technology Innovation Award", "Global Industry Leader"],
      linkedin: "https://linkedin.com/in/meera-krishnan",
      email: "meera@advisory.gch.com"
    },
    {
      name: "Mr. Rajesh Agarwal",
      position: "Business Strategy Advisor",
      expertise: "Sustainable Business Development",
      experience: "18+ Years",
      education: "MBA in Sustainable Business",
      currentRole: "CEO, GreenTech Ventures",
      image: "/board/rajesh.jpg",
      bio: "Business strategist specializing in sustainable technology investments and green business model development.",
      achievements: ["$100M+ Investment Portfolio", "Business Strategy Expert", "Sustainability Champion"],
      linkedin: "https://linkedin.com/in/rajesh-agarwal",
      email: "rajesh@advisory.gch.com"
    },
    {
      name: "Dr. Sunita Patel",
      position: "Environmental Advisor",
      expertise: "Environmental Impact Assessment",
      experience: "22+ Years",
      education: "PhD in Environmental Science",
      currentRole: "Head of Research, Environmental Institute",
      image: "/board/sunita.jpg",
      bio: "Environmental scientist with expertise in impact assessment and sustainable development practices.",
      achievements: ["Environmental Impact Expert", "Research Publications", "Policy Development"],
      linkedin: "https://linkedin.com/in/sunita-patel",
      email: "sunita@advisory.gch.com"
    },
    {
      name: "Mr. Vikram Singh",
      position: "Financial Advisor",
      expertise: "Green Finance & Investment",
      experience: "16+ Years",
      education: "CFA, MBA in Finance",
      currentRole: "Managing Director, Green Finance Corp",
      image: "/board/vikram.jpg",
      bio: "Financial expert specializing in green investments and sustainable finance with extensive market experience.",
      achievements: ["Green Finance Expert", "Investment Success", "Market Leadership"],
      linkedin: "https://linkedin.com/in/vikram-singh",
      email: "vikram@advisory.gch.com"
    },
    {
      name: "Dr. Priya Reddy",
      position: "Research Advisor",
      expertise: "Clean Energy Research",
      experience: "19+ Years",
      education: "PhD in Clean Energy Systems",
      currentRole: "Research Director, Energy Research Institute",
      image: "/board/priya.jpg",
      bio: "Research scientist focused on clean energy technologies and sustainable energy system development.",
      achievements: ["Research Excellence", "Innovation Leadership", "Academic Recognition"],
      linkedin: "https://linkedin.com/in/priya-reddy",
      email: "priya@advisory.gch.com"
    }
  ];

  const expertiseAreas = [
    { name: "Policy & Governance", count: 1, color: "from-purple-500 to-purple-600" },
    { name: "Technology Innovation", count: 1, color: "from-blue-500 to-blue-600" },
    { name: "Business Strategy", count: 1, color: "from-green-500 to-green-600" },
    { name: "Environmental Impact", count: 1, color: "from-orange-500 to-orange-600" },
    { name: "Financial Planning", count: 1, color: "from-red-500 to-red-600" },
    { name: "Research & Development", count: 1, color: "from-indigo-500 to-indigo-600" }
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

  // Auto-rotate advisors
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvisor(prev => (prev + 1) % advisoryBoard.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [advisoryBoard.length]);

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
              Advisory Board
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Industry leaders and experts guiding our sustainable energy vision
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-6 py-3">
                <Award className="w-5 h-5" />
                <span className="font-medium">Industry Leaders</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-6 py-3">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Global Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section ref={sectionRef} className="pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center mb-16 transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Distinguished experts providing strategic guidance and industry insights
            </p>
          </div>

          {/* Advisory Board Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advisoryBoard.map((advisor, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeAdvisor === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                  ${hoveredAdvisor === index ? 'ring-4 ring-green-200' : ''}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => {
                  setHoveredAdvisor(index);
                  setActiveAdvisor(index);
                }}
                onMouseLeave={() => setHoveredAdvisor(null)}
              >
                {/* Advisor Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {advisor.experience}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {advisor.position.split(' - ')[0]}
                    </div>
                  </div>
                </div>

                {/* Advisor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{advisor.name}</h3>
                  <p className="text-green-600 font-semibold mb-1">{advisor.position}</p>
                  <p className="text-gray-600 text-sm mb-2">{advisor.expertise}</p>
                  <p className="text-gray-500 text-xs mb-4">{advisor.currentRole}</p>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {advisor.bio}
                  </p>

                  {/* Education & Experience */}
                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-3 h-3" />
                      <span>{advisor.education}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {advisor.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex space-x-3">
                    <a
                      href={advisor.linkedin}
                      className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${advisor.email}`}
                      className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className={`
            mb-16 transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Expertise Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${area.color} mx-auto mb-3 flex items-center justify-center`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">{area.name}</h4>
                  <p className="text-xs text-gray-600">{area.count} Expert{area.count > 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Board;
