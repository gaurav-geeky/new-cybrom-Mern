const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const app = express();
const sessionRoute = require("./route/sessionRoute");  

app.use(express.json());
app.use(require("cors")({
    origin: "http://localhost:5173",
    credentials: true
}));

mongoose.connect("mongodb://127.0.0.1:27017/sessionAuth")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use(session({
    secret: "gaurav-Secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
}));

app.use("/", sessionRoute); 

const port = 5000
app.listen(port, () => {
    console.log(`Server running at http://localhost: ${port} `)
});
