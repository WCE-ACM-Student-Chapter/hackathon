const express = require('express')
const router = express.Router()
const {imageUpload,videoUpload} = require('../controllers/imageUpload')
const {signup} = require('../controllers/Auth')
router.post('/ImageUpload',imageUpload)
router.post('/videoUpload',videoUpload)
router.post('/signup',signup)
module.exports = router