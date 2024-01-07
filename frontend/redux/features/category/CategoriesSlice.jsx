import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching category list
export const getCategoryList = createAsyncThunk(
  'category/getCategoryList',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };

      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`, config);
      return res.data.Categories;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

// Create category slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoryList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.categories = null;
      });
  },
});

export default categoriesSlice.reducer;

