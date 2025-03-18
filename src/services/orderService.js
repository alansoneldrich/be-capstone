const orderDAO = require("../dao/orderDao");
const productDAO = require("../dao/productDao");

class OrderService {
    static async createOrder(customerId, items) {
        if (!customerId || !Array.isArray(items) || items.length === 0) {
            throw new Error("Invalid request: customerId and items are required.");
        }

        let totalCost = 0;
        for (const item of items) {
            const product = await productDAO.getProductById(item.productId);
            if (!product) throw new Error(`Product ${item.productId} not found.`);
            totalCost += product.price * item.quantity;
        }

        const orderId = await orderDAO.insertOrder(customerId, items, totalCost);
        return { orderId, status: "Pending", totalCost };
    }
}

module.exports = OrderService;