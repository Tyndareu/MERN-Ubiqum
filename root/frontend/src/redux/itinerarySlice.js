import { createSlice } from '@reduxjs/toolkit'

export const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    list: []
  },
  reducers: {
    setItineraries: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setItineraries } = itinerarySlice.actions
export default itinerarySlice.reducer
