import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Linkedin, Mail, Phone, MapPin, Star, CheckCircle } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Executive Officer",
      department: "Leadership",
      experience: "15+ Years",
      image: "/team/rajesh.jpg",
      bio: "Visionary leader with extensive experience in renewable energy and sustainable technology.",
      skills: ["Strategic Planning", "Leadership", "Innovation"],
      linkedin: "https://linkedin.com/in/rajesh-kumar",
      email: "rajesh@gch.com"
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      department: "Technology",
      experience: "12+ Years",
      image: "/team/priya.jpg",
      bio: "Technology expert specializing in solar energy systems and smart grid solutions.",
      skills: ["Solar Technology", "System Design", "Innovation"],
      linkedin: "https://linkedin.com/in/priya-sharma",
      email: "priya@gch.com"
    },
    {
      name: "Amit Patel",
      position: "Head of Operations",
      department: "Operations",
      experience: "10+ Years",
      image: "/team/amit.jpg",
      bio: "Operations specialist ensuring smooth project execution and quality delivery.",
      skills: ["Project Management", "Quality Control", "Team Leadership"],
      linkedin: "https://linkedin.com/in/amit-patel",
      email: "amit@gch.com"
    },
    {
      name: "Dr. Sunita Reddy",
      position: "Head of Research",
      department: "R&D",
      experience: "14+ Years",
      image: "/team/sunita.jpg",
      bio: "Research scientist focused on advancing renewable energy technologies.",
      skills: ["Research", "Innovation", "Technical Analysis"],
      linkedin: "https://linkedin.com/in/sunita-reddy",
      email: "sunita@gch.com"
    },
    {
      name: "Vikram Singh",
      position: "Head of Sales",
      department: "Sales",
      experience: "8+ Years",
      image: "/team/vikram.jpg",
      bio: "Sales leader driving growth and building strong client relationships.",
      skills: ["Sales Strategy", "Client Relations", "Business Development"],
      linkedin: "https://linkedin.com/in/vikram-singh",
      email: "vikram@gch.com"
    },
    {
      name: "Meera Joshi",
      position: "Head of Finance",
      department: "Finance",
      experience: "11+ Years",
      image: "/team/meera.jpg",
      bio: "Finance expert managing investments and ensuring sustainable growth.",
      skills: ["Financial Planning", "Investment Analysis", "Risk Management"],
      linkedin: "https://linkedin.com/in/meera-joshi",
      email: "meera@gch.com"
    }
  ];

  const departments = [
    { name: "Leadership", count: 1, color: "from-purple-500 to-purple-600" },
    { name: "Technology", count: 1, color: "from-blue-500 to-blue-600" },
    { name: "Operations", count: 1, color: "from-green-500 to-green-600" },
    { name: "Research", count: 1, color: "from-orange-500 to-orange-600" },
    { name: "Sales", count: 1, color: "from-red-500 to-red-600" },
    { name: "Finance", count: 1, color: "from-indigo-500 to-indigo-600" }
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

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMember(prev => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Meet the passionate experts driving sustainable innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-6 py-3">
                <Users className="w-5 h-5" />
                <span className="font-medium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-6 py-3">
                <Award className="w-5 h-5" />
                <span className="font-medium">Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section ref={sectionRef} className="pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center mb-16 transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to sustainable energy solutions
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeMember === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                  ${hoveredMember === index ? 'ring-4 ring-green-200' : ''}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => {
                  setHoveredMember(index);
                  setActiveMember(index);
                }}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Member Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  </div>

                  {/* Contact Links */}
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className={`
            mb-16 transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Departments</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${dept.color} mx-auto mb-3 flex items-center justify-center`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{dept.name}</h4>
                  <p className="text-sm text-gray-600">{dept.count} Member{dept.count > 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;
