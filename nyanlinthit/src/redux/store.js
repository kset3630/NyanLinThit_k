// store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Slice/apiSlice'; // Adjust the import path according to your project structure

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export  const store = makeStore();