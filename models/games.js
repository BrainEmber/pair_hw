const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  title: String,
  description: String,
  year: String
});

const Games = mongoose.model('Game', gameSchema);

module.exports = Games;
