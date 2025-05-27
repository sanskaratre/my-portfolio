const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')


// dotenv config.
dotenv.config();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());


// static file
app.use(express.static(path.join(__dirname, "./client/build" )))

//routs
app.use("/api/v1/portfolio", require('./routs/portfolioRout'));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

//port
const port = process.env.PORT || 8080;

//listen
app.listen( port , () => {
    console.log(`Server is running on port : ${port}`);
    
})
