import { baseApi } from './baseApi';

export interface User {
  id: number;
  email: string;
  banned: boolean;
  banReason: string | null;
  firstName: string;
  lastName: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AddRoleRequest {
  value: string;
  userId: number;
}

export interface BanUserRequest {
  userId: number;
  banReason: string;
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    createUser: build.mutation<User, CreateUserRequest>({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Users'],
    }),
    addRole: build.mutation<void, AddRoleRequest>({
      query: (roleData) => ({
        url: '/users/role',
        method: 'POST',
        body: roleData,
      }),
      invalidatesTags: ['Users', 'Roles'],
    }),
    banUser: build.mutation<void, BanUserRequest>({
      query: (banData) => ({
        url: '/users/ban',
        method: 'POST',
        body: banData,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useAddRoleMutation, useBanUserMutation } =
  usersApi;
