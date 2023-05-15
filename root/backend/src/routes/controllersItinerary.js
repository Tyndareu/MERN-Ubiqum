import { ItineraryModel } from '../model/model.js'

export const getAllItineraries = (req, res) => {
  ItineraryModel.find({})
    .then(itinerary => res.send(itinerary))
    .catch(err => console.log(err))
}

export const getItinerary = (req, res) => {
  ItineraryModel.find({ city: req.params.city })
    .then((docs) => {
      res.send(docs)
    })
    .catch((err) => {
      console.log(err)
    })
}
