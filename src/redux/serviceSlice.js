import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../consts';

const initialState = {
  services: [],
  isLoading: true,
  isError: false,
};

export const fetchAllServices = createAsyncThunk(
  'services/fetchAllServices',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return (error.message);
    }
  },
);

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllServices.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.services = action.payload;
      })
      .addCase(fetchAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default serviceSlice.reducer;
