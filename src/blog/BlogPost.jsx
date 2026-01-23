import React from 'react';

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-post">
      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <p className="blog-post-date">{formatDate(post.date)}</p>
      </div>
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="blog-post-footer">
        <a 
          href="#"
          className="back-link"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.history.replaceState(null, '', window.location.pathname);
          }}
        >
          ← Back to Blog
        </a>
      </div>
    </div>
  );
}
