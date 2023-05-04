import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()
app.use(cors({ origin: true }))
app.use('/', routes)

export default app
