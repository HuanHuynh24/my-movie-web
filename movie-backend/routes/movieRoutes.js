// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies.js');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');
// Tạo thư mục uploads nếu chưa tồn tại
const uploadDir = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình multer để lưu trữ ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });


// Lấy tất cả phim
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Thêm phim mới
router.post('/movies', upload.fields([
  {
    name:'imgBanner', maxCount: 1
  },
  {
    name:'imgAvata', maxCount:1
  }
]), async (req, res) => {

  console.log('Uploading');


  const { name, year, description, videoUrl } = req.body;
  const imgBanner = req.files['imgBanner'] ? `/uploads/${req.files['imgBanner'][0].filename}` : '';
  const imgAvata = req.files['imgAvata'] ? `/uploads/${req.files['imgAvata'][0].filename}` : '';


  const movie = new Movie({
    name,
    year,
    description,
    videoUrl,
    imgBanner, 
    imgAvata
  });

  try {
    await movie.save();
    res.status(201).send(movie);
    console.log(`Movie saved`);
  } catch (err) {
    res.status(400).send(err);
    console.log(`Error saving movie: ${err}`);
  }
});

// Xóa phim
router.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) res.status(404).send("No movie found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
