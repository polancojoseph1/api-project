const express = require('express');
const router = express.Router();
const { User } = require('../../db')

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    const created = await User.create(newUser);
    res.send(created)    
  } catch (error) {
    console.error(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);
  
    res.send(deletedUser);
  } catch (error) {
    console.error(error)
  }
})

module.exports = router;