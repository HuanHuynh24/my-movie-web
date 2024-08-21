const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');
const path = require('path'); // Import path module

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*' // Địa chỉ frontend của bạn
}));

// Cấu hình để phục vụ các tệp tĩnh trong thư mục 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Kết nối đến MongoDB
mongoose.connect('mongodb+srv://ngochuan:ngochuan2k4@cluster0.ajkuoqf.mongodb.net/db_moviewebsite?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Mongoose connected to db_moviewebsite');
});

// Sử dụng routes
app.use('/api', movieRoutes);

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
