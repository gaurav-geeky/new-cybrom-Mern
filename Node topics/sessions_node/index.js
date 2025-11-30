import express from "express"; 
import session from "express-session"; 
import web from "./routes/web.js";    // web { any name can be }  // "type": "module"



const app = express(); 

app.use(session({
    name: "gauravkey",
    secret: "Iamkey",
    resave: false, 
    saveUninitialized: true, 
    cookie: {maxAge: 200000}
}))




app.use("/", web); 

const port = 4400
app.listen(port, ()=> {
    console.log(`server run on ${port} `); 
})





