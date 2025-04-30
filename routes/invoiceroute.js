const express = require("express");
const router = express.Router();
const { createInvoice, readallinvoice, readInvoice, updateInvoice, deleteInvoice } = require("../controllers/invoiceController");

router.post('/create', createInvoice);
router.get('/all',readallinvoice)
router.get('/:invoiceId',readInvoice)
router.put('/:invoiceId',updateInvoice)
router.delete('/:invoiceId',deleteInvoice)
module.exports = router;