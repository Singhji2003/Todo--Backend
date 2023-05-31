const mongoose = require('mongoose');
const { Schema } = mongoose;
const DataSchema = new Schema({
 name:{
    type:String
 }
});

module.exports = mongoose.model('data', DataSchema) 