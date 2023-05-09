import { createSlice } from '@reduxjs/toolkit'

const apiURL = 'http://localhost:3000/'

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    list: []
  },
  reducers: {
    setCities: (state, action) => {
      state.list = action.payload
    },
    addCity: (state, action) => {
      postCityDB(action.payload)
    },
    editCity: (state, action) => {
      const data = {
        name: action.payload.name,
        country: action.payload.country
      }
      editCityDB(action.payload._id, data)
    },

    deleteCity: (state, action) => {
      const index = state.list.find(city => city._id === action.payload)
      state.list.splice(state.list.indexOf(index), 1)
      deleteCityDB(action.payload)
    }
  }
})

export const { setCities, addCity, deleteCity, editCity } = citiesSlice.actions
export default citiesSlice.reducer

export const fetchAllCities = () => async (dispatch) => {
  try {
    await fetch(apiURL + 'all', { method: 'GET' })
      .then(res => res.json())
      .then((res) => {
        dispatch(setCities(res))
      })
      .catch(err => console.log(err))
  } catch (error) {
    console.log(error)
  }
}
const postCityDB = async (data) => {
  await fetch(
    apiURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}
const deleteCityDB = async (id) => {
  try {
    await fetch(apiURL + id, {
      method: 'DELETE'
    })
  } catch (error) {
    console.log(error)
  }
}

const editCityDB = async (id, data) => {
  await fetch(
    apiURL + 'post/' + id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}
