const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();  

require('dotenv').config()

// Middleware
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000

const ConnectDb = require('./config/database');
ConnectDb()

app.use('/api/v1/', require('./routes/queries'))

app.listen(PORT, () => {
    console.log(`Server Started At PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.json("Here We go")
})