const mongoose = require("mongoose")

// Database Scheme - collection structure 
const cdSchema = new mongoose.Schema(
    {
       College_name : {
        type: String,
       },
       State:{
        type:String , 
       },
       District_name:{
        type: String, 
       }

    })


// Database Model  - Collection creating 
const CD = new mongoose.model('cd', cdSchema);
module.exports = CD; 

