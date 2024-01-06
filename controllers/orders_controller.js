const express = require('express')
const router = express.Router()

const Order = require('../models/order_model.js')
const prices = require('../models/prices_model.js')


router.get('/', async (req,res)=>{
    const orders = await Order.find({})
    const data = {orders: orders}
    res.render('all_orders.ejs', data)
})

router.get('/details/:id', async (req,res)=>{
    const data = {order: await Order.findById(req.params.id), id: req.params.id}
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

router.get('/edit/:id', async (req,res)=>{
    const data = {order: await Order.findById(req.params.id), countries: Object.keys(prices)}
    res.render('edit.ejs', data)
})
router.put('/edit/:id', async (req,res)=>{
    await [req.params.id]    
})

module.exports = router