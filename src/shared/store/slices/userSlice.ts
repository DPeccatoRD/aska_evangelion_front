import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../api/usersApi';

interface UserState {
  currentUser: User | null;
  usersList: User[];
}

const initialState: UserState = {
  currentUser: null,
  usersList: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    setUsersList: (state, action: PayloadAction<User[]>) => {
      state.usersList = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, setUsersList, clearCurrentUser } = userSlice.actions;
