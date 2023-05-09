import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './slices/contact-slice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistenceConf = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistenceConf,
  contactSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware(getDefaultMidleware) {
    return getDefaultMidleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});



export const persistence = persistStore(store);
