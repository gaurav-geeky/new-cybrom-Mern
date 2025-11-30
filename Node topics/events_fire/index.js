

const EventEmitter = require("events"); 
const event = new EventEmitter();   //  Event Create using Object () .. 


event.on("doorbell", () => {
    console.log("Kaun hai ??")  //  Event Listen using  .on
}); 

event.on("window", () => {
    console.log("khidki pe kaun hai ??")
})


//
event.on("hello", (val) => {
    if(val == "raju") {
        console.log("Hello raju how are you doing ?"); 
    }   
});

event.on("hello", () => {
        console.log("Hello part 2 without parameter ?"); 
});

console.log("hey !")
event.emit("doorbell");  // Event Fire
// event.emit("window");  // Event Fire
// event.emit("hello", "raju");

