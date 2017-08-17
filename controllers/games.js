const express = require('express');
const router = express.Router();
const Games = require('../models/games.js');

router.get('/', (req, res)=>{
	Games.find({}, (err, foundGames)=>{
	res.json(foundGames);
	});
});

router.post('/', (req, res)=>{
	Games.create(req.body, (err, createdGame)=>{
		res.json(createdGame);
	});
});

router.delete('/', (req, res)=>{
	res.send('delete route');
});

router.put('/:id', (req, res)=>{
	Games.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGame)=>{
		res.json(updatedGame);
	})
});

module.exports = router;
