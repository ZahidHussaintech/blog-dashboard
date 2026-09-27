import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Given initial blog data
const initialBlogs = [
  { id: 1, title: "Understanding React Hooks", category: "React", author: "Ali Khan", readingTime: 6, featured: true },
  { id: 2, title: "Redux Toolkit Basics", category: "Redux", author: "Sara Ahmed", readingTime: 8, featured: false },
  { id: 3, title: "Building Blog UI in React", category: "React", author: "Hamza Malik", readingTime: 5, featured: false },
  { id: 4, title: "Node.js and Express Introduction", category: "Node", author: "Ayesha Noor", readingTime: 7, featured: true }
];

// Async Thunk (Simulated API Fetch)
export const fetchBlogsAsync = createAsyncThunk('blogs/fetchBlogs', async (_, { rejectWithValue }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return initialBlogs;
  } catch (err) {
    return rejectWithValue("Failed to fetch blogs from server");
  }
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: initialBlogs,
    searchText: '',
    selectedCategory: 'All',
    loading: false,
    error: null
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
    toggleFeatured: (state, action) => {
      const blog = state.blogs.find(b => b.id === action.payload);
      if (blog) {
        blog.featured = !blog.featured;
      }
    },
    addBlog: (state, action) => {
      state.blogs.unshift(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSearchText, setCategory, deleteBlog, toggleFeatured, addBlog } = blogSlice.actions;
export default blogSlice.reducer;