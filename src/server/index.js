// Setup empty JS object to act as endpoint for all routes

const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require("express")

// Start up an instance of app
const app = express()

/* Middleware*/
const  bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require("cors");
app.use(Cors())

// Initialize the main project folder
app.use(express.static('dist'));

// Define the port of the project
const port = 8000

// Setup Server
app.listen(port, () => {
    console.log("server is running");
    console.log(`app is running at http://localhost:${port}`);
    
})

const request = require('request');
// get data from the document 
app.post("/api", async (req, res) => {
    const apiKey = process.env.API_KEY
    console.log('from the server',req.body.url);
    console.log('from the server',apiKey);
    request(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.url}&lang=en`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        console.log(body);
        res.send(body)
        
      });
     
   
})
app.get("/", (req, res) => {
    res.sendFile('dist/index.html')
})