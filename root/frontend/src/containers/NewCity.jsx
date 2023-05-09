import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { isMobile } from '../components/utils'
import { useDispatch, useSelector } from 'react-redux'
import { addCity, editCity } from '../redux/citiesSlice'
export const NewCity = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cities = useSelector(state => state.cities)
  const params = useParams()
  const [city, setCity] = useState({
    name: '',
    country: ''
  })

  const handleChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(editCity(city))
      navigate(-1)
    } else {
      dispatch(addCity(city))
      navigate(-1)
    }
  }
  useEffect(() => {
    if (params.id) {
      setCity(cities.list.find(city => city._id === params.id))
    }
  }, [])
  return (
    <>
      {isMobile ? <Logo /> : null}
      <h2 className="mb-5">New City</h2>
      <form onSubmit={handleOnSubmit}>
        <TextField
          required
          name='name'
          id="outlined-required"
          label="Name - Required"
          margin="normal"
          color="secondary"
          onChange={handleChange}
          value={city.name}
        />
        <TextField
          required
          name='country'
          id="outlined-required"
          label="Country - Required"
          margin="normal"
          color="secondary"
          onChange={handleChange}
          value={city.country}
        />
        <TextField margin="normal" color="secondary" type="file" />
        <div>
          <Button
            type="submit"
            value="Submit"
            variant="contained"
            color="primary"
          >
            save
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            color="secondary"
            onClick={() => navigate(-1)}
          >
            cancel
          </Button>
        </div>
      </form>
    </>
  )
}
