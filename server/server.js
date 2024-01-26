const express = require('express')
const app = express()

// dotenv package
// you can add this line to dbConfig.js 
require('dotenv').config() // config package to read .env file and set to process.env

const dbConfig = require('./config/dbConfig')



app.listen(8082, ()=>{
    console.log('server is running')
})