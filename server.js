const express = require('express')
const app = express()

const order_controller = require('./controllers/orders_controller')

app.use('/orders', order_controller)







app.listen(PORT, ()=>{
    console.log("You're are now on port 4000")
})