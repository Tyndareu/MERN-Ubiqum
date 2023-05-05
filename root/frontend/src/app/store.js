import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from '../features/cities/citiesSlice'

export const store = configureStore({
  reducer: {
    tasks: citiesReducer
  }
})
