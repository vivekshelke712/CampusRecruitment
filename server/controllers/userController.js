const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")

exports.getAllJobs = asyncHandler(async (req, res) => {
    const result = await Jobs.find()
    res.status(200).json({message:"Jobs Fetch Success",result})
})