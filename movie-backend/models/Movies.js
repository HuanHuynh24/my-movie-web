const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  imgBanner: { type: String, required: false },
  imgAvata: { type: String, required: false },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
