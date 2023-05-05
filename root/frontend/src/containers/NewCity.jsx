import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { isMobile } from '../../utils/utils'
import { useCreateCityMutation } from '../features/cities/apiSlice'
export const NewCity = () => {
  const navigate = useNavigate()
  const [city, setCity] = useState({
    name: '',
    country: ''
  })

  const [createCity] = useCreateCityMutation()

  const handleChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(city)
    createCity(city)
  }
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
        />
        <TextField
          required
          name='country'
          id="outlined-required"
          label="Country - Required"
          margin="normal"
          color="secondary"
          onChange={handleChange}
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
