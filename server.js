const express = require('express')
const app = express()
const PORT = 4000

const order_controller = require('./controllers/orders_controller')

app.set('view engine', 'ejs')
app.use('/orders', order_controller)

app.get('/home', (req,res)=>{
    res.render('index.ejs')
})





app.listen(PORT, ()=>{
    console.log("You're are now on port 4000")
})