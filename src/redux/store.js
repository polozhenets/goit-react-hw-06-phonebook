import { configureStore } from '@reduxjs/toolkit';
import {  contactsReducer } from './slices/contact-slice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';


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
