
const buffer1 = Buffer.alloc(100);
console.log("\n \nbuffer alloc 10 : ");


const buffer2 = Buffer("CybroM");
console.log("buffer2 cybrom : ", buffer2.toString());
// here if toString not apply then in buffer form   87 43 86   like this

const buffer3 = Buffer.from("hello raju bhai");
console.log("buffer3 raju bhai : ", buffer3.toString())
//  toString convert code to text. 

buffer1.write("happy learning with raju bhai.");
const a = buffer1.toString('utf-8');
console.log("a : ", a);

console.log("is buffer buffer : ", Buffer.isBuffer(buffer1)); 

console.log("buffer 1 lenght : ", buffer1.length); 


// copy 
const b1 = new Buffer("this is brazil"); 
let b2 = Buffer.alloc(10); 

b1.copy(b2);  // now b2 has copy of b1 data.
console.log("copy b1 in b2 : ", b2.toString()); 

// string 
const buf1 = new Buffer("node master"); 
const newbuf1 = buf1.slice(1, 6); 
console.log("slicing of buffer : ", newbuf1.toString()); 

//   concate buffers. 
const buf11 = new Buffer("hello "); 
const buf22 = new Buffer("gaurav, how r u."); 
const add = Buffer.concat([buf11, buf22]); 
console.log("concate buf11, buf22 : ", add.toString()); 



console.log("\n  everything perfect \n"); 