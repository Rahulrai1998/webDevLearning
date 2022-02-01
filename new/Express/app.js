const express = require('express');
const app = express();
const port = 80;

app.get("/" , (req,res)=>{
    res.send("this is home of my first-express app")
});
app.get("/about" , (req,res)=>{
    res.send("this is About section of my first-express app")
});
app.post("/about" , (req,res)=>{
    res.status(404).send("this is POst request About section of my first-express app")
});

app.listen(port , ()=>{

    console.log(`This app is running on port ${port}`);
});