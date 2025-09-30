import React from 'react';
import { Leaf, Droplets, Sun } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          {/* Central Circle with GCH */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Rotating outer ring */}
            <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-spin-slow" 
                 style={{ borderTopColor: '#22c55e', borderRightColor: '#3b82f6' }}></div>
            
            {/* Inner circle with text */}
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                GCH
              </span>
            </div>
          </div>

          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-spin-reverse">
            {/* Leaf Icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <Leaf className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Water Drop Icon */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow" 
                   style={{ animationDelay: '0.3s' }}>
                <Droplets className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Sun Icon */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow" 
                   style={{ animationDelay: '0.6s' }}>
                <Sun className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
            GreenCarbonHub
          </h2>
          <p className="text-sm text-gray-600">
            Building a sustainable future...
          </p>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full animate-progress"></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full opacity-40 animate-float"
              style={{
                left: `${(i + 1) * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
