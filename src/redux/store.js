import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { contactApi } from './API/contactAPI';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
