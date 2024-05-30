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

// Slice for message-related state
const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducer case for getting messages
      .addCase(getMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reducer case for adding a message
      .addCase(addMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});


