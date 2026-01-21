import React from 'react';
import { ChevronLeft } from 'lucide-react';

const BlogPagination = () => {
  return (
    <div className="flex justify-center mt-12 mb-8">
      <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-2" />
        Older posts
      </button>
    </div>
  );
};

export default BlogPagination;