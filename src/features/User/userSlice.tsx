import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { User } from './user';
import { http } from '../../../utils/request';

interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

// const USER_URL = `${baseUrl}/users`;

export const createUserAsync = createAsyncThunk(
  'user/createUserAsync',
  async (userData: User) => {
    const response = await http.post("/users", userData);
    return response.data;
  }
);

export const getUserAsync = createAsyncThunk(
  'user/getUserAsync',
  async (userId: string) => {
    const response = await axios.get(`/users/${userId}`);
    console.log('Response data:', response.data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      // state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to create user';
        state.status = 'failed';
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.error = action.error.message ?? 'Failed to get user';
        state.status = 'failed';
      });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
