const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
    name: String,
    code: String,
    barCode: String,
    gender: String,
    price: String,
    brand: String,
    model: String,
    size: String
},{
    timeStamps = true
});

module.exports = mongoose.model('shoe',shoeSchema);
