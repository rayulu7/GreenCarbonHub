import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const BlogFloatingButtons = () => {
  return (
    <div className="fixed right-6 bottom-6 space-y-4 z-50">
      <button className="w-14 h-14 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center">
        <Phone className="w-6 h-6" />
      </button>
      <button className="w-14 h-14 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BlogFloatingButtons;