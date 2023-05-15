import { setCities } from '../redux/citiesSlice'

const apiURL = 'http://localhost:3000/city/'
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
export const postCityDB = async (data) => {
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
export const deleteCityDB = async (id) => {
  try {
    await fetch(apiURL + id, {
      method: 'DELETE'
    })
  } catch (error) {
    console.log(error)
  }
}

export const editCityDB = async (id, data) => {
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
