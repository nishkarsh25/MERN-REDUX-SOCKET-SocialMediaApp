import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as ChatApi from '../api/ChatRequests';

// Async thunk for creating a chat
export const createChat = createAsyncThunk(
  'chat/createChat',
  async (data, thunkAPI) => {
    try {
      const response = await ChatApi.createChat(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for getting user chats
export const userChats = createAsyncThunk(
  'chat/userChats',
  async (id, thunkAPI) => {
    try {
      const response = await ChatApi.userChats(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for finding a chat between two users
export const findChat = createAsyncThunk(
  'chat/findChat',
  async ({ firstId, secondId }, thunkAPI) => {
    try {
      const response = await ChatApi.findChat(firstId, secondId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



