const express = require('express');
const router = express.Router();
// const { User } = require('../../db')

router.get('/', async (req, res) => {
  res.send('Hello World!')
})

router.post('/', (req, res) => {
  res.send('Got a POST request')
})

router.put('/q', (req, res) => {
  res.send('Got a PUT request at /user')
})

router.delete('/q', (req, res) => {
  res.send('Got a DELETE request at /user')
})

module.exports = router;