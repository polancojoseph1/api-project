const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/place', require('./place'));
router.use('/itinerary', require('./itinerary'));

module.exports = router;