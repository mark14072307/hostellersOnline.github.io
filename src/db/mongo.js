
const mongoose = require("mongoose")

// Connecting to the Database
mongoose.connect('mongodb+srv://mark:ExB91aGQ0hO3mUzB@cluster0.3hqs5gl.mongodb.net/AICD?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex :true, 
})
    .then(()=> console.log("Connection Successfull..."))
.catch ((err) => console.log((err))) ;






