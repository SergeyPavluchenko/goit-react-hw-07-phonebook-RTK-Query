import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice/filterSlice';
import { contactApi } from './API/contactAPI';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
