// Import express module
const express = require('express');
const productRoutes = require('./routes/products');
const mongoose = require('mongoose');


const app = express();

app.use(express.json()); 
app.use('/api/products', productRoutes);

// route for the home
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});


mongoose.connect('mongodb://localhost:27017/DressStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));



const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
