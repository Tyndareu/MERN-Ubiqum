import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema({
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

const ItinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  rating: {
    type: Number
  },
  duration: {
    type: String
  },
  price: {
    type: Number
  },
  hashtags: {
    type: String
  },
  city: {
    type: String,
    required: true
  }
})

export const ItineraryModel = mongoose.model('itinerary', ItinerarySchema)
export const CityModel = mongoose.model('city', CitySchema)
