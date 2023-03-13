const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
