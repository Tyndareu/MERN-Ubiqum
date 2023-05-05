import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => '/all',
      providesTags: ['Cities']
    }),
    createCity: builder.mutation({
      query: (newCity) => ({
        url: '/',
        method: 'POST',
        body: newCity
      }),
      invalidatesTags: ['Cities']
    }),
    deleteCity: builder.mutation({
      query: (name) => ({
        url: `/${name}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Cities']
    })
  })

})

export const { useGetCitiesQuery, useCreateCityMutation, useDeleteCityMutation } = apiSlice
