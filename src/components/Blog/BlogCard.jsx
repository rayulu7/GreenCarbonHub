import React from 'react';

const BlogCard = ({ post, onReadMore }) => {
  
  const imageSrc =
    post.contentBlocks?.find((b) => b.type === 'image')?.src ||
    post.image ||
    'https://picsum.photos/400/200?random=' + Math.random();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="absolute top-4 left-4 z-10">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">GCH</span>
        </div>
      </div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://picsum.photos/400/200?random=' + Math.random();
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title || "Blog Post Title"}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt || "This is a blog post excerpt. Click read more to view the full article."}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">{post.date || "Date"}</span>
          <button
            onClick={() => onReadMore(post)}
            className="text-green-500 text-sm font-medium hover:text-green-500 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
