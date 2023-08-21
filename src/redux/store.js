import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './serviceSlice';

export default configureStore({
  reducer: {
    services: servicesReducer,
  },
});
