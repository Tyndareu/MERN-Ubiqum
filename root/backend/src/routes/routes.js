/* eslint-disable new-cap */
import { Router } from 'express'
import { cityModel } from '../../model/cityModel.js'

const router = Router()

router.get('/all/', (req, res) => {
  cityModel.find({})
    .then(city => res.send(city))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const newCity = new cityModel({
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
  cityModel.findByIdAndDelete(req.params.id)
    .then(city => res.send(city))
    .catch(err => console.log(err))
})

router.post('/post/:id', (req, res) => {
  cityModel.findByIdAndUpdate(req.params.id, { name: req.body.name, country: req.body.country })
    .then(city => {
      res.send(city)
    })
    .catch(err => {
      console.error(err)
      res.status(501).send('server error')
    })
})

export default router
