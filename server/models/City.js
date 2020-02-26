const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const City = mongoose.model('city', citySchema)
console.log(City)

// City.find({}, function(err, city) {
//     console.log(city)
// })

module.exports = City