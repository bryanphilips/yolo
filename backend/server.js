const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
let mongodb_url_local = 'mongodb://localhost/';
let dbName = 'yolodb';
// //docker url
// let mongodb_docker_url = 'mongodb://yolo-mongodb:27020/';
// //connecting to container db mongo-container:27017
// let mongodb_url_atlas = 'mongodb+srv://philips:root@moringa0.0to2jfw.mongodb.net/yollodb?retryWrites=true&w=majority&appName=Moringa0';

// define a url to connect to the database
const MONGODB_URI =  process.env.MONGODB_URI || mongodb_url_local + dbName 
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
})

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())

// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
