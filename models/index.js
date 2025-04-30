// models/index.js
const sequelize = require("../config/database");
const Invoice = require("./invoicemodel")(sequelize);

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Models synced with database");
  } catch (err) {
    console.error("Sync error:", err);
  }
};

module.exports = {
  sequelize,
  Invoice,
  syncModels
};