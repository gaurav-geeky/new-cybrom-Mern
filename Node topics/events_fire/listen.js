
// event on file open. 

const fs = require("fs");

const stream = fs.createReadStream("example.txt");

stream.on("open", (fd) => {
  console.log(`File opened with file descriptor: ${fd}`);
});

stream.on("error", (err) => {
  console.log("Error opening file:", err);
});

 