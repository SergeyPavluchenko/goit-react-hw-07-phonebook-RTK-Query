import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactAPI,
  deleteContactAPI,
  getContactsAPI,
} from 'components/API/contactsMockAPI.js';

export const getContatsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const data = await getContactsAPI();
    return data;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const data = await addContactAPI(contactData);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContactAPI(id);

    return id;
  }
);
