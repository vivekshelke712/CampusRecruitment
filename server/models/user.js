const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    number: {
        type: Number,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        required: true,
        enum:["user","teacher"]
    }

},{
    timestamps:true
})

module.exports = mongoose.model("user",userSchema)