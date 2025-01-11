import express from 'express';

import { GoogleGenerativeAI } from "@google/generative-ai"

const app = express();


app.set("view engine","ejs")
app.use(express.static("public"))
// app.use(express.static("dist"))
app.get("/",(req,res)=>{
    res.render("index.ejs",{});

})
app.get("/search/:prop",async(req,res)=>{
    // res.send("Hollllalalallalallall")
   
   
    // console.log ("hello")
    // console.log(req.params.prop)
    const genAI = new GoogleGenerativeAI("AIzaSyDieL-Miyg615JvzO4QPLg4yV0tnCZEyqY");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    
    const prompt = req.params.prop;
    
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
res.send(result.response.text());
    
})
app.listen(3000,()=>{
    // console.log ("listening on 3000")
})