import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'http://localhost:3001/login';

const initialState = {
  currentUser: {},
  error: undefined,
};

export const getCurrentUser = createAsyncThunk('user/getCurrentUser', async (newUser, thunkAPI) => {
  try {
    const resp = await axios.post(`${Url}`, newUser);
    // const resp = await axios(`${baseUrl}/apps/${appId}/books`);
    const { data } = resp;
    console.log(data);
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const usersSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = {};
    },
  },
  extraReducers: (builder) => {
    // getCurrentUser
    builder.addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    });

    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
