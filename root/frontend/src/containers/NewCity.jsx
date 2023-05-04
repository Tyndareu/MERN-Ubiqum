import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { isMobile } from '../../utils/utils'
export const NewCity = () => {
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [country, setCountry] = useState()

  const handleOnName = (e) => {
    setName(e.target.value)
  }
  const handleOnCountry = (e) => {
    setCountry(e.target.value)
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newCity = {
      name,
      country
    }
    alert('name ' + newCity.name + ' country ' + newCity.country)
  }
  return (
    <>
      {isMobile ? <Logo /> : null}
      <h2 className="mb-5">New City</h2>
      <form onSubmit={handleOnSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Name - Required"
          margin="normal"
          color="secondary"
          onChange={handleOnName}
        />
        <TextField
          required
          id="outlined-required"
          label="Country - Required"
          margin="normal"
          color="secondary"
          onChange={handleOnCountry}
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
