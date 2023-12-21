const express = require('express')
const router = express.Router()

const orders = require('../models/order_model.js')

router.get('/', (req,res)=>{
    const data = {orders: orders}
    res.render('all_orders.ejs', orders)
})








app.listen(PORT, ()=>{
    console.log("You're are now on port 4000")
})