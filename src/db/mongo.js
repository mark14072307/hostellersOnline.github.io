
const mongoose = require("mongoose")

// Connecting to the Database
mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex :true, 
})
    .then(()=> console.log("Connection Successfull..."))
.catch ((err) => console.log((err))) ;






// mongodb://localhost:27017/
