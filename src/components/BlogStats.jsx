import React from 'react';

export default function BlogStats({ total, featuredCount }) {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      marginBottom: '20px',
      backgroundColor: '#f7fafc',
      padding: '12px 18px',
      borderRadius: '8px',
      border: '1px solid #edf2f7'
    }}>
      <div><strong>Total Articles:</strong> {total}</div>
      <div><strong>Featured Articles:</strong> {featuredCount}</div>
    </div>
  );
}