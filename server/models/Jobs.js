const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required:true
    },
    company: {
        type: String,
        required:true
    },
    experience: {
        type: String,
        required:true
    },
     jobDesc: {
        type: String,
        required:true
    },
    salary: {
        type: String,
         required:true
    },
    location: {
        type: String,
        required:true
    },
    skills: {
        type: String,
        required:true
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("jobs",jobSchema)