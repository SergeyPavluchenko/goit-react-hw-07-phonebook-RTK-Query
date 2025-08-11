import { createSlice } from '@reduxjs/toolkit';

import { contactExtraReducers } from '../../redux/contactExtraReducers/contactExtraReducers.js';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: '',
  extraReducers: contactExtraReducers,
});

export const contactReducer = contactSlice.reducer;
