const express = require('express');
const { Place } = require('../../db');
const router = express.Router();

router.get('/', async (req, res) => {
  const places = await Place.find({});
  res.send(places);
})

router.post('/', async (req, res) => {
  const { name, city, formattedAddress } = req.body;
  const newPlace = {
    name: name,
    city: city,
    formattedAddress: formattedAddress
  }
  const created = await Place.create(newPlace);
  res.send(created)
})

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  const { name, city, formattedAddress } = req.body;
  const newPlace = {
    name: name,
    city: city,
    formattedAddress: formattedAddress
  }

  const updatedPlace = await Place.findByIdAndUpdate(id, newPlace);

  res.send(updatedPlace)
})

router.delete('/:id', async (req, res) => {
  let id = req.params.id;

  const deletedPlace = await Place.findByIdAndDelete(id);

  res.send(deletedPlace);
})

module.exports = router;