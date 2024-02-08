const express = require('express')
var cors = require("cors");


const path = require("path");
__dirname = path.resolve();


const app = express()
app.use(cors());
// dotenv package
// you can add this line to dbConfig.js 
require('dotenv').config() // config package to read .env file and set to process.env

const dbConfig = require('./config/dbConfig')

const userRoute = require('./routes/userRoute')
const movieRoute = require('./routes/movieRoute')
const theatreRoute = require('./routes/theatreRoute')
const bookingRoute = require('./routes/bookingRoute')

const upcomingRoute = require("./routes/upcomingRoute");
app.use(express.json())
app.use('/api/users', userRoute)
app.use("/api/movies", movieRoute);
app.use("/api/theatres", require("./routes/theatreRoute"));
app.use("/api/bookings", require("./routes/bookingRoute"));
app.use("/api/upcoming", upcomingRoute);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(8082, ()=>{
    console.log('server is running')
})