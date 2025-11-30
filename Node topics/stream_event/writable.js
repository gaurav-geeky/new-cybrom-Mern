// 29 november 2025  // writable stream..

const fs = require("fs");

// create a writable stream to a file 
const writableStream = fs.createWriteStream("myout.txt"); 

// write data to the stream 
writableStream.write('Hello, '); 
writableStream.write('World'); 
writableStream.write('\nWriting to a Stream is easy!'); 

// end the stream 
writableStream.end(); 

//events for writable streams. 
writableStream.on('finish', () => {
    console.log('All the data has been written to the file.'); 
}); 
writableStream.on("error", (err) => {
    console.log('Error writing to stream : ', err); 
}); 


