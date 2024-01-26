// Purpose: User model for the database
// Author: Vivek
const mongoose = require('mongoose')

// Schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    isAdmin: {
        type:Boolean,
        required: true,
        default: false
    }
})

// Model for the user
const userModel = mongoose.model('users', userSchema)

// Exporting the model
module.exports = userModel