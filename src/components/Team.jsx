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
      name: "Dr. Pavan Mohit",
      position: "Chief Executive Officer",
      department: "Leadership",
      experience: "5+ Years",
      image: "/team/rajesh.jpg",
      bio: "Visionary leader with extensive experience in renewable energy and sustainable technology.",
      skills: ["Strategic Planning", "Leadership", "Innovation"],
      linkedin: "https://linkedin.com/in/pavan-mohit",
      email: "pavan@gch.com"
    },
  ];

  const departments = [
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMember(prev => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <>
      <section ref={headerRef} className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Meet the passionate experts driving sustainable innovation
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-4 py-2">
                <Users className="w-4 h-4" />
                <span className="font-medium text-sm">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
                <Award className="w-4 h-4" />
                <span className="font-medium text-sm">Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="bg-white pb-0 mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 mb-0">

          <div className="flex justify-center mb-0 pb-0">
            <div className="w-full max-w-sm mx-4 md:mx-0 mb-0 pb-0">
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
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 right-4">
                    {/* <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {member.experience}
                    </div> */}
                  </div>
                </div>

                <div className="px-6 pt-6 pb-6 md:px-8 md:pt-8 md:pb-8">
                  {/* <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-1 text-sm md:text-base">{member.position}</p>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{member.department}</p>
                  
                  <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {member.bio}
                  </p> */}

                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                    {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  </div>

                  <div className="flex space-x-2 md:space-x-3 mb-0">
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
          </div>

          {}

        </div>
      </section>
    </>
  );
};

export default Team;
