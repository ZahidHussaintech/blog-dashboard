import React from 'react';

const BlogCard = React.memo(({ blog, onDelete, onToggleFeatured }) => {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '18px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontSize: '12px',
            backgroundColor: '#ebf8ff',
            color: '#2b6cb0',
            padding: '3px 8px',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            {blog.category}
          </span>
          <span style={{ fontSize: '13px', color: '#718096' }}>⏱ {blog.readingTime} mins</span>
        </div>
        <h3 style={{ fontSize: '18px', margin: '12px 0 8px 0', color: '#2d3748' }}>{blog.title}</h3>
        <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#4a5568' }}>By: <b>{blog.author}</b></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <button
          onClick={() => onToggleFeatured(blog.id)}
          style={{
            padding: '6px 10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: blog.featured ? '#fefcbf' : '#edf2f7',
            color: blog.featured ? '#b7791f' : '#4a5568',
            fontSize: '13px',
            fontWeight: 'bold'
          }}
        >
          {blog.featured ? "★ Featured" : "☆ Make Featured"}
        </button>
        <button
          onClick={() => onDelete(blog.id)}
          style={{
            padding: '6px 12px',
            backgroundColor: '#feb2b2',
            color: '#9b2c2c',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 'bold'
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
});

export default BlogCard;