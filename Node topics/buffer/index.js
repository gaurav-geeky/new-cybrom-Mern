
// buffer
const buffer1 = Buffer.alloc(100);  // here 10 means how much letters max.
const buffer2 = new Buffer("CYBROM");
const buffer3 = Buffer.from([1, 2, 3, 4]);

console.log("buffer 1 : ", buffer1);
console.log("buffer 2 : ", buffer2);
console.log("buffer 3 : ", buffer3);

console.log("\n \n"); 

// writing data to buffer
buffer1.write("Happy Learning");

// reading data. 
const a = buffer1.toString('utf-8');
console.log("a : ", a);

// check object is buffer or not. 
console.log("\n buffer is buffer ? : ", Buffer.isBuffer(buffer1));

// check buffer length. 
console.log("\n buffer 1 length : ", buffer1.length);

// copy buffer .. 
const bufferSrc = new Buffer("copy ABC");
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString('utf-8');
console.log("\n Data copy : ", Data);

// Slicing data 
const bufferOld = new Buffer('Welcome to Cybrom');
const bufferNew = bufferOld.slice(0, 4);
console.log("\n slice of old to new : ", bufferNew.toString());

// concate two buffers 
const bufferOne = new Buffer("Happy Learning "); 
const bufferTwo = new Buffer("with Cybrom."); 
const bufferThree = Buffer.concat([bufferOne, bufferTwo]); 
console.log("\n concate 1 & 2 : ", bufferThree.toString());

console.log("\n ok everything is perfect ........... \n"); 

