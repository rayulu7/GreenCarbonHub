import React from 'react';

const BlogHero = () => {
  return (
    <div className="relative h-[70vh] md:h-[90vh] bg-gradient-to-br from-green-600 via-green-500 to-green-500 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 via-transparent to-green-400/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/10 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/10 rounded-full blur-lg animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="./Banner.jpg"
          alt="Blog Hero"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-green-200/30 text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>
          ☀️
        </div>
        <div className="absolute top-32 right-32 text-green-200/30 text-5xl animate-bounce" style={{animationDelay: '1.5s'}}>
          🌊
        </div>
        <div className="absolute bottom-32 left-32 text-blue-200/30 text-4xl animate-bounce" style={{animationDelay: '2.5s'}}>
          🌱
        </div>
        <div className="absolute bottom-20 right-20 text-yellow-200/30 text-5xl animate-bounce" style={{animationDelay: '3s'}}>
          ⚡
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white animate-fade-in">
          <div className="mb-6">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-4xl">🌍</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
            <span className="text-green-300 animate-pulse">Green</span>
            <span className="text-green-400 animate-pulse" style={{animationDelay: '0.5s'}}>Carbon</span>
            <span className="text-green-300 animate-pulse" style={{animationDelay: '1s'}}>Hub</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-white">Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-green-200 max-w-2xl md:max-w-4xl mx-auto font-medium drop-shadow-md leading-relaxed">
            Discover expert insights on solar energy, water management, and sustainable solutions for a greener tomorrow
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Solar Solutions
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Water Management
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Green Technology
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default BlogHero;
