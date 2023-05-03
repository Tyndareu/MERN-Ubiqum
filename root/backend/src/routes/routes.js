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

export default router
