
const express = require("express");
const app = express();
const fs = require("fs");
const bodyparser = require("body-parser")
const status = require("express-status-monitor");
const zlib = require("zlib");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(status());


app.use('/stream', (req, res) => {
    const stream = fs.createReadStream("readme.txt", "utf-8"); 
    stream.on("data", (chunk) =>{
        res.write(chunk); 
    }); 
    stream.on("end", ()=>{
        res.end(); 
    })
})

app.get("/data", (req, res)=>{
    fs.readFile("readme.txt", (err, data) =>{
        if (err) throw err; 
        res.end(data); 
    });
}); 

app.get("/createzip", (req, res) =>{
    fs.createReadStream("readme.txt").pipe(
        zlib
    )
})







app.listen(9000, () => {
    console.log(`server run on 9000 ....`);
})