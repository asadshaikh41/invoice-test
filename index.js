const express = require("express");
const { sequelize } = require("./config/database.js");
const invoicerouter = require('./routes/invoiceroute');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/invoice', invoicerouter);

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});