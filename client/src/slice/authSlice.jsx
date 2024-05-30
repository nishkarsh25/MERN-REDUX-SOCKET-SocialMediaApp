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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: null,
    loading: false,
    error: false,
    updateLoading: false,
  },
  reducers: {
    followUser: (state, action) => {
      state.authData.user.following.push(action.payload);
    },
    unfollowUser: (state, action) => {
      state.authData.user.following = state.authData.user.following.filter(
        (id) => id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.loading = false;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      })
      .addCase(logIn.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;// Accessing the error payload provided by rejectWithValue
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.loading = false;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      })
      .addCase(signUp.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authData = null;
      });
  },
});

export const { followUser, unfollowUser } = authSlice.actions;
export default authSlice.reducer;
