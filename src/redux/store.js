import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationsSlice';
import servicesReducer from './serviceSlice';
import serviceDetailsReducer from './serviceDetailsSlice';

const store = configureStore({
  reducer: {
    userReservations: reservationsReducer,
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
  },
});

export default store;
