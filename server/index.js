const express = require('express');
const db = require('../db/config');
const app = express();
const port = 1337;

app.use(express.static(__dirname + '/../client/build'));
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`The pet shelter is listening at http://localhost:${port}`);
});