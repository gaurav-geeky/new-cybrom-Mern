const fs = require("fs");

// create a reablde stream
const readableStream = fs.createReadStream("input.txt", "utf8");

// create a writable stream to a file 
const writableStream = fs.createWriteStream("output.txt");

// pipe the data from readable to writable stream.. 
readableStream.pipe(writableStream);

// handle completion and error
writableStream.on("finish", () => {
    console.log('File copy completed');
});

readableStream.on("error", (err) => {
    console.error("error reading file : ", err);
}); 

writableStream.on('error', (err) => {
    console.error("error writing file: ", err);
});




