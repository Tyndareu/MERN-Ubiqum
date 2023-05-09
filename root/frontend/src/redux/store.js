import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from './citiesSlice'
import itineraryReducer from './itinerarySlice'

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itinerary: itineraryReducer
  }

})
