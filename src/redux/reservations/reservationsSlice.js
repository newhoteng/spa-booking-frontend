import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const postUrl = 'http://localhost:3001/api/v1/reservations';

const initialState = {
  userReservations: [],
  isLoading: false,
  error: undefined,
};

export const getUserReservations = createAsyncThunk(
  'reservations/getUserReservations',
  async () => {
    try {
      const resp = await axios.get(`http://localhost:3001/api/v1/users/${JSON.parse(localStorage.getItem('user')).id}/reservations`);
      return resp.data;
    } catch (error) {
      return (error.message);
    }
  },
);

export const postReservation = createAsyncThunk('reservations/postReservation', async (newReservation, thunkAPI) => {
  try {
    const resp = await axios.post(`${postUrl}`, newReservation);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const reservationsSlice = createSlice({
  name: 'userReservations',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // getUserReservations
    builder.addCase(getUserReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.userReservations = action.payload;
    });
    builder.addCase(getUserReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // postReservation
    builder.addCase(postReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postReservation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userReservations.push(action.payload);
    });
    builder.addCase(postReservation.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
