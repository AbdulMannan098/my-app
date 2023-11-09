const express = require("express");
var router = express.Router();

// controllers import
const { createProduct, getProductsBySeller, getAllProducts, updateProduct, getSingleProduct, deleteProduct } = require("../controllers/product");

router.post('/create-product',createProduct)
router.put('/update-product/:id',updateProduct);
router.get('/seller/allproducts',getProductsBySeller)
router.get('/get-all-products',getAllProducts);
router.get('/getproduct/:slug',getSingleProduct)
router.delete("/remove-product/:id", deleteProduct);

module.exports=router