/* eslint-disable new-cap */
import { Router } from 'express'
import { getAllCities, postCity, deleteCity, editCity } from './controllersCity.js'
import { getAllItineraries, getItinerary } from './controllersItinerary.js'

const router = Router()

router.get('/city/all/', getAllCities)

router.post('/city/', postCity)

router.delete('/city/:id', deleteCity)

router.put('/city/:id', editCity)

//* itinerary Routes

router.get('/itinerary/all', getAllItineraries)

router.get('/itinerary/:city', getItinerary)

export default router
