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

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await AuthApi.signUp(formData);
      navigate('/home', { replace: true });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.clear();
});




