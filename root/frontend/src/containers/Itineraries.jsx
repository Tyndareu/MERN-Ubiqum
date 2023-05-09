import { useEffect } from 'react'
import { fetchAllItineraries } from '../redux/itinerarySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {itineraryState.list.map((itinerary) => (
        <div key={itinerary._id} style={{ border: '1px black solid', borderRadius: 15, padding: 15 }}>
        <h4 >{itinerary.title}</h4>
        <h5>Price: {itinerary.price}€</h5>
        <h5>Rating: {itinerary.rating}</h5>
        <h5>Img: {itinerary.url}</h5>
        <h5>Duration: {itinerary.duration} day/s</h5>
        </div>
      ))}
      </div>
    </>
  )
}
