import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },

  img: {
    type: String
  }
})

export const cityModel = mongoose.model('city', citySchema)
