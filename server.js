const express = require('express')
// const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config({path:'./config/config.env'})
const userRouters = require('./routes/userRoute')
const productRouters = require('./routes/productRoute')
const app = express()

app.use(express.json())
// app.use(bodyparser.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 3000
app.use(userRouters)
app.use(productRouters)

// A FUNCTION TO CONNECT THE SERVER FIRST BEFORE IT STARTS LISTENNING FOR REQUEST
const connectserver = async()=>{
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`Server is listenning for request and running on port ${PORT}`)
    })
}
connectserver() //CALLING THE FUNCTION