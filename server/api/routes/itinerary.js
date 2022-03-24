const express = require('express');
const router = express.Router();
const { Itinerary } = require('../../db')

router.get('/', async (req, res) => {
  const itineraries = await Itinerary.find({});
  res.send(itineraries);
})

router.post('/', async (req, res) => {
  const { city, arrival, departure, timeOfStay } = req.body;
  const newItinerary = {
    city: city,
    arrival: arrival,
    departure: departure,
    timeOfStay: timeOfStay
  }
  const created = await Itinerary.create(newItinerary);
  res.send(created)
})

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  const { city, arrival, departure, timeOfStay } = req.body;
  const newItinerary = {
    city: city,
    arrival: arrival,
    departure: departure,
    timeOfStay: timeOfStay
  }

  const updatedItinerary = await Itinerary.findByIdAndUpdate(id, newItinerary);

  res.send(updatedItinerary)
})

router.delete('/:id', async (req, res) => {
  let id = req.params.id;

  const deletedItinerary = await Itinerary.findByIdAndDelete(id);

  res.send(deletedItinerary)
})

module.exports = router;