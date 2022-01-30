//Assynchronous and Synchronous calls or codes in JS 
//Blocking and Non-blocking codes

const fs = require('fs');
let file = fs.readFile('text.txt' , 'utf-8' , /*CALLBACK FUNCTION*/(err,data)=>{console.log(err,data)}) //Asynchronous version of readFileSync() , hence it requires a callback function inside it
console.log("This is message"); // it will get executed first before the above code because we have used non-blocking function above 