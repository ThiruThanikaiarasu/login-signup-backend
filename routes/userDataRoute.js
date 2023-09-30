const express = require('express')
const router = express.Router()
const {userData} = require('../controllers/userDataController')

router.route('/').post(userData)

module.exports = router