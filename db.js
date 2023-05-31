const mongoose =  require('mongoose')
require('dotenv').config();
const mongooseURL = process.env.URL
const connectToMongo = ()=>{
    if( mongoose.connect(mongooseURL)){
        console.log('Succefully Connected to MongooDB')
    }
    else{
        console.log('Some Error Occured')
    }
}
module.exports = connectToMongo;