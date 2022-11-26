import express from 'express';

const app = express();

app.get("/",(req,res)=>{
res.send("hey hey alo what's up")
})

app.listen(3000,()=>{
    console.log("super idol successful");
})