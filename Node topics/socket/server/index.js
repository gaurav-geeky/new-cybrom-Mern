const express = require("express");
const http = require("http");
const { Server } = require("socket.io");   // server using socket
const cors = require("cors");
const app = express();

app.use(cors());

const server = http.createServer(app); //  server using http add express(); 

// setup socket.IO server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // react app origin. 
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {

    console.log(`User connected : ${socket.id}`);

    socket.on("send_message", (data) => {  // iska emit front me 
        console.log(data);
        // broadcoast to all other clients 
        socket.broadcast.emit("receive_message", data);   // iska on front me
    });


    socket.on('disconnect', () => {
        console.log("User disconnected ", socket.id);
    });
});




const port = 9000;
server.listen(port, () => {
    console.log(`server is runnig on http://localhost:${port}`);
});










