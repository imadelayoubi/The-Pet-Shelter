const express = require('express');
const db = require('../db/config');
const app = express();
const port = 1337;
const Pet = require('../db/config')

app.use(express.static(__dirname + '/../client/build'));
app.use(express.json())


app.get('/getpets', (req, res) => {
  Pet.find()
    .then((cats) => res.send(cats)).then(() => {
      console.log('data saved into database')
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Server Error" });
    });
});

app.post('/postpet', (req, res) => {
  Pet.create(req.body).then((data) => {
    console.log('data created', data)
  }).catch(err)
})

app.delete('/deletePet/:_id', (req, res) => {
  console.log(req.params._id)
  Pet.findByIdAndDelete(req.params._id).then((deleted) => {
    console.log(deleted)
  })

})

app.put('/update/:_id', (req, res) => {
  console.log(req.params)
  console.log(req.body)

  Pet.updateOne(req.params, req.body).then((updated) => {
    console.log(updated)

  })
}
)

app.listen(port, () => {
  console.log(`The pet shelter is listening at http://localhost:${port}`);
});