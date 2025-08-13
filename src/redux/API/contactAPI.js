import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6887aae6071f195ca9819edd.mockapi.io',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
