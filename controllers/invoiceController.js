
const { Invoice,sequelize} = require("../models");

exports.createInvoice=async(req,res)=>{
  try {
    await Invoice.sync({ force: false }); // force: false prevents dropping existing tables
    const data={...req.body,
      createdBy:"asad"
    }
    const existingInvoice=await Invoice.findOne({where:{invoice_Number:data.invoice_Number}});

   if(existingInvoice){
      return res.status(400).json({
        message:"Invoice Already exist",
        error: `An invoice with number ${data.invoice_Number} already exist`
      })
    }else {
      const result= await Invoice.create(data);
      res.status(200).json({message:"Invoice created successfully",result});  
    }
   } catch (error) {
    res.status(500).json({
      message:"Error Occurred",
      Error:error
    })
  }
};

exports.readallinvoice = async (req, res) => {
  try {

    const results = await Invoice.findAll();
    
    if (!results || results.length === 0) {
      return res.status(200).json({
        message: "No invoices found",
        data: []
      });
    }
    console.log(results)

    res.status(200).json({
      data: results,
      message: "All invoices fetched successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error Occurred",
      Error: error
    });
  }
};


exports.readInvoice=async(req,res)=>{
  try {
    const {invoiceId}=req.params;
    const result=await Invoice.findOne({where:{invoiceId:invoiceId}});
    res.status(200).json({
      message:"fetch one id successfully",data:result
    })
  } catch (error) {
    res.status(500).json({
      message:"Error Occured",
      Error:error
    })
  }
}

exports.updateInvoice=async(req,res)=>{
  try{
    const {invoiceId}=req.params;

    const updatedData=req.body;

    await Invoice.update(updatedData, {
      where: { invoiceId: invoiceId },
    });

    const updatedInvoice = await Invoice.findOne({ where: { invoiceId } });

    if (!updatedInvoice) {
      return res.status(404).json({
        message: "Invoice not found",
      });
    }

    res.status(200).json({
      message:"data updated successfully",updateddata:updatedInvoice
    })
  }catch (error) {
    console.log(error)
    res.status(500).json({
      message:"Error Occured",
      Error:error
    })
  }
}

exports.deleteInvoice=async(req,res)=>{
  try {
    const {invoiceId}=req.params
    const Deletedata=req.body;
    await Invoice.destroy({
      where: { invoiceId: invoiceId },
    });
    if (!Deletedata) {
      res.status(404).json({
        message: "Invoice not found",
      });

    }
    res.status(200).json({
      message:"data Deleted successfully",deleteddata:Deletedata
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message:"Error Occured",
      Error:error
    })
  }
}