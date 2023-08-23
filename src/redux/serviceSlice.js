import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../consts';

const initialState = {
  services: [],
  isLoading: true,
  isError: undefined,
};

// Fetch all services
export const fetchAllServices = createAsyncThunk(
  'services/fetchAllServices',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

// Add a new service
export const addService = createAsyncThunk(
  'services/addService',
  async (serviceData) => {
    const response = await axios.post(URL, serviceData);
    return response.data;
  },
);

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.services = action.payload;
      })
      .addCase(fetchAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(addService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.isError = false;
        // Add the newly created service to the services array
        state.services.push(action.payload);
      })
      .addCase(addService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default serviceSlice.reducer;
