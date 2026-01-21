
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plus, LogOut, Settings, UserCog } from 'lucide-react'
import defaultBlogs from '../../data/Blogs.js'
import LoginModal from './LoginModal'
import CreateBlog from './CreateBlog'

export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showCreateBlog, setShowCreateBlog] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('blogs') || '[]')
    
    setPosts([...saved, ...defaultBlogs])
  }, [])

  const handleLogin = (success) => {
    if (success) {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', 'true')
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }

  const handleSaveBlog = (blogData) => {
    const newBlog = {
      ...blogData,
      id: Date.now().toString(),
      image: blogData.bannerImage || blogData.image,
      date: blogData.date || new Date().toISOString().split('T')[0]
    }

    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    const updatedBlogs = [newBlog, ...existingBlogs]
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
    
    setPosts([newBlog, ...posts])
    setShowCreateBlog(false)
  }

 
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin')
    if (adminStatus === 'true') {
      setIsAdmin(true)
    }
  }, [])

  if (showCreateBlog) {
    return (
      <CreateBlog 
        onBack={() => setShowCreateBlog(false)}
        onSave={handleSaveBlog}
      />
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      
      {!isAdmin && (
        <button
          onClick={() => setShowLoginModal(true)}
          className="fixed top-1/2 left-4 z-50 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center"
          style={{ transform: 'translateY(-50%)' }}
          aria-label="Admin Login"
        >
          <UserCog className="h-6 w-6" />
        </button>
      )}
      <div className="max-w-4xl mx-auto px-4">
       
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Blog
          </h2>
          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <>
                <button
                  onClick={() => setShowCreateBlog(true)}
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Blog
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </>
            ) : null}
          </div>
        </div>

       
        <ul className="space-y-6">
          {posts.map(post => (
            <li
              key={post.id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
                {isAdmin && (
                  <div className="ml-4 text-xs text-gray-400">
                    {post.id.length > 10 ? 'Admin Post' : 'Default Post'}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </section>
  )
}