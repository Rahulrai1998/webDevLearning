const fs = require("fs");
let text = fs.readFileSync("text.txt","utf-8");
console.log(text);
text = text.replace("fun","run");
console.log(text);
fs.writeFileSync("text_new.txt",text);
console.log(new_text);
