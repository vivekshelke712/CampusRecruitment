const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")

exports.adminJobPost = asyncHandler(async(req,res) => {
    const result = await Jobs.create(req.body)
    res.status(200).json({message:"Jobs Added Success",result})
})
