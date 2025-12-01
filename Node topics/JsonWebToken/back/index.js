
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const myRoute = require("./Route/userRoute"); 

mongoose.connect("mongodb://127.0.0.1:27017/myJWTpractice").then(() => {
    console.log('ok mongoDb for JWT connected ..');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", myRoute); 

const port = 9800
app.listen(port, () => {
    console.log(`server run at port ${port}`)
})
