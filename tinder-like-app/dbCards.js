const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name: String,
    url: String,
    sex: String,
    address: String,
    age: String,
    hobby: String
})

module.exports = mongoose.model('Card', cardSchema);

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    sex: String,
    address: String,
    age: String,
    description: String
})
module.exports = mongoose.model('User', userSchema);