import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.value = action.payload;
    },
  },
});
export const { filterContacts } = filterSlice.actions;
export const getFilter = state => state.filter.value;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

//Selectors:
// export const getContacts = state => state.contacts.items;
