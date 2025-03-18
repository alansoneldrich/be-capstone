const express = require("express");
const orderService = require("../services/orderService");
const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const { customerId, items } = req.body;
        const order = await orderService.createOrder(customerId, items);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;