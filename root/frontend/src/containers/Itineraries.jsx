import { useEffect } from 'react'
import { fetchAllItineraries } from '../services/servicesItinerary'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Footer } from './Footer'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export function Itineraries () {
  const dispatch = useDispatch()
  const itineraryState = useSelector((state) => state.itinerary)
  const params = useParams()

  useEffect(() => {
    dispatch(fetchAllItineraries(params.name))
  }, [])

  return (
    <>
      <h2>Itineraries</h2>
      {itineraryState.list.length === 0 ? <h4>No itineraries found</h4> : null}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center'
        }}
      >
        {itineraryState.list.map((itinerary) => (
          <div
            style={{ width: 180 }}
            key={itinerary._id}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={itinerary.url}
                  alt="city image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {itinerary.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {itinerary.price}€ <br />
                    Rating: {itinerary.rating}<br />
                    Duration: {itinerary.duration} day/s
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
