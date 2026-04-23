require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import product routes
const productRoutes = require('./routes/products');
// import all order routes 
const orderRoutes = require('./routes/order');
// express app
const app = express();


// middleware
// looks for body in any request that comes in, 
// parses it and attaches to req object 
app.use(express.json())

// enable CORS for all routes
app.use(cors());

// acts as a logger
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
// grabs all of the different routes attached to the router 
// and uses them on the app
// relative to the prefix
// ohhh okay, so all the routes defined in productRoutes 
// have to have /products as a url prefix
app.use('/products', productRoutes);
app.use('/order', orderRoutes);

// connetct to db
// asynchronous 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // only listen for request once we have connected to the database
        
        // listen for requests for a certain port number 
        // pulling from .env file
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 3000')
        });
    })
    .catch((error) => {
        console.log(error);
    });
