import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
   
    const saved = JSON.parse(localStorage.getItem('Blogs') || '[]');
    setPosts(saved);
  }, []);

  const addPost = () => {
    if (!title || !excerpt) {
      alert('Title & excerpt are required');
      return;
    }
    const newPost = {
      id: String(Date.now()),
      title,
      date: date || new Date().toISOString().split('T')[0],
      excerpt,
      content,
      image
    };
    const updated = [...posts, newPost];
    localStorage.setItem('blogs', JSON.stringify(updated));
    setPosts(updated);
    setTitle('');
    setExcerpt('');
    setContent('');
    setImage('');
    setDate('');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Blog Admin</h2>

        
        <div className="space-y-4 mb-12">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full px-4 py-3 border rounded"
          />
          <input
            value={date}
            onChange={e => setDate(e.target.value)}
            type="date"
            className="w-full px-4 py-3 border rounded"
          />
          <input
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            placeholder="Excerpt"
            className="w-full px-4 py-3 border rounded"
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Full Content (markdown-style)"
            className="w-full px-4 py-3 border rounded h-32"
          />
          <input
            value={image}
            onChange={e => setImage(e.target.value)}
            placeholder="Image URL (optional)"
            className="w-full px-4 py-3 border rounded"
          />
          <button
            onClick={addPost}
            className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600"
          >
            Add New Post
          </button>
        </div>

        
        <ul className="space-y-4">
          {posts.map(p => (
            <li key={p.id} className="p-4 bg-white rounded shadow">
              <strong>{p.title}</strong> — <span className="text-sm text-gray-500">{p.date}</span>
              <p className="mt-1 text-gray-700">{p.excerpt}</p>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="text-gray-500 italic">No custom posts yet.</li>
          )}
        </ul>
      </div>
    </section>
  );
}
