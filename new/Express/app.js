const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.set('view engine','pug');
app.set('views',path.join(__dirname , 'views'));
app.get("/demo", (req,res)=>{
    res.render('demo' , {title:'first pug application' , message:'Hello there man'})
});


app.use('/static',express.static('static'));

app.get("/" , (req,res)=>{
    res.send("this   of my first-express app")
});
app.get("/about" , (req,res)=>{
    res.send("this is About section of my first-express app")
});
app.post("/about" , (req,res)=>{
    res.status(404).send("this is POst request About section of my first-express app")
});

app.listen(port,()=> {
    console.log(`Server running at ${port}`);
  });
  