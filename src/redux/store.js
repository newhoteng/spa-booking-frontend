import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/UsersSlice';

export const store = configureStore({
  reducer: {
    currentUser: usersReducer,
  },
});

export default store;