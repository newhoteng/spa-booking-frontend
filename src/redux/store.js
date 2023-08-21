import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from './users/usersSlice';
import servicesReducer from './serviceSlice';

const store = configureStore({
  reducer: {
    // currentUser: usersReducer,
    services: servicesReducer,
  },
});

export default store;
