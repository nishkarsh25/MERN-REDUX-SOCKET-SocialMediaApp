import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as AuthApi from '../api/AuthRequests';

// Async thunks
export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      console.log(formData)
      const { data } = await AuthApi.logIn(formData);
      console.log(data)
      navigate('/home', { replace: true });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);








