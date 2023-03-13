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

const userModel = require('./backend/models/userModel');
const animalModel = require('./backend/models/HerdsmanAnimalModel');

const userLib = require('./backend/lib/userLib');
const animalLib = require('./backend/lib/HerdsmanAnimalLib');

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
  res.send('Welcome to MeatLedger!');
});

app.post('/server/orgs/signup', async (req, res) => {
  try {
      await userLib.createUser(req.body);
      res.send("Registered successfully");
  } catch (error) {
      res.status(500).send("Failed to register: " + error.message);
  }
});

app.post('/server/orgs/signin', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
      const user = await userModel.findOne({email: email});

      if (!user) {
          return res.status(401).send('Invalid email or password');
      }
      
      if(user.password === password){
          userdata = {
              "email": user.email,
              "usertype": user.usertype
          }
          
          res.send({user: userdata});
      }
      else{
          return res.status(401).send('Invalid email or password');
      }
  } catch (error) {
      res.status(500).send("Failed to sign in: " + error.message);
  }
});


//Add Animal
app.post('/server/herdsman/newaniaml', async (req, res) => {
  try {
      await animalLib.addAnimal(req.body.data);
      res.send("Animal Added Successfully");
  } catch (error) {
      res.status(500).send("Failed to register: " + error.message);
  }
});

app.post('/server/herdsman/getallanimalsofuser', async (req, res) => {
  try {
      const aniamldata = await animalLib.getAllAnimalsOfUser(req.body.email);
      res.send(aniamldata);
  } catch (error) {
      res.status(500).send("Failed to fetch animal data: " + error.message);
  }
});

//userprofile
app.post('/server/herdsman/profile', async (req, res) => {
  try {
      const UserProfile = await userLib.getUserProfile(req.body.email);
      res.send(UserProfile);
  } catch (error) {
      res.status(500).send("Failed to fetch User Profile: " + error.message);
  }
});


//userprofile
app.post('/server/profile/update', async (req, res) => {
  try {
      const UserProfile = await userLib.UpdateUser(req.body.data);
      res.send(UserProfile);
  } catch (error) {
      res.status(500).send("Failed to Update User Profile: " + error.message);
  }
});
