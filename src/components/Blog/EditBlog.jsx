import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import CreateBlog from './CreateBlog';

const EditBlog = ({ blog, onBack, onSave }) => {
  
  const [formData, setFormData] = useState(blog);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

 
  useEffect(() => {
    setFormData(blog);
  }, [blog]);

 
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 
  const handleContentChange = (content) => {
    setFormData(prev => ({ ...prev, content }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSave(formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onBack();
      }, 1000);
    } catch (_err) {
      setIsSubmitting(false);
    }
  };

  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
            <button
              type="submit"
              form="edit-blog-form"
              disabled={isSubmitting}
              className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              <Save className="h-5 w-5 mr-2" />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
             Blog post updated!
          </div>
        )}
       
        <CreateBlog
          isEdit
          initialData={formData}
          onInputChange={handleInputChange}
          onContentChange={handleContentChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
        
        <div className="flex justify-center mt-8">
          <button
            onClick={onBack}
            className="flex items-center px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog; 