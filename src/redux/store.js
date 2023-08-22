import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationsSlice';
import usersReducer from './users/usersSlice';
import servicesReducer from './serviceSlice';

const store = configureStore({
  reducer: {
    userReservations: reservationsReducer,
    currentUser: usersReducer,
    services: servicesReducer,
  },
});

export default store;
