const express = require('express');
const { Place } = require('../../db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const places = await Place.find({});
    res.send(places);
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, city, formattedAddress } = req.body;
    const newPlace = {
      name: name,
      city: city,
      formattedAddress: formattedAddress
    }
    const created = await Place.create(newPlace);
    res.send(created)
  } catch (error) {
    console.error(error)
  }
  process.exit();
})

router.put('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    const { name, city, formattedAddress } = req.body;
    const newPlace = {
      name: name,
      city: city,
      formattedAddress: formattedAddress
    }
  
    const updatedPlace = await Place.findByIdAndUpdate(id, newPlace);
  
    res.send(updatedPlace)
  } catch (error) {
    console.error(error)
  }
  process.exit();
})

router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id;

    const deletedPlace = await Place.findByIdAndDelete(id);
  
    res.send(deletedPlace);
  } catch (error) {
    console.error(error)
  }
  process.exit();
})

module.exports = router;