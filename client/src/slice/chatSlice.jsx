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

// Slice for chat-related state
const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [],
    currentChat: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducer case for creating chat
      .addCase(createChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reducer case for getting user chats
      .addCase(userChats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userChats.fulfilled, (state, action) => {
        state.loading = false;
        state.chats = action.payload;
      })
      .addCase(userChats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reducer case for finding a chat
      .addCase(findChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findChat.fulfilled, (state, action) => {
        state.loading = false;
        state.currentChat = action.payload;
      })
      .addCase(findChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default chatSlice.reducer;
