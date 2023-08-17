const mongoose = require("mongoose")
const databaseLink = 'mongodb://127.0.0.1:27017/sandeep'
mongoose.connect(databaseLink,{ useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log("db is connected.")})
.catch((error)=>{
    console.log('Error in connecting to db', error)
})
const database = mongoose.connection

module.exports=database