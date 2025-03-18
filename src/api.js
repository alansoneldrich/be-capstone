// const createAzureFunctionHandler = require("azure-function-express").createAzureFunctionHandler;
// const express = require("express");

// const app = express();
// app.use(express.json());

// // Import routes
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");

// app.use("/api", userRoutes);
// app.use("/api", productRoutes);

// module.exports = createAzureFunctionHandler(app);

//===

// const createAzureFunctionHandler = require("azure-function-express").createAzureFunctionHandler;
// const express = require("express");

// const app = express();
// app.use(express.json()); // Enable JSON parsing

// // Sample endpoint
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from Azure Function Express!" });
// });

// // Bind Express to Azure Function
// module.exports = createAzureFunctionHandler(app);


//===
const createAzureFunctionHandler = require("azure-function-express").createAzureFunctionHandler;
const express = require("express");

const app = express();
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
// const productRoutes = require("./routes/productRoutes");

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api/products", productRoutes);

// Bind Express to Azure Functions
module.exports = createAzureFunctionHandler(app);