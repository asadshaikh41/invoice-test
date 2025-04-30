const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_Number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoice_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoice_DueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoice_Sgst: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_Cgst: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_Amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_Discount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoice_Total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoMobNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoGstIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoPan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoZip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BilltoWhatsappNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currencyAddGst: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,  // Changed from DATE to BOOLEAN (more logical)
      defaultValue: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    timestamps: true,  // Sequelize will auto-manage createdAt/updatedAt
    underscored: true, // Optional: converts fieldName to field_name
    tableName: 'invoice',
  });

  return Invoice;
};