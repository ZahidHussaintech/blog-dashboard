import React, { useEffect, useRef } from 'react';

export default function SearchBar({ searchText, onSearchChange, selectedCategory, onCategoryChange }) {
  const searchInputRef = useRef(null);

  // Auto focus input on page load using useRef
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search by title or author..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          flex: 1,
          minWidth: '220px',
          padding: '10px 14px',
          borderRadius: '6px',
          border: '1px solid #cbd5e0',
          outline: 'none',
          fontSize: '15px'
        }}
      />
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{
          padding: '10px 16px',
          borderRadius: '6px',
          border: '1px solid #cbd5e0',
          backgroundColor: '#fff',
          fontSize: '15px'
        }}
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
    </div>
  );
}