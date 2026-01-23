import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost.jsx';
import postsData from './posts.json';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load posts from JSON
    setPosts(postsData.posts || []);
    setLoading(false);

    // Check if there's a post ID in the URL hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      const post = postsData.posts.find(p => p.id === hash);
      if (post) {
        setSelectedPost(post);
      }
    }

    // Listen for hash changes (back button)
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const post = postsData.posts.find(p => p.id === hash);
        if (post) {
          setSelectedPost(post);
        }
      } else {
        setSelectedPost(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.location.hash = post.id;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return <div className="blog-loading">Loading...</div>;
  }

  if (selectedPost) {
    return <BlogPost post={selectedPost} />;
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog</h1>
        <p className="blog-subtitle">Updates on projects, learning, and other things I'm working on</p>
      </div>
      <div className="blog-posts">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>No posts yet. Check back soon!</p>
          </div>
        ) : (
          posts.map((post) => (
            <article 
              key={post.id} 
              className="blog-post-card"
              onClick={() => handlePostClick(post)}
            >
              <h2 className="blog-post-card-title">{post.title}</h2>
              <p className="blog-post-card-date">{formatDate(post.date)}</p>
              <p className="blog-post-card-excerpt">{post.excerpt}</p>
              <a 
                href={`#${post.id}`} 
                className="blog-post-card-link"
                onClick={(e) => {
                  e.preventDefault();
                  handlePostClick(post);
                }}
              >
                Read more →
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
