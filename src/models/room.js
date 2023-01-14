const mongoose = require("mongoose")

// Database Scheme - collection structure 
const cdSchema = new mongoose.Schema(
    {
       College: {
        type: String,
       },
       State:{
        type:String , 
       },
       District:{
        type: String, 
       }

    })


// Database Model  - Collection creating 
const CD = new mongoose.model('cd', cdSchema);
module.exports = CD; 

