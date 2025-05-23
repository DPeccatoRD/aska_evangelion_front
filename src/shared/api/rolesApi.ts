import { baseApi } from './baseApi';

export interface Role {
  id: number;
  value: string;
  description: string;
}

export interface CreateRoleRequest {
  value: string;
  description: string;
}

export const rolesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRoles: build.query<Role[], void>({
      query: () => '/roles',
      providesTags: ['Roles'],
    }),
    getRoleByValue: build.query<Role, string>({
      query: (value) => `/roles/${value}`,
      providesTags: ['Roles'],
    }),
    createRole: build.mutation<Role, CreateRoleRequest>({
      query: (roleData) => ({
        url: '/roles',
        method: 'POST',
        body: roleData,
      }),
      invalidatesTags: ['Roles'],
    }),
  }),
});

export const { useGetRolesQuery, useGetRoleByValueQuery, useCreateRoleMutation } = rolesApi;
