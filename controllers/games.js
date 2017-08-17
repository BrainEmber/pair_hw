const express = require('express');
const router = express.Router();
const Games = require('../models/games.js');

router.get('/', (req, res)=>{
	res.send('index route');
});

router.post('/', (req, res)=>{
	res.send('post route');
});

router.delete('/', (req, res)=>{
	res.send('delete route');
});

router.put('/:id', (req, res)=>{
	res.send('put route');
});

module.exports = router;