const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL, { dbName: 'hackathon24' }).then(
        () => {
            console.log("Connected To DB")
        }).catch(
            (err) => {
                console.log("Error in Connection")
                console.log(err.message)
                process.exit(1)
            }
        )

}

module.exports = connectDb