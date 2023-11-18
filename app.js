const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');
// abhishekPes
// abhi_611676
const app = express()
// app.listen(3000,()=>{console.log('server')})
mongoose.connect(process.env.MONGOurl).then((result)=>{
    console.log('connected')
    app.listen(3000, console.log('server is running on port 3000'))    
}).catch(err=>console.log("error",err))