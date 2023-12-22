const express = require('express')
const router = express.Router()

const orders = require('../models/order_model.js')


router.get('/', (req,res)=>{
    const data = {orders: orders}
    res.render('all_orders.ejs', data)
})

router.get('/details/:id', (req,res)=>{
    const data = {order: orders[req.params.id]}
    res.render(`show.ejs`, data)
})

router.get('/new', (req,res)=>{
    res.render('newOrder.ejs')
})

module.exports = router