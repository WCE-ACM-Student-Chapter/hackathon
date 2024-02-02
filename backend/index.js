const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

require('dotenv').config()

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000

const ConnectDb = require('./config/database');
ConnectDb()


const Upload = require('./routes/user')
app.use('/api/v1/upload', Upload)

app.listen(PORT, () => {
    console.log(`Server Started At PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.json("Here We go")
})