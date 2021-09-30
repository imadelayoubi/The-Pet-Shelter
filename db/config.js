const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/The-pet-shelter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('database connected')
});


const PetSchema = new mongoose.Schema({

  petID: {
    type: String,
  },
  petType: {
    type: String,
    required: true
  },
  petName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  imageURL: {
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
// module.exports = mongoose
