const express = require('express');
const router = express.Router();

router.use('/schools', require('./schools.js'));

module.exports = router;