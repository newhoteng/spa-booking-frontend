import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUrl = 'http://127.0.0.1:3001/api/v1/spa_services';

const initialState = {
  serviceDetails: {}, // Make sure it's initialized as an object
  isLoading: true,
  isError: undefined,
};

export const fetchServiceDetails = createAsyncThunk(
  'serviceDetails/fetchServiceDetails',
  async (serviceId) => { // Pass the serviceId parameter
    try {
      const response = await axios.get(`${getUrl.replace(':id', serviceId)}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const serviceDetailsSlice = createSlice({
  name: 'serviceDetails',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchServiceDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchServiceDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.serviceDetails = action.payload;
      })
      .addCase(fetchServiceDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectServiceDetails = (state) => state.serviceDetails.serviceDetails;

export default serviceDetailsSlice.reducer;
