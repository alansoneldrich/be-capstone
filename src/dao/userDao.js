const { executeQuery } = require("../config/database");

module.exports = {
    async getUsers() {
        const query = `
            SELECT
                U.USER_ID userId,
                U.FIRSTNAME firstName,
                U.LASTNAME lastName,
                U.EMAIL email,
                C.CUSTOMER_ID customerId,
                C.NAME customerName,
                R.ROLE_ID roleId,
                R.NAME roleName
            FROM dbo.[USER] U
            LEFT JOIN dbo.[CUSTOMER_USER_MAP] CU ON U.USER_ID = CU.USER_ID
            LEFT JOIN dbo.[CUSTOMER] C ON C.CUSTOMER_ID = CU.CUSTOMER_ID
            LEFT JOIN dbo.[ROLE] R ON R.ROLE_ID = CU.ROLE_ID
        `;

        try {
            return await executeQuery(query);
        } catch (error) {
            console.error("Error executing query:", error);
            throw error;
        }
    }
};
