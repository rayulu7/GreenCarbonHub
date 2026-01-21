import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

import BlogHero from './BlogHero';
import BlogCard from './BlogCard';
import BlogArchive from './BlogArchive';
import BlogPagination from './BlogPagination';
import BlogStats from './BlogStats';

import CreateBlog from './CreateBlog';
import EditBlog from './EditBlog';
import Blogpost from './Blogpost.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const { user } = useAuth();
  const isAdmin = user && user.role === 'admin';

  useEffect(() => {

    const adminBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');

    // Initialize demo blogs if none exist
    if (adminBlogs.length === 0) {
      const demoBlogs = [
        {
          id: 'demo-rayulu-1',
          title: 'Solar Installation Best Practices for Residential Properties',
          excerpt: 'Learn the essential steps and considerations for installing solar panels on residential rooftops...',
          content: [
            {
              id: '1',
              type: 'heading',
              content: 'Understanding Solar Installation',
              settings: { level: 'h2', align: 'left' }
            },
            {
              id: '2',
              type: 'text',
              content: 'Solar installation requires careful planning and professional expertise. This guide covers the key aspects of residential solar panel installation.',
              settings: { align: 'left' }
            },
            {
              id: '3',
              type: 'image',
              content: './residential-solar.jpg',
              settings: { alt: 'Solar panels on residential roof' }
            }
          ],
          author: 'Rayulu',
          date: '2024-12-01',
          category: 'Solar Installation',
          bannerImage: './residential-solar.jpg'
        },
        {
          id: 'demo-subbireddy-1',
          title: 'Water & Waste Management Solutions for Modern Cities',
          excerpt: 'Exploring innovative approaches to water treatment and waste management in urban environments...',
          content: [
            {
              id: '1',
              type: 'heading',
              content: 'Urban Water Management Challenges',
              settings: { level: 'h2', align: 'left' }
            },
            {
              id: '2',
              type: 'text',
              content: 'Modern cities face complex water management challenges. This article explores sustainable solutions for water treatment and waste management.',
              settings: { align: 'left' }
            },
            {
              id: '3',
              type: 'image',
              content: './waste_water.jpg',
              settings: { alt: 'Waste water treatment facility' }
            }
          ],
          author: 'Subbireddy',
          date: '2024-12-02',
          category: 'Water & Water Waste Management System',
          bannerImage: './waste_water.jpg'
        },
        {
          id: 'demo-rayulu-2',
          title: 'Housing Society Solar Integration Guide',
          excerpt: 'A comprehensive guide for housing societies looking to implement solar energy solutions...',
          content: [
            {
              id: '1',
              type: 'heading',
              content: 'Benefits of Community Solar',
              settings: { level: 'h2', align: 'left' }
            },
            {
              id: '2',
              type: 'text',
              content: 'Housing societies can significantly reduce energy costs and environmental impact through collective solar initiatives.',
              settings: { align: 'left' }
            },
            {
              id: '3',
              type: 'image',
              content: './housing-society-solar.jpg',
              settings: { alt: 'Solar installation on housing society' }
            }
          ],
          author: 'Rayulu',
          date: '2024-12-03',
          category: 'Housing Society',
          bannerImage: './housing-society-solar.jpg'
        },
        {
          id: 'demo-subbireddy-2',
          title: 'Industrial Sector Energy Efficiency Solutions',
          excerpt: 'Optimizing energy consumption and implementing sustainable practices in industrial facilities...',
          content: [
            {
              id: '1',
              type: 'heading',
              content: 'Industrial Energy Optimization',
              settings: { level: 'h2', align: 'left' }
            },
            {
              id: '2',
              type: 'text',
              content: 'Industrial facilities can achieve significant energy savings through modern efficiency solutions and sustainable practices.',
              settings: { align: 'left' }
            },
            {
              id: '3',
              type: 'image',
              content: './industrial-solar.jpg',
              settings: { alt: 'Industrial solar installation' }
            }
          ],
          author: 'Subbireddy',
          date: '2024-12-04',
          category: 'Industrial Sector',
          bannerImage: './industrial-solar.jpg'
        }
      ];

      localStorage.setItem('blogs', JSON.stringify(demoBlogs));
      setAllPosts(demoBlogs);
    } else {
      setAllPosts(adminBlogs);
    }
  }, []);

  const handleSaveBlog = (blogData) => {
    const newBlog = {
      ...blogData,
      id: Date.now().toString(),
      image: blogData.bannerImage || blogData.image,
      date: blogData.date || new Date().toISOString().split('T')[0]
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const updatedBlogs = [newBlog, ...existingBlogs];
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    setAllPosts([newBlog, ...allPosts]);
    setShowCreateBlog(false);
  };

  const handleDeleteBlog = (blogId) => {

    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const updatedBlogs = existingBlogs.filter(blog => blog.id !== blogId);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    setAllPosts(allPosts.filter(post => post.id !== blogId));
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (showCreateBlog) {
    return (
      <CreateBlog
        onBack={() => setShowCreateBlog(false)}
        onSave={handleSaveBlog}
      />
    );
  }

  if (editingBlog) {
    return (
      <EditBlog
        blog={editingBlog}
        onBack={() => setEditingBlog(null)}
        onSave={updatedBlog => {

          const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
          const updatedBlogs = existingBlogs.map(b => b.id === updatedBlog.id ? updatedBlog : b);
          localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
          setAllPosts(updatedBlogs);
          setEditingBlog(null);
        }}
      />
    );
  }

  if (selectedPost) {
    return <Blogpost post={selectedPost} onBack={handleBackToBlog} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <BlogHero />

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-end items-center space-x-4">
            {isAdmin ? (
              <>
                <button
                  onClick={() => setShowCreateBlog(true)}
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Blog
                </button>
              </>
            ) : null}
          </div>
        </div>


        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {allPosts.map((post) => (
                  <div key={post.id} className="relative group">
                    <BlogCard post={post} onReadMore={handleReadMore} />

                    {isAdmin && post.id.length > 10 && (
                      <div className="absolute top-2 right-2 z-10 flex gap-2">
                        <button
                          onClick={() => handleDeleteBlog(post.id)}
                          className="p-2 bg-white rounded-full shadow hover:bg-red-100"
                          title="Delete Blog"
                        >
                          <Trash2 className="h-5 w-5 text-red-500" />
                        </button>
                        <button
                          onClick={() => setEditingBlog(post)}
                          className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
                          title="Edit Blog"
                        >
                          ✏️
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>


              <BlogPagination />
            </div>


            <div className="lg:w-80">
              <BlogArchive />
            </div>
          </div>


          <BlogStats />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Blog;
