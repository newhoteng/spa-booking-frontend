import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'http://localhost:3001/api/v1/reservations';
// 'http://localhost:3001/api/v1/reservations'
// 'http://127.0.0.1:3001/api/v1/reservations'

// {
//   "user": {
//       "username": "mike",
//       "password": "123456"
//   }
// }

const initialState = {
  userReservations: [],
  isLoading: false,
  error: undefined,
};

export const getUserReservations = createAsyncThunk('reservations/getUserReservations', async (name, thunkAPI) => {
  try {
    const resp = await axios(`${Url}`);
    const { data } = resp;
    console.log(data);
    const arrayOfBooks = [];
    // Object.entries(data).forEach((entry) => {
    //   const bookObj = {
    //     item_id: entry[0],
    //     title: entry[1][0].title,
    //     author: entry[1][0].author,
    //     category: entry[1][0].category,
    //   };
    //   arrayOfBooks.push(bookObj);
    // });
    return arrayOfBooks;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postReservation = createAsyncThunk('reservations/postReservation', async (newReservation, thunkAPI) => {
  try {
    const resp = await axios.post(`${Url}`, newReservation);
    console.log(resp);
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
      state.books = action.payload;
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
