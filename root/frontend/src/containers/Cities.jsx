import { useState } from 'react'
import travel from '../images/travel.jpg'
import { useGetCitiesQuery, useDeleteCityMutation } from '../features/cities/apiSlice'
import {
  makeStyles,
  Card,
  TextField,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button
} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 150
  },
  media: {
    height: 150
  }
})

export const Cities = () => {
  const [searchCity, setSearchCity] = useState('')
  const classes = useStyles()
  const navigate = useNavigate()
  let cityFilter = []

  const { data, isError, isLoading, error } = useGetCitiesQuery()
  const [deleteCity] = useDeleteCityMutation()

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  if (isError) {
    return <h4>Error: {error} </h4>
  }

  const handleOnSearchCity = (e) => {
    setSearchCity(e.target.value)
  }

  if (searchCity === '') {
    cityFilter = data
  } else {
    cityFilter = data.filter((x) =>
      x.name.toLowerCase().startsWith(searchCity.toLowerCase())
    )
  }

  return (
    <>
      <h2>Cities</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          onChange={handleOnSearchCity}
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          size="small"
          margin="normal"
        />
        <Button onClick={() => navigate('/newCity')} style={{ marginTop: 12, margin: 10 }} variant="outlined"> New City</Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center'
        }}
      >
        {cityFilter.map((city) => (
          <Card key={city.name} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={city.img ? city.img : travel}
                title={city.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {city.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {city.country}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => deleteCity(city.name)}>Delete</Button>
          </Card>
        ))}
      </div>
    </>
  )
}
