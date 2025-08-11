import {
  addContactThunk,
  deleteContactThunk,
  getContatsThunk,
} from '../../redux/thunk/thunk.js';

export const contactExtraReducers = builder => {
  builder
    .addCase(getContatsThunk.pending, (state, action) => {
      state.contacts.isLoading = true;
    })
    .addCase(getContatsThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    })
    .addCase(getContatsThunk.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    })
    .addCase(addContactThunk.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(addContactThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    })
    .addCase(addContactThunk.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    })
    .addCase(deleteContactThunk.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    })
    .addCase(deleteContactThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    })
    .addCase(deleteContactThunk.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};
