import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowLeft, Image, Save, Plus, X, Type, Link, List, Trash2 } from 'lucide-react';

const CreateBlog = ({
  onBack,
  onSave,
  initialData,
  isEdit,
  onInputChange,
  onContentChange,
  onSubmit
}) => {
  
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      author: 'GCH Admin',
      date: new Date().toISOString().split('T')[0],
      category: '',
      content: []
    }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const movedElementIdRef = useRef(null);

  
  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  
  const handleInputChange = (field, value) => {
    if (isEdit && onInputChange) {
      onInputChange(field, value);
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };
  const handleContentChange = (content) => {
    if (isEdit && onContentChange) {
      onContentChange(content);
    } else {
      setFormData(prev => ({ ...prev, content }));
    }
  };

  const addElement = (type) => {
    const newElement = {
      id: Date.now().toString(),
      type: type,
      content: '',
      settings: {}
    };
    switch (type) {
      case 'heading':
        newElement.content = 'New Heading';
        newElement.settings = { level: 'h2', align: 'left' };
        break;
      case 'text':
        newElement.content = 'Enter your text here...';
        newElement.settings = { align: 'left' };
        break;
      case 'image':
        newElement.content = '';
        newElement.settings = { width: '100%', alt: 'Image description' };
        break;
      case 'link':
        newElement.content = 'Click here';
        newElement.settings = { url: 'https://example.com', color: 'blue' };
        break;
      case 'list':
        newElement.content = ['Item 1', 'Item 2', 'Item 3'];
        newElement.settings = { type: 'bullet' };
        break;
      case 'banner':
        newElement.content = '';
        newElement.settings = {
          height: '300px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          imageUrl: '',
          fontSize: '2rem',
          align: 'center',
          textColor: '#ffffff'
        };
        break;
      default:
        break;
    }
    const newContent = [...(isEdit ? (initialData?.content || []) : formData.content), newElement];
    handleContentChange(newContent);
    setSelectedElement(newElement.id);
  };

  const updateElement = (id, field, value) => {
    const newContent = (isEdit ? (initialData?.content || []) : formData.content).map(element =>
      element.id === id ? { ...element, [field]: value } : element
    );
    handleContentChange(newContent);
  };

  const updateElementSettings = (id, setting, value) => {
    const newContent = (isEdit ? (initialData?.content || []) : formData.content).map(element =>
      element.id === id ? { ...element, settings: { ...element.settings, [setting]: value } } : element
    );
    handleContentChange(newContent);
  };

  const removeElement = (id) => {
    const newContent = (isEdit ? (initialData?.content || []) : formData.content).filter(element => element.id !== id);
    handleContentChange(newContent);
    setSelectedElement(null);
  };

  
  const moveElement = (id, direction) => {
    const content = [...(isEdit ? (initialData?.content || []) : formData.content)];
    const index = content.findIndex(element => element.id === id);
    let newIndex = index;
    if (direction === 'up' && index > 0) {
      [content[index], content[index - 1]] = [content[index - 1], content[index]];
      newIndex = index - 1;
    } else if (direction === 'down' && index < content.length - 1) {
      [content[index], content[index + 1]] = [content[index + 1], content[index]];
      newIndex = index + 1;
    }
    movedElementIdRef.current = content[newIndex].id;
    handleContentChange(content);
  };
  const contentArray = useMemo(() => isEdit ? (initialData?.content || []) : formData.content, [isEdit, initialData?.content, formData.content]);

  useEffect(() => {
    if (movedElementIdRef.current) {
      setSelectedElement(movedElementIdRef.current);
      movedElementIdRef.current = null;
    }
  }, [contentArray]);


  const renderElementOptions = (element) => {
    if (selectedElement !== element.id) return null;
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-2">
        <div className="flex gap-2 mb-2">
          <button onClick={() => moveElement(element.id, 'up')} className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600">↑</button>
          <button onClick={() => moveElement(element.id, 'down')} className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600">↓</button>
          <button onClick={() => removeElement(element.id)} className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"><X className="h-3 w-3" /></button>
        </div>
        
        {element.type === 'banner' && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Banner Image URL (optional)</label>
              <input
                type="url"
                value={element.settings.imageUrl || ''}
                onChange={e => updateElementSettings(element.id, 'imageUrl', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
                placeholder="https://example.com/banner.jpg"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Font Size</label>
              <select
                value={element.settings.fontSize}
                onChange={e => updateElementSettings(element.id, 'fontSize', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
              >
                <option value="1.5rem">Small</option>
                <option value="2rem">Normal</option>
                <option value="2.5rem">Large</option>
                <option value="3rem">Extra Large</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Text Alignment</label>
              <select
                value={element.settings.align}
                onChange={e => updateElementSettings(element.id, 'align', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Height</label>
              <select
                value={element.settings.height}
                onChange={e => updateElementSettings(element.id, 'height', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
              >
                <option value="200px">Small (200px)</option>
                <option value="300px">Medium (300px)</option>
                <option value="400px">Large (400px)</option>
                <option value="500px">Extra Large (500px)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Text Color</label>
              <input
                type="color"
                value={element.settings.textColor}
                onChange={e => updateElementSettings(element.id, 'textColor', e.target.value)}
                className="w-full h-8 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Background</label>
              <select
                value={element.settings.background}
                onChange={e => updateElementSettings(element.id, 'background', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
              >
                <option value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">Purple Gradient</option>
                <option value="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">Pink Gradient</option>
                <option value="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">Blue Gradient</option>
                <option value="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">Green Gradient</option>
                <option value="#3b82f6">Solid Blue</option>
                <option value="#10b981">Solid Green</option>
                <option value="#f59e0b">Solid Orange</option>
              </select>
            </div>
          </>
        )}
       
        {element.type === 'heading' && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Alignment</label>
              <select
                value={element.settings.align}
                onChange={e => updateElementSettings(element.id, 'align', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </>
        )}
       
        {element.type === 'text' && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Alignment</label>
              <select
                value={element.settings.align}
                onChange={e => updateElementSettings(element.id, 'align', e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </>
        )}
      </div>
    );
  };

  
  const renderElement = (element) => {
    const isSelected = selectedElement === element.id;
    switch (element.type) {
      case 'heading':
        return (
          <div
            className={`relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            tabIndex={0}
            onFocus={() => setSelectedElement(element.id)}
          >
            <input
              type="text"
              value={element.content}
              onChange={e => updateElement(element.id, 'content', e.target.value)}
              className="w-full text-2xl font-bold text-gray-900 border-none outline-none bg-transparent"
              placeholder="Enter heading..."
              style={{ textAlign: element.settings.align || 'left' }}
              onFocus={() => setSelectedElement(element.id)}
            />
            {isSelected && (
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">Heading</div>
            )}
            {isSelected && renderElementOptions(element)}
          </div>
        );
      case 'text':
        return (
          <div
            className={`relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            tabIndex={0}
            onFocus={() => setSelectedElement(element.id)}
          >
            <textarea
              value={element.content}
              onChange={e => updateElement(element.id, 'content', e.target.value)}
              className="w-full text-gray-700 border-none outline-none bg-transparent resize-none"
              rows={4}
              placeholder="Enter your text here..."
              style={{ textAlign: element.settings.align || 'left' }}
              onFocus={() => setSelectedElement(element.id)}
            />
            {isSelected && (
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">Text</div>
            )}
            {isSelected && renderElementOptions(element)}
          </div>
        );
      case 'image':
        return (
          <div
            className={`relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            tabIndex={0}
            onFocus={() => setSelectedElement(element.id)}
          >
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <input
                type="url"
                value={element.content}
                onChange={e => updateElement(element.id, 'content', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL..."
                onFocus={() => setSelectedElement(element.id)}
              />
              {element.content && (
                <img
                  src={element.content}
                  alt={element.settings.alt}
                  className="mt-2 w-full h-48 object-cover rounded"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = 'https://picsum.photos/400/200?random=' + Math.random();
                  }}
                />
              )}
            </div>
            {isSelected && (
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">Image</div>
            )}
            {isSelected && renderElementOptions(element)}
          </div>
        );
      case 'link':
        return (
          <div
            className={`relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            tabIndex={0}
            onFocus={() => setSelectedElement(element.id)}
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={element.content}
                onChange={e => updateElement(element.id, 'content', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Link text..."
                onFocus={() => setSelectedElement(element.id)}
              />
              <input
                type="url"
                value={element.settings.url}
                onChange={e => updateElementSettings(element.id, 'url', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="URL..."
                onFocus={() => setSelectedElement(element.id)}
              />
            </div>
            <div className="mt-2">
              <a
                href={element.settings.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {element.content || 'Preview Link'}
              </a>
            </div>
            {isSelected && (
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">Link</div>
            )}
            {isSelected && renderElementOptions(element)}
          </div>
        );
      case 'list':
        return (
          <div
            className={`relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            tabIndex={0}
            onFocus={() => setSelectedElement(element.id)}
          >
            <div className="space-y-2">
              {element.content.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-gray-500 mt-2">•</span>
                  <input
                    type="text"
                    value={item}
                    onChange={e => {
                      const newContent = [...element.content];
                      newContent[index] = e.target.value;
                      updateElement(element.id, 'content', newContent);
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="List item..."
                    onFocus={() => setSelectedElement(element.id)}
                  />
                  <button
                    onClick={() => {
                      const newContent = element.content.filter((_, i) => i !== index);
                      updateElement(element.id, 'content', newContent);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const newContent = [...element.content, 'New item'];
                  updateElement(element.id, 'content', newContent);
                }}
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Item
              </button>
            </div>
            {isSelected && (
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">List</div>
            )}
            {isSelected && renderElementOptions(element)}
          </div>
        );
      case 'banner':
        return (
          <div
            className={`relative ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
            tabIndex={0}
            onFocus={() => setSelectedElement(element.id)}
          >
            {element.settings.imageUrl ? (
              <div
                className="w-full rounded-lg overflow-hidden flex items-center justify-center"
                style={{ minHeight: element.settings.height || '300px', background: '#eee' }}
              >
                <img
                  src={element.settings.imageUrl}
                  alt={element.settings.alt}
                  style={{ width: '100%', height: element.settings.height || '300px', objectFit: 'cover' }}
                  onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/1200/400?random=' + Math.random(); }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    top: 0,
                    left: 0,
                    height: element.settings.height || '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: element.settings.align || 'center',
                    color: element.settings.textColor || '#fff',
                    fontWeight: 'bold',
                    fontSize: element.settings.fontSize || '2rem',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  <input
                    type="text"
                    value={element.content}
                    onChange={e => updateElement(element.id, 'content', e.target.value)}
                    className="w-full text-center bg-transparent border-none outline-none placeholder-white placeholder-opacity-70"
                    placeholder="Enter banner text..."
                    style={{ color: element.settings.textColor || '#fff', fontSize: element.settings.fontSize || '2rem', textAlign: element.settings.align || 'center' }}
                    onFocus={() => setSelectedElement(element.id)}
                  />
                </div>
              </div>
            ) : (
              <div
                className="w-full rounded-lg p-8 text-center text-white flex items-center justify-center"
                style={{ background: element.settings.background, minHeight: element.settings.height || '300px' }}
              >
                <input
                  type="text"
                  value={element.content}
                  onChange={e => updateElement(element.id, 'content', e.target.value)}
                  className="w-full text-3xl font-bold bg-transparent border-none outline-none text-center placeholder-white placeholder-opacity-70"
                  placeholder="Enter banner text..."
                  style={{ color: element.settings.textColor || '#ffffff', fontSize: element.settings.fontSize || '2rem', textAlign: element.settings.align || 'center' }}
                  onFocus={() => setSelectedElement(element.id)}
                />
              </div>
            )}
            {isSelected && (
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">Banner</div>
            )}
            {isSelected && renderElementOptions(element)}
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const firstTextElement = formData.content.find(element => element.type === 'text');
    const excerpt = firstTextElement ? firstTextElement.content.substring(0, 150) + '...' : 'Blog post excerpt';

   
    const firstImageElement = formData.content.find(element => element.type === 'image');
    const bannerImage = firstImageElement ? firstImageElement.content : '';

    const blogData = {
      title: formData.title,
      excerpt: excerpt,
      content: formData.content,
      author: formData.author,
      date: formData.date,
      category: formData.category,
      bannerImage: bannerImage,
      id: Date.now().toString()
    };

    try {
      await onSave(blogData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {!isEdit && (
                <button
                  onClick={onBack}
                  className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
                >
                  <ArrowLeft className="h-5 w-5 mr-1" />
                  Back to Blogs
                </button>
              )}
              {!isEdit && <h1 className="text-2xl font-bold text-gray-900">Create Custom Blog Post</h1>}
            </div>
            {!isEdit && (
              <button
                type="submit"
                form="blog-form"
                disabled={isSubmitting}
                className="flex items-center bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                <Save className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Saving...' : 'Save Blog Post'}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showSuccess && !isEdit && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Blog post created successfully! Redirecting to blog list...
          </div>
        )}

        <form id={isEdit ? 'edit-blog-form' : 'blog-form'} onSubmit={isEdit ? onSubmit : handleSubmit} className="space-y-6">
         
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Blog Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Solar Installation">Solar Installation</option>
                  <option value="Related to Solar Installation">Related to Solar Installation</option>
                  <option value="Water & Water Waste Management System">Water & Water Waste Management System</option>
                  <option value="Housing Society">Housing Society</option>
                  <option value="Industrial Sector">Industrial Sector</option>
                  <option value="Housing Sector">Housing Sector</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Tips & Advice">Tips & Advice</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          
          <div style={{position: 'fixed', top: '45%', left: '32px', transform: 'translateY(-50%)', zIndex: 50, background: 'transparent', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', pointerEvents: 'none'}}>
            <div style={{pointerEvents: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(255,255,255,0.0)', borderRadius: '16px', boxShadow: 'none', padding: 0}}>
              <button
                type="button"
                onClick={() => addElement('banner')}
                className="flex items-center bg-purple-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-600"
                style={{minWidth: '120px'}}
              >
                <Plus className="h-4 w-4 mr-1" />
                Banner
              </button>
              <button
                type="button"
                onClick={() => addElement('heading')}
                className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600"
                style={{minWidth: '120px'}}
              >
                <Type className="h-4 w-4 mr-1" />
                Heading
              </button>
              <button
                type="button"
                onClick={() => addElement('text')}
                className="flex items-center bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600"
                style={{minWidth: '120px'}}
              >
                <Type className="h-4 w-4 mr-1" />
                Text
              </button>
              <button
                type="button"
                onClick={() => addElement('image')}
                className="flex items-center bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600"
                style={{minWidth: '120px'}}
              >
                <Image className="h-4 w-4 mr-1" />
                Image
              </button>
              <button
                type="button"
                onClick={() => addElement('link')}
                className="flex items-center bg-indigo-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-600"
                style={{minWidth: '120px'}}
              >
                <Link className="h-4 w-4 mr-1" />
                Link
              </button>
              <button
                type="button"
                onClick={() => addElement('list')}
                className="flex items-center bg-pink-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-pink-600"
                style={{minWidth: '120px'}}
              >
                <List className="h-4 w-4 mr-1" />
                List
              </button>
            </div>
          </div>
         
          <div className="bg-white rounded-lg shadow-md p-6 mt-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Content Builder</h2>

            
            <div className="min-h-[400px] border-2 border-dashed border-gray-300 rounded-lg p-6">
              {formData.content.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-lg mb-4">Start building your blog post!</p>
                  <p className="text-sm">Click the buttons above to add content elements</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {formData.content.map((element) => (
                    <div key={element.id} className="relative">
                      {renderElement(element)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;