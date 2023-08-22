import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from './users/usersSlice';
import reservationsReducer from './reservations/reservationsSlice';
import servicesReducer from './serviceSlice';

const store = configureStore({
  reducer: {
    // currentUser: usersReducer,
    userReservations: reservationsReducer,
    services: servicesReducer,
  },
});

export default store;
