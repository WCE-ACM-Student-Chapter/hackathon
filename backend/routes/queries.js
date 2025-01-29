const express = require('express')
const router = express.Router()
const { raiseQuery, getQueries } = require('../controllers/queries')
router.post('/raiseQuery', raiseQuery)
router.get('/getQueries', getQueries)
module.exports = router