// redux-config.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/counter/counterslice';
import phoneReducer from './Features/counter/phoneslice';
import sevaReducer from './Features/counter/sevaslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  phone: phoneReducer, // Add phone reducer
  seva: sevaReducer, // Add phone reducer
});

// Configuration for persisting the entire state
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor for the store
export const persistor = persistStore(store);
