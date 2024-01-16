import express from "express"
import dotenv from "dotenv"
const app=express();
dotenv.config();
app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"This is the first joke",
            content:"First Joke"
        },
        {
            id:2,
            title:"This is the second joke",
            content:"Second Joke"
        },
        {
            id:3,
            title:"This is the Third joke",
            content:"Third Joke"
        },
        {
            id:4,
            title:"This is the Forth joke",
            content:"Forth Joke"
        },
        {
            id:5,
            title:"This is the Fifth joke",
            content:"Fifth Joke"
        },
    ]

    res.send(jokes)
})
const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`The server is listening at ${port}`)
})