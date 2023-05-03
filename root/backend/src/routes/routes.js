import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('home page')
})
router.get('/about', function (req, res) {
  res.send('About')
})

export default router
