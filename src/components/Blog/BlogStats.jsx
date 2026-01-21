import React from 'react';
import { Users, Star, Globe, Shield } from 'lucide-react';

const BlogStats = () => {
  const stats = [
    {
      icon: Users,
      number: '10Lacs+',
      label: 'Happy Customers',
      color: 'text-blue-500'
    },
    {
      icon: Star,
      number: '04/05',
      label: 'Google Rating',
      sublabel: '3000+ Reviews on Google',
      color: 'text-yellow-500'
    },
    {
      icon: Globe,
      number: '30+',
      label: 'Cities',
      sublabel: 'Presence Across India',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      number: '',
      label: 'Warranty Backed Service',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.number}
            </div>
            <div className="text-gray-700 font-medium mb-1">
              {stat.label}
            </div>
            {stat.sublabel && (
              <div className="text-sm text-gray-500">
                {stat.sublabel}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogStats;