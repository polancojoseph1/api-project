const express = require('express');
const router = express.Router();
const { Itinerary } = require('../../db')

router.get('/', async (req, res) => {
  try {
    const itineraries = await Itinerary.find({});
    res.send(itineraries);
  } catch (error) {
    console.error(error)
  }
  
})

router.post('/', (req, res) => {
  try {
    const { city, arrival, departure, timeOfStay } = req.body;
    const newItinerary = {
      city: city,
      arrival: arrival,
      departure: departure,
      timeOfStay: timeOfStay
    }
    const created = Itinerary.create(newItinerary);
    res.send(created);
  } catch (error) {
    console.error(error);
  }
})

router.put('/:id', async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id;

    const deletedItinerary = await Itinerary.findByIdAndDelete(id);

    res.send(deletedItinerary)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;