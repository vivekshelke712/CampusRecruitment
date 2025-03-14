const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")

exports.getAllJobs = asyncHandler(async (req, res) => {
    const result = await Jobs.find()
    res.status(200).json({message:"Jobs Fetch Success",result})
})

exports.AddAllJobs = asyncHandler(async (req, res) => {
    const result = await Jobs.Create()
    res.status(200).json({message:"Jobs Fetch Success",result})
})

exports.getJobs = asyncHandler(async (req, res) => {
    const result = await Jobs.find(id)
    res.status(200).json({message:"Jobs Fetch Success",result})
})