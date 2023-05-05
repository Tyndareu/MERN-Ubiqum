import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.push(action.payload)
    },
    editCity: (state, action) => {
      const index = state.findIndex(city => city.id === action.payload.id)
      state[index] = action.payload
    },
    deleteCity: (state, action) => {
      return state.filter(city => city.id !== action.payload)
    }
  }
})

export const { addCity } = citiesSlice.actions
export default citiesSlice.reducer
