import { createAsyncThunk} from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

// Async thunk for fetching posts

export const getPostDetail = createAsyncThunk(
    "post/getPostDetail",
    async(post_slug,  thunkAPI) => {
        const config = {
            headers: {
                Accept: "application/json"
}
    }
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/${post_slug}`, config)
            return res.data
                
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getPostsByCategory = createAsyncThunk(
    "post/getPostsByCategory",
    async (category_slug, thunkAPI) => {

        const config = {
            headers: {
                Accept: "application/json"
            } 
        }
        
        try {

            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/${category_slug}/posts`, config)
            return res.data
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

)

export const getPostsLatestByCategories = createAsyncThunk(
    "post/getPostsLatestByCategories",
    async(_, thunkAPI) => {
        const config = {
            headers: {
                Accept: "application/json"
}
    }
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/postslatest`, config)
            return res.data
                
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const blogSearch = createAsyncThunk(
    "post/blogSearch",
    async(search_term, thunkAPI) => {
        const config = {
            headers: {
                Accept: "application/json"
}
    }
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/search?SearchText=${search_term}`, config)
            return res.data
                
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


// Crate posts slice

const initialState = { 
        posts: null,
        loading: false,
        error: null,
        categories_with_posts: null,
        filtered_posts: null,
        post: null

    }

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPostDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPostDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload.Post;
            })
            .addCase(getPostDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.post = null;
      })
            .addCase(getPostsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPostsByCategory.fulfilled, (state, action) => {

                state.loading = false;
                state.posts = action.payload.posts;
            })
            .addCase(getPostsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.posts = null;
      })
            .addCase(getPostsLatestByCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPostsLatestByCategories.fulfilled, (state, action) => {

                state.loading = false;
                state.categories_with_posts = action.payload.categories_with_posts;
            })
            .addCase(getPostsLatestByCategories.rejected, (state, action) => {
                state.loading = false;
                state.categories_with_posts = null;
                state.error = action.error.message      
      })
         .addCase(blogSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(blogSearch.fulfilled, (state, action) => {
              
                state.loading = false;            
                state.filtered_posts = action.payload.Filtered_Posts;
            })
            .addCase(blogSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.filtered_posts= null;
      })

            

        }
})
export default postsSlice.reducer;
