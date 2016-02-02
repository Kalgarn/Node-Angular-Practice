var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = mongoose.Schema({
   firstname: String,
    lastname: String,
    phone: String,
    address: {
        street: String,
        city: String
    }
    
});

module.exports = mongoose.model('customer', customerSchema);