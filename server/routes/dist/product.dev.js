"use strict";

var express = require("express");

var router = express.Router(); // controllers import

var _require = require("../controllers/product"),
    createProduct = _require.createProduct,
    getProductsBySeller = _require.getProductsBySeller,
    getAllProducts = _require.getAllProducts,
    updateProduct = _require.updateProduct,
    getSingleProduct = _require.getSingleProduct,
    deleteProduct = _require.deleteProduct;

router.post('/create-product', createProduct);
router.put('/update-product/:id', updateProduct);
router.get('/seller/allproducts', getProductsBySeller);
router.get('/get-all-products', getAllProducts);
router.get('/getproduct/:slug', getSingleProduct);
router["delete"]("/remove-product/:id", deleteProduct);
module.exports = router;