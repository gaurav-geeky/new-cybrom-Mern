
# here no need to npm install any package

1. event is not a method , it is an Event but using . 

2.  event made using object () 

const EventEmitter = require("events"); 
const event = new EventEmitter();


3.  event is listened using   on. 
event.on("window", () => {
    console.log("khidki pe kaun hai ??")
})

4.  event is fired using emit
event.emit("window");





