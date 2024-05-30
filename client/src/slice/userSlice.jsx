import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as UserApi from '../api/UserRequests';

// Async thunk for updating user data
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await UserApi.updateUser(id, formData);
      console.log(formData)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for following a user
export const followUser = createAsyncThunk(
  'user/followUser',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await UserApi.followUser(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for unfollowing a user
export const unfollowUser = createAsyncThunk(
  'user/unfollowUser',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await UserApi.unfollowUser(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);






