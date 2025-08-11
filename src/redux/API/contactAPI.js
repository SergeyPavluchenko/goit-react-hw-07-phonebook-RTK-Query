import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6887aae6071f195ca9819edd.mockapi.io',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
    }),
  }),
});

export const { useGetContactsQuery } = contactApi;
