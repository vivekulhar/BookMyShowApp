const express = require('express')
var cors = require("cors");
const app = express()
app.use(cors());
// dotenv package
// you can add this line to dbConfig.js 
require('dotenv').config() // config package to read .env file and set to process.env

const dbConfig = require('./config/dbConfig')

const userRoute = require('./routes/userRoute')
const movieRoute = require('./routes/movieRoute')
app.use(express.json())
app.use('/api/users', userRoute)
app.use("/api/users", movieRoute);

app.listen(8082, ()=>{
    console.log('server is running')
})