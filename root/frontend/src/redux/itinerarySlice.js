import { createSlice } from '@reduxjs/toolkit'

const apiURL = 'http://localhost:3000/itinerary/'

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

export const fetchAllItineraries = (pname) => async (dispatch) => {
  try {
    await fetch(apiURL + pname, { method: 'GET' })
      .then(res => res.json())
      .then((res) => {
        dispatch(setItineraries(res))
      })
      .catch(err => console.log(err))
  } catch (error) {
    console.log(error)
  }
}
