
import { setItineraries } from '../redux/itinerarySlice.js'

const apiURL = 'http://localhost:3000/itinerary/'
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
