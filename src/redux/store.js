import { configureStore } from '@reduxjs/toolkit';
// import reservationsReducer from './reservations/reservationsSlice';
import servicesReducer from './serviceSlice';

const store = configureStore({
  reducer: {
    // userReservations: reservationsReducer,
    services: servicesReducer,
  },
});

export default store;
