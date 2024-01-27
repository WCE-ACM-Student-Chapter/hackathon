const express = require('express')
const router = express.Router();
const User = require('../models/UserModel')

const {signup} = require('../controllers/Auth')

router.post('/signup',signup)
const {imageUpload,videoUpload} = require('../controllers/imageUpload')
// imageUpload,videoUpload,imageReducerUpload   
// API Router 
router.post('/ImageUpload',imageUpload)
router.post('/videoUpload',videoUpload)


module.exports = router;
