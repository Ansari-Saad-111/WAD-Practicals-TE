const express=require('express');
const app=express();
app.use(express.static('public'));
app.listen(4000,()=>{
console.log("Server Started");
})
const port=4000;