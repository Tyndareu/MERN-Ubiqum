import app from './routes/app.js'
import mongoose from 'mongoose'
import { mongoURI } from './mongodb/keys.js'

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}
)

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(
    () => { console.log('connect to MongoDB') },
    err => { console.error(err) }
  )
