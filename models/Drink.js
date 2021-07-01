// require the mongoose package
const mongoose = require('mongoose')
// define a mongoose schema
const DrinkSchema = new mongoose.Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  },
    
}, {
  timestamps: true

})
// build a model from the schema or export the schema and build the model in our index.js

module.exports = DrinkSchema

