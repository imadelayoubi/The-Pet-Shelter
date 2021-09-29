const express = require('express');
const db = require('../db/config');
const app = express();
const port = 1337;
const Pet = require('../db/config')

app.use(express.static(__dirname + '/../client/build'));
app.use(express.json())


app.get('/getpets', (req, res) => {
  Pet.find()
    .then((cats) => res.send(cats))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Server Error" });
    });
});

app.post('/postpet', (req, res) => {

  Pet.create(req.body).then((data) => {
    console.log('data created', data)
  })


})

app.listen(port, () => {
  console.log(`The pet shelter is listening at http://localhost:${port}`);
});