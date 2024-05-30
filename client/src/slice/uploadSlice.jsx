import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as UploadApi from '../api/UploadRequest';

// Async thunk for uploading an image
export const uploadImage = createAsyncThunk(
  'upload/uploadImage',
  async (data, thunkAPI) => {
    try {
      console.log('Image upload Action start ho gya hy');
      await UploadApi.uploadImage(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);




