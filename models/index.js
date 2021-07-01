// require mongoose package
const mongoose  = require('mongoose')
// const DrinkSchema = require('./Drink')
require('dotenv').config()

const connect = () => {
  // define my atlas URI
const uri = process.env.ATLAS_URI

// connect mongoose  to atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
const db = mongoose.connection
db.once('open', () => {
  console.log(`⛓ mongoDB connection⛓ : ${db.host}:${db.port}`)
})

db.on('error', err =>{
  console.log(`🔥error🔥\n ${err}`)
})
}


// export a funciton to connect


module.exports = {
  connect,
  Drink: mongoose.model('Drink', require('./Drink.js'))
}