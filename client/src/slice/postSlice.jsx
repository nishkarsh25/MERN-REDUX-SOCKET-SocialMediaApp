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



