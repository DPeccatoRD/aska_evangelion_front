import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { config } from '../lib/utils/config';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    credentials: 'include',
    prepareHeaders: (headers) => {
      // Если есть токен авторизации, добавляем его к заголовкам
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Users', 'Roles'],
  endpoints: () => ({}),
});
