const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  name:{type:String, required:true, unique:true},
  location:{type:String, required:true},
  yearEstablished:{type:Number,min:1950, required:true}
});

module.exports = mongoose.model('Publisher', publisherSchema);