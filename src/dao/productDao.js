const { executeQuery } = require("../config/database");

module.exports = {
    async getProductById(productId) {
        const query = "SELECT productId, name, price FROM Products WHERE productId = @productId";
        const result = await executeQuery(query, { productId });
        return result.length > 0 ? result[0] : null;
    }
};