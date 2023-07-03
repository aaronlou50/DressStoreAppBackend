const mongoose = require('mongoose');

const uri = 'mongodb://localhost/DressStore'; // replace with your MongoDB connection string

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to DB');
  } catch (error) {
    console.error('Error connecting to DB', error);
  }
};

module.exports = connectDB;
