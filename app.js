require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3500
const signUp = require('./routes/signUpRoute')

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", (error)=>{
    console.log(error)
})
db.once("open",()=>{
    console.log("Connection Established Successfully")
})

app.get('/',(request,response)=>{
    response.send("It's working...")
})

app.use('/api/v1/signup',signUp)

app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))