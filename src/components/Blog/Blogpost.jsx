import React from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import BlogContent from './BlogContent';

const Blogpost = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
      
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-600 mb-4"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>
      </div>
      
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <BlogContent post={post} />
        </div>
      </main>
     </div>
     <Footer />
    </div>
  );
};

export default Blogpost;