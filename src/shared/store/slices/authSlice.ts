import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  email: null,
  firstName: null,
  lastName: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        email: string;
        firstName: string;
        lastName: string;
      }>,
    ) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
