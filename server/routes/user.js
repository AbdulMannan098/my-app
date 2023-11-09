const express = require("express");
const router = express.Router();

// Controllers Import
const { createCustomer,getCustomers ,loginCustomer, createSeller, loginSeller} = require("../controllers/user");
const {isNotLoggedIn}=require('../middlewares/authcheck')
router.post('/create-customer',createCustomer)
router.get('/get-customers',getCustomers); 

router.post('/customer/login',loginCustomer);
router.post('/seller/login',loginSeller);
router.post('/create-seller',createSeller);
module.exports=router;
