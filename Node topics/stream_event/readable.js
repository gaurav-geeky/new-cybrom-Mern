// 29 november 2025  // readable stream..

const fs = require("fs");

//create a readbale stream from a file 
const readableStream = fs.createReadStream("input.txt", {
    encoding: "utf8", 
    highWaterMark: 64 * 1024   // 64 kb chunks
}); 

// evnet for readable stream.
readableStream.on('data', (chunk) => {
    console.log(`received ${chunk.length} byte of data.`); 
    console.log(`my chunk : ${chunk}`); 
}); 

readableStream.on("end", () => {
    console.log("No more data to read."); 
}); 

readableStream.on("error", (err) => {
    console.error("error reading file : ", err);
});


