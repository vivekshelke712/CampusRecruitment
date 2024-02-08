// const router = require('./authroute')

const { adminJobPost } = require('../controllers/adminController')

const router = require('express').Router()

router
    .post("/jobPost", adminJobPost)
    
module.exports = router    
