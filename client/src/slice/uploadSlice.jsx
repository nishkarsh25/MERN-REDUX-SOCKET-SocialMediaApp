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



// Slice for upload-related state
const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    uploading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducer case for upload start
      .addCase(uploadImage.pending, (state) => {
        state.uploading = true;
        state.error = null;
      })
      // Reducer case for successful upload
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.uploading = false;
        // Handle successful upload here
      })
      // Reducer case for failed upload
      .addCase(uploadImage.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload;
      });
  }
});

export const { } = uploadSlice.actions; // No actions are defined in this slice
export default uploadSlice.reducer;
