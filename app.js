require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3500
const signUp = require('./routes/signUpRoute')
const login = require('./routes/loginRoute')
const userData = require('./routes/userDataRoute')

const cors = require('cors')
app.use(cors())

app.use(express.json())

// mongoose.connect(process.env.DB_URL)
// const db = mongoose.connection
// db.on("error", (error)=>{
//     console.log(error)
// })
// db.once("open",()=>{
//     console.log("Connection Established Successfully")
// })

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then( ()=> {
    app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))
})
.catch( (error) => {
    console.log(error)
})

app.get('/',(request,response)=>{
    response.send("It's working...")
})

app.use('/api/v1/signup',signUp)
app.use('/api/v1/login',login)
app.use('/api/v1/userdata',userData)

// app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))