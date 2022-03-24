const express = require('express');
const router = express.Router();
const { User } = require('../../db')

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
})

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }
  const created = await User.create(newUser);
  res.send(created)
})

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  const { firstName, lastName, email, password } = req.body;
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }

  const updatedUser = await User.findByIdAndUpdate(id, newUser);

  res.send(updatedUser);
})

router.delete('/:id', async (req, res) => {
  
  let id = req.params.id;

  const deletedUser = await User.findByIdAndDelete(id);

  res.send(deletedUser);
})

module.exports = router;