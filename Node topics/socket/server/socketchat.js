
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");   // server using socket
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect("mongodb://127.0.0.1:27017/socket").then(() => {
    console.log('db connected socket...');
})

app.use(cors());

const server = http.createServer(app); // express ki help se http server create kia 

// SOCKET READY bi directional  
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",  // react app 
        methods: ["GET", "POST"]
    }
});




io.on('connection', (socket) => {

    console.log(`user connected sock id : ${socket.id}`);

    socket.on("send_message", (data) => {
        console.log("Message:", data)
        io.emit("received_message", data);  // broadcast to all clients
    });

    socket.on("disconnect", () => {
        console.log("user disconnected: ", socket.id)
    });

});

const port = process.env.PORT || 8100;

server.listen(port, () => {
    console.log(`server run over http://localhost:${port} `);
})





//http://localhost:5173