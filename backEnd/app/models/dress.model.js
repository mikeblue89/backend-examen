const mongoose = require('mongoose');

const dressSchema = mongoose.Schema({
    code: String,
    barCode: String,
    price: String,
    brand: String,
    size: String
},{
    timeStamps = true
});

module.exports = mongoose.model('dress', dressSchema);
