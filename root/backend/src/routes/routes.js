import { Router } from 'express'
import { cityModel } from '../../model/cityModel.js'

const router = Router()

router.get('/', (req, res) => {
  res.send('home page')
})

router.get('/all', (req, res) => {
  cityModel.find({})
    .then(city => res.send(city))
    .catch(err => console.log(err))
})
router.get('/all/', (req, res) => {
  cityModel.find({})
    .then(city => res.send(city))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  // eslint-disable-next-line new-cap
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

router.delete('/:name', (req, res) => {
  console.log(req.params.name)
  /* cityModel.findByIdAndDelete(req.params.name)
  .then(city => res.send(city))
    .catch(err => console.log(err)) */
})

export default router
