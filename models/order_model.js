const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
    {
        productName: String,
        toAddress: String,
        toCountry: String,
        toCity: String,
        fromAddress: String,
        fromCountry: String,
        fromCity: String,
        weight: Number,
        productValue: Number,
        shippingPrice: Number,
        receiverName: String,
        receiverPhoneNumber: String,
        senderName: String,
        senderPhoneNumber: String,
        date: Date,
        shippingType: String,
        productType: String 
    },
)

const Order = mongoose.model('Order', orderSchema)



module.exports = Order 