const mongoose = require('mongoose')
const queriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    })

module.exports = mongoose.model("Queries", queriesSchema)