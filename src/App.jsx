import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchText,
  setCategory,
  deleteBlog,
  toggleFeatured,
  fetchBlogsAsync
} from './redux/blogSlice';
import { useFilteredBlogs } from './hooks/useFilteredBlogs';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BlogCard from './components/BlogCard';
import BlogStats from './components/BlogStats';

export default function App() {
  const dispatch = useDispatch();
  const { blogs, searchText, selectedCategory, loading, error } = useSelector((state) => state.blogState);

  const filteredBlogs = useFilteredBlogs(blogs, searchText, selectedCategory);

  const handleDelete = useCallback((id) => {
    dispatch(deleteBlog(id));
  }, [dispatch]);

  const handleToggleFeatured = useCallback((id) => {
    dispatch(toggleFeatured(id));
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => dispatch(fetchBlogsAsync())}
          style={{
            padding: '8px 14px',
            backgroundColor: '#3182ce',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🔄 Simulate API Refresh (Async Thunk)
        </button>
      </div>

      {loading && <p style={{ color: '#3182ce', fontWeight: 'bold' }}>Loading articles from API...</p>}
      {error && <p style={{ color: '#e53e3e', fontWeight: 'bold' }}>Error: {error}</p>}

      <BlogStats
        total={blogs.length}
        featuredCount={blogs.filter((b) => b.featured).length}
      />

      <SearchBar
        searchText={searchText}
        onSearchChange={(val) => dispatch(setSearchText(val))}
        selectedCategory={selectedCategory}
        onCategoryChange={(val) => dispatch(setCategory(val))}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px'
      }}>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onDelete={handleDelete}
              onToggleFeatured={handleToggleFeatured}
            />
          ))
        ) : (
          <p style={{ color: '#a0aec0', gridColumn: '1 / -1' }}>No articles match your search or filter.</p>
        )}
      </div>
    </div>
  );
}