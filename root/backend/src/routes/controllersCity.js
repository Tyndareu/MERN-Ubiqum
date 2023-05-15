import { CityModel } from '../model/model.js'

export const getAllCities = (req, res) => {
  CityModel.find({})
    .then(city => res.send(city))
    .catch(err => console.log(err))
}

export const postCity = (req, res) => {
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
}

export const deleteCity = (req, res) => {
  CityModel.findByIdAndDelete(req.params.id)
    .then(city => res.send(city))
    .catch(err => console.log(err))
}

export const editCity = (req, res) => {
  CityModel.findByIdAndUpdate(req.params.id, { name: req.body.name, country: req.body.country })
    .then(city => {
      res.send(city)
    })
    .catch(err => {
      console.error(err)
      res.status(501).send('server error')
    })
}
