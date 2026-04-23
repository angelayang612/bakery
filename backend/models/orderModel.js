const mongoose = require('mongoose');

// schema object in mongoose
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    // Customer information
    customerName: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    // Product information (for checkout orders)
    product: {
        itemName: String,
        price: Number,
        id: String
    },
    // Custom cake order fields (for custom orders)
    itemName: {
        type: String
    },
    colour: {
        type: String
    },
    shape: {
        type: String,
        enum: ['circle', 'rectangle', 'heart'],
        default: 'circle'
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);
