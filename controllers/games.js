const express = require('express');
const router = express.Router();
const Games = require('../models/games.js');

router.get('/', (req, res)=>{
	res.send('super sweet');
});
module.exports = router;