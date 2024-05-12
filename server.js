require('dotenv').config();

const express  = require('express')
const path = require('path');
const   connectDB  = require('./config/db');
const app = express()

connectDB();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


const port =  process.env.PORT || 8080

app.listen(port,()=>{

    console.log(`listening on port ${port}`)
})