import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationsSlice';

export const store = configureStore({
  reducer: {
    userReservations: reservationsReducer,
  },
});

export default store;
