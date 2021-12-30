var express = require('express');
var router = express.Router();
var Cart = require("../../models/cart");

router.get("/", async (req, res) => { // "/" is the  default route
    let cart = await Cart.find(); // recipes variable getting all data from model
    return res.send(cart); // send data at localhost:4000/api/recipes/
});


module.exports = router;