import { logger } from 'shared/lib';

import { setToken } from '../lib/utils/auth';

import { baseApi } from './baseApi';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegistrationRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          // Сохраняем токен в localStorage
          if (data.token) {
            setToken(data.token);
          }
        } catch (error) {
          logger.error('Ошибка при выполнении запроса авторизации:', error);
        }
      },
      invalidatesTags: ['Users'],
    }),
    register: build.mutation<void, RegistrationRequest>({
      query: (userData) => ({
        url: '/auth/registration',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
