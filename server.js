const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const GamesController = require('./controllers/Games.js');
app.use('/games', GamesController);

mongoose.connect("mongodb://localhost:27017/games");
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
})


app.listen(3000, ()=>{
	console.log('listening...');
});
