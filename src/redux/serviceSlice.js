import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../consts';

const initialState = {
  services: [],
  isLoading: true,
  isError: undefined,
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

export const removeService = createAsyncThunk('services/RemoveService', async (id, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/api/v1/spa_services/${id}`);
    return {};
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    toggleService: (state, action) => {
      const itemId = action.payload;
      state.services = state.services.map((service) => {
        if (service.id !== itemId) return service;
        return { ...service, is_removed: !service.is_removed };
      });
    },
  },
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
      });
  },
});

export const { toggleService } = serviceSlice.actions;
export default serviceSlice.reducer;
