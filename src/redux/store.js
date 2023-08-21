import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

export const store = configureStore({
  reducer: {
    currentUser: usersReducer,
  },
});

export default store;
