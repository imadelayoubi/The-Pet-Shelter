const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost/The-pet-shelter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('database connected')
});


const PetSchema = new mongoose.Schema({

  id: {
    type: Number,
    unique: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;
module.exports = mongoose
