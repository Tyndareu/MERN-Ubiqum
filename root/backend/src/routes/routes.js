/* eslint-disable new-cap */
import { Router } from 'express'
import { ItineraryModel, CityModel } from '../../model/model.js'

const router = Router()

router.get('/all/', (req, res) => {
  CityModel.find({})
    .then(city => res.send(city))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const newCity = new CityModel({
    name: req.body.name,
    country: req.body.country
  })
  newCity.save()
    .then(city => {
      res.send(city)
    })
    .catch(err => {
      console.error(err)
      res.status(501).send('server error')
    })
})

router.delete('/:id', (req, res) => {
  CityModel.findByIdAndDelete(req.params.id)
    .then(city => res.send(city))
    .catch(err => console.log(err))
})

router.post('/post/:id', (req, res) => {
  CityModel.findByIdAndUpdate(req.params.id, { name: req.body.name, country: req.body.country })
    .then(city => {
      res.send(city)
    })
    .catch(err => {
      console.error(err)
      res.status(501).send('server error')
    })
})

//* itinerary Routes

router.get('/itinerary/all', (req, res) => {
  ItineraryModel.find({})
    .then(itinerary => res.send(itinerary))
    .catch(err => console.log(err))
})

router.get('/itinerary/:city', (req, res) => {
  ItineraryModel.find({ city: req.params.city })
    .then((docs) => {
      res.send(docs)
    })
    .catch((err) => {
      console.log(err)
    })
})

export default router
