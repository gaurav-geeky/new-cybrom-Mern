
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");   // server using socket
const cors = require("cors");
const app = express();

app.use(cors());

const server = http.createServer(app); // express ki help se http server create kia 

// socket io  ka server ,  pass http server as a parameter. 
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST']
    }
}); 

// JAB CONNECTION banega (back & front me) toh  connection event generate hoga. 

io.on("connection", (socket) => {

    // pipe line bichi uski id aa gai
    console.log(`user connected pipe id : ${socket.id}`);

    socket.on("sendMessage", (data) => {  // send_msg event generated from client
        console.log(data); 

        // sabh ko broadcast ho. 
        socket.broadcast.emit("receiveMessage", data); 
    }); 


    socket.on('disconnect', () => {
        console.log("user disconnected : ", socket.id);  
    })
})

const port = 8008; 
server.listen(port, () => {
    console.log(`server runs on http://localhost:${port}`); 
});



