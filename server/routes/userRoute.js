// const { register, login, logout } = require('../controllers/authController')

const { getAllJobs } = require('../controllers/userController')

const router = require('express').Router()

router 
    .get("/getJobs", getAllJobs)
 
    
module.exports = router    