const express = require('express');
const router = express.Router();

const { getSchools } = require('../db/schools.js');

router.get('/', async(req, res) => {
    try {
        const rows = await getSchools();
        res.send(rows);
    } catch (error) {
        
    }
})
module.exports = router;