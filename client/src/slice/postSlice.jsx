import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as PostsApi from '../api/PostsRequests';

// Async thunk for getting timeline posts
export const getTimelinePosts = createAsyncThunk(
  'posts/getTimelinePosts',
  async (id, thunkAPI) => {
    try {
      const { data } = await PostsApi.getTimelinePosts(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for uploading a post
export const uploadPost = createAsyncThunk(
  'upload/uploadPost',
  async (data, thunkAPI) => {
    try {
      const newPost = await PostsApi.uploadPost(data);
      return newPost.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for liking a post
export const likePost = createAsyncThunk(
  'posts/likePost',
  async (payload, thunkAPI) => {
    try {
      const { postId, userId } = payload;
      await PostsApi.likePost(postId, userId);
      return postId; // Return the postId if the like is successful
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice for post-related state
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
    loading: false,
    error: null,
    uploading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducer case for retrieving start
      .addCase(getTimelinePosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Reducer case for successful retrieval
      .addCase(getTimelinePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      // Reducer case for failed retrieval
      .addCase(getTimelinePosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reducer case for upload start
      .addCase(uploadPost.pending, (state) => {
        state.uploading = true;
        state.error = null;
      })
      // Reducer case for successful upload
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.uploading = false;
      })
      // Reducer case for failed upload
      .addCase(uploadPost.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload;
      })

      // Reducer case for upload start
      .addCase(likePost.pending, (state) => {
        state.uploading = true;
        state.error = null;
      })
      // Reducer case for successful upload
      .addCase(likePost.fulfilled, (state, action) => {
        state.uploading = false;
      })
      // Reducer case for failed upload
      .addCase(likePost.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload;
      });
  }
});

export const { } = postSlice.actions; // No actions are defined in this slice
export default postSlice.reducer;
