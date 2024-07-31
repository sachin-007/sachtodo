// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/authSlice'
// import taskReducer from './slices/taskSlice'

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     tasks: taskReducer,
//   },
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/authSlice'
// import taskReducer from './slices/taskSlice'

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     tasks: taskReducer,
//   },
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch



// frontend/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import taskReducer from './slices/taskSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage for persistence

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only auth state will be persisted
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    tasks: taskReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
