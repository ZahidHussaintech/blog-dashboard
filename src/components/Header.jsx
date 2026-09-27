import React from 'react';

export default function Header() {
  return (
    <header style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '15px', marginBottom: '20px' }}>
      <h1 style={{ color: '#2b6cb0', margin: 0 }}>Tech Blog Dashboard</h1>
      <p style={{ color: '#718096', margin: '5px 0 0 0' }}>Manage, search, and filter tech articles with Redux Toolkit</p>
    </header>
  );
}