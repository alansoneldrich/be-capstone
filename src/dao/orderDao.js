const { executeQuery } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    async insertOrder(customerId, items, totalCost) {
        const orderId = `ORD-${uuidv4().split('-')[0]}`;
        await executeQuery(
            "INSERT INTO Orders (orderId, customerId, totalCost, status) VALUES (@orderId, @customerId, @totalCost, 'Pending')",
            { orderId, customerId, totalCost }
        );

        for (const item of items) {
            await executeQuery(
                "INSERT INTO OrderItems (orderId, productId, quantity) VALUES (@orderId, @productId, @quantity)",
                { orderId, productId: item.productId, quantity: item.quantity }
            );
        }
        return orderId;
    }
};