// loads express framework
const express = require('express');

const router = express.Router();

const Order = require('../models/orderModel');

// order a custom cake or checkout
router.post('/', async (req, res) => {
    try {
        // Check if this is a checkout order (has customerName) or custom order (has colour/shape)
        if (req.body.customerName) {
            // Checkout order
            const { customerName, email, address, product } = req.body;
            const order = await Order.create({ 
                customerName, 
                email, 
                address, 
                product 
            });
            res.status(200).json(order);
        } else {
            // Custom cake order
            const { itemName, colour, shape } = req.body;
            const order = await Order.create({ itemName, colour, shape });
            res.status(200).json(order);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    const order = await Order.find({}).sort({createdAt: -1});
    res.status(200).json(order);
});


module.exports = router;
