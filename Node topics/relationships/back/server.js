

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const myRoute = require("./route/myRoute"); 
const manyRoute = require("./route/manyRoute"); 

mongoose.connect("mongodb://localhost:27017/relationPractice").then(() => {
    console.log("ok db connected for relationship"); 
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use("/", myRoute);  //  one to one
app.use("/", manyRoute);  // many to many 


app.listen(9999, () => {
    console.log("server is running at 9999");
}); 


