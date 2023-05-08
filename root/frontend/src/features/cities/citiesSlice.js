import { createSlice } from '@reduxjs/toolkit'
import { allCities } from '../../components/utils'

const initialState = allCities

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.push(action.payload)
    },
    editCity: (state, action) => {
      const index = state.findIndex(city => city.name === action.payload.name)
      state[index] = action.payload
    },
    deleteCity: (state, action) => {
      const index = state.find(city => city.name === action.payload.name)
      state.splice(state.indexOf(index), 1)
    }
  }
})

export const { addCity, deleteCity, editCity } = citiesSlice.actions
export default citiesSlice.reducer
