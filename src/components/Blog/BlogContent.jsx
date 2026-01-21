import React from 'react';
import { Phone } from 'lucide-react';

const BlogContent = ({ post }) => {
 
  const renderElement = (element, idx) => {
    
    const isFirstBanner = idx === 0 && element.type === 'banner';
    switch (element.type) {
      case 'heading': {
        const HeadingTag = element.settings?.level || 'h2';
        return (
          <HeadingTag
            key={element.id || idx}
            className="font-bold mb-4 text-gray-900"
            style={{ textAlign: element.settings?.align || 'left' }}
          >
            {element.content}
          </HeadingTag>
        );
      }
      case 'text':
        return (
          <p
            key={element.id || idx}
            className="mb-4 text-gray-700"
            style={{ textAlign: element.settings?.align || 'left' }}
          >
            {element.content}
          </p>
        );
      case 'image':
        return (
          <div key={element.id || idx} className="my-6 flex justify-center">
            <img
              src={element.content}
              alt={element.settings?.alt || ''}
              style={{ width: element.settings?.width || '300px', borderRadius: 8, objectFit: 'cover' }}
              className="shadow-lg"
              onError={e => {
                e.target.onerror = null;
                e.target.src = 'https://picsum.photos/400/200?random=' + Math.random();
              }}
            />
          </div>
        );
      case 'banner':
        return (
          <div
            key={element.id || idx}
            className={`my-8${isFirstBanner ? ' mt-0 mb-12 shadow-xl rounded-xl' : ''}`}
            style={isFirstBanner ? { boxShadow: '0 8px 32px rgba(0,0,0,0.12)', marginTop: 0, marginBottom: '3rem' } : {}}
          >
            {element.settings?.imageUrl ? (
              <div
                className="w-full rounded-lg overflow-hidden flex items-center justify-center relative"
                style={{ minHeight: element.settings?.height || '300px', background: '#eee' }}
              >
                <img
                  src={element.settings.imageUrl}
                  alt={element.settings.alt}
                  style={{ width: '100%', height: element.settings?.height || '300px', objectFit: 'cover' }}
                  onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/1200/400?random=' + Math.random(); }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    top: 0,
                    left: 0,
                    height: element.settings?.height || '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: element.settings?.align || 'center',
                    color: element.settings?.textColor || '#fff',
                    fontWeight: 'bold',
                    fontSize: element.settings?.fontSize || '2rem',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  {element.content}
                </div>
              </div>
            ) : (
              <div
                className="w-full rounded-lg p-8 text-center text-white flex items-center justify-center"
                style={{ background: element.settings?.background, minHeight: element.settings?.height || '300px' }}
              >
                <span
                  style={{ color: element.settings?.textColor || '#ffffff', fontSize: element.settings?.fontSize || '2rem', textAlign: element.settings?.align || 'center' }}
                >
                  {element.content}
                </span>
              </div>
            )}
          </div>
        );
      case 'list':
        return (
          <ul key={element.id || idx} className="mb-4 pl-6 list-disc text-gray-700">
            {element.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case 'link':
        return (
          <div key={element.id || idx} className="mb-4">
            <a
              href={element.settings?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
              style={{ fontSize: element.settings?.fontSize || '16px', color: element.settings?.color || '#3b82f6' }}
            >
              {element.content || 'Preview Link'}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1">
     
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          {post?.title || "Blog Post"}
        </h1>
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <span>GCH</span>
          <span className="mx-2">•</span>
          <span>{post?.date || "Date"}</span>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-none">
        {Array.isArray(post?.content) && post.content.length > 0
          ? post.content.map(renderElement)
          : <p className="text-gray-500">No content.</p>}
      </div>
    </div>
  );
};

export default BlogContent;