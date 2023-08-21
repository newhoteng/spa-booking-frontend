import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userId = JSON.parse(localStorage.getItem('user')).id;

const postUrl = 'http://localhost:3001/api/v1/reservations';
const getUrl = `http://localhost:3001/api/v1/users/${userId}/reservations`;

const initialState = {
  userReservations: [],
  isLoading: false,
  error: undefined,
};

// api_v1_user_reservations GET /api/v1/users/:user_id/reservations(.:format)
export const getUserReservations = createAsyncThunk('reservations/getUserReservations', async (name, thunkAPI) => {
  try {
    const resp = await axios(`${getUrl}`);
    const { data } = resp;
    // console.log(data[0].id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postReservation = createAsyncThunk('reservations/postReservation', async (newReservation, thunkAPI) => {
  try {
    const resp = await axios.post(`${postUrl}`, newReservation);
    // console.log(resp);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const reservationsSlice = createSlice({
  name: 'userReservations',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.userReservations.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // getUserReservations
    builder.addCase(getUserReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userReservations = action.payload;
    });
    builder.addCase(getUserReservations.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    // postReservation
    builder.addCase(postReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postReservation.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postReservation.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
