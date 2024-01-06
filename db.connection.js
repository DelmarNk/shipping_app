const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MANGODB_CONNECTION)
.then(()=>{
    console.log(`connected to MongoDB`)
})
.catch((error)=>{
    console.log(`failed to connect: ${error}`)
})
.finally(()=>{
    console.log(`promise done`)
})





