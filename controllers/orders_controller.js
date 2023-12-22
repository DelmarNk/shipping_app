const express = require('express')
const router = express.Router()

const orders = require('../models/order_model.js')
const prices = require('../models/prices_model.js')


router.get('/', (req,res)=>{
    const data = {orders: orders}
    res.render('all_orders.ejs', data)
})

router.get('/details/:id', (req,res)=>{
    const data = {order: orders[req.params.id], id: req.params.id}
    res.render(`show.ejs`, data)
})

router.get('/new', (req,res)=>{
    res.render('newOrder.ejs')
})

router.post('/', (req, res)=>{
    let shippingPrice = prices[req.body.toCountry][req.body.shippingType][req.body.productType]
    req.body['shippingPrice'] = shippingPrice
    req.body['date'] = new Date

    orders.push(req.body)
    res.redirect('/orders')
})

router.get('/edit/:id', (req,res)=>{
    const data = {order: orders[req.params.id], countries: Object.keys(prices)}
    res.render('edit.ejs', data)
})
router.put('/edit/:id', (req,res)=>{
    [req.params.id]
    
})

module.exports = router