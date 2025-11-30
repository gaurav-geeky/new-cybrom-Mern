const fs = require('fs'); 

// create readable and writable streams; 
const readableStream = fs.createReadStream("input.txt"); 
const writableStream = fs.createWriteStream("newwrite.txt"); 

// pipe the readble stream to the writable stream; 
readableStream.pipe(writableStream);  

// handle completion and error; 
readableStream.on('error', (err) => {
    console.log('Read error : ', err); 
}); 

writableStream.on('error', (err) => {
    console.log('Write Error : ', err); 
}); 

writableStream.on('finish', () => {
    console.log("file completed through pipe."); 
}); 



