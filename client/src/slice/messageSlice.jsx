import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as MessageApi from '../api/MessageRequests';

// Async thunk for getting messages
export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (id, thunkAPI) => {
    try {
      const response = await MessageApi.getMessages(id);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for adding a message
export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (data, thunkAPI) => {
    try {
      const response = await MessageApi.addMessage(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);




