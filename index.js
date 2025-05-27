// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path')


// // dotenv config.
// dotenv.config();

// //rest object
// const app = express();

// //middleware
// app.use(cors());
// app.use(express.json());


// // static file
// app.use(express.static(path.join(__dirname, './client/build' )))

// //routs
// app.use("/api/v1/portfolio", require('./routs/portfolioRout'));

// app.get('*', function (req, res) {
//   console.log("Fallback route hit");
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// //port
// const port = process.env.PORT || 8080;

// //listen
// app.listen( port , () => {
//     console.log(`Server is running on port : ${port}`);
    
// })


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv config
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, './client/build')));

// API routes
app.use("/api/v1/portfolio", require('./routs/portfolioRout'));

// Fallback route for React (must have '*')
app.get( function (req, res) {
  console.log("Fallback route hit",req);
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

// Port binding
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server is running on port: ${port}`);
});
