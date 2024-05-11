const express = require('express');
//crete express app
const app = express();

//add middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// define routes
app.get('/', function(req, res){
    res.json("OK");
});
require('./app/routes/products.routes')(app);
require('./app/routes/stock-operations.routes')(app);
require('./app/routes/sell-operations.routes')(app);


module.exports = app;