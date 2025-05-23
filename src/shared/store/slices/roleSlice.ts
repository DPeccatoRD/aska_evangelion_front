import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Role } from '../../api/rolesApi';

interface RoleState {
  roles: Role[];
  selectedRole: Role | null;
}

const initialState: RoleState = {
  roles: [],
  selectedRole: null,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRoles: (state, action: PayloadAction<Role[]>) => {
      state.roles = action.payload;
    },
    setSelectedRole: (state, action: PayloadAction<Role>) => {
      state.selectedRole = action.payload;
    },
    clearSelectedRole: (state) => {
      state.selectedRole = null;
    },
  },
});

export const { setRoles, setSelectedRole, clearSelectedRole } = roleSlice.actions;
