import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistenceConf = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const contactsReducer = persistReducer(
  persistenceConf,
  contactSlice.reducer
);

export const { addContact, filterContact, deleteContact } = contactSlice.actions;

  