const mongoose = require("mongoose")
const validator = require("validator")

// Database Scheme - collection structure 
const UserSchema = new mongoose.Schema(
    {
        Email: {
            type: String,
            unique: [true, "Email already exists"],
            required: true,
            minlength: 3,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid Email")
                }
            }
        },

        password:

        {

            type: String,
            required: true,
            validate(value) {
                if (!validator.isStrongPassword(value)) {
                    throw new Error("Choose Strong Password, contaning lowercase,upercase,numbers,symbol")
                }
            }

        }
    })


// Database Model  - Collection creating 
const User = new mongoose.model('user', UserSchema);






module.exports = User; 