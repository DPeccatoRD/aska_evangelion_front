import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { baseApi } from '../api/baseApi';

import { rtkQueryErrorLogger } from './middleware/rtkQueryErrorLogger';
import { authSlice } from './slices/authSlice';
import { roleSlice } from './slices/roleSlice';
import { uiSlice } from './slices/uiSlice';
import { userSlice } from './slices/userSlice';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [roleSlice.name]: roleSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

// Необходимо для рефетчинга при фокусе окна и т.д.
setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
