"use strict";

var Product = require('../models/product');

var slugify = require('slugify');

exports.createProduct = function _callee(req, res) {
  var newProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log(req.body);
          req.body.slug = slugify(req.body.title);
          _context.next = 5;
          return regeneratorRuntime.awrap(new Product(req.body).save());

        case 5:
          newProduct = _context.sent;
          res.json(newProduct);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log("Product create error ---->", _context.t0); // res.status(400).send("create Product failed")

          res.status(400).json({
            err: _context.t0.message
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.updateProduct = function _callee2(req, res) {
  var updatedProduct;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (req.body.title) {
            req.body.slug = slugify(req.body.title);
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }).exec());

        case 4:
          updatedProduct = _context2.sent;
          res.json(updatedProduct);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).send(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // if(!req.params.id) return;
// let product = await Product.findByIdAndUpdate(req.params.id, req.body , {new : true})
// .catch((error) => {
//     throw Error(error); 
//     });
//     res.json(product);


exports.getProductsBySeller = function _callee3(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Product.find({}).sort([["createdAt", "desc"]]).exec());

        case 3:
          products = _context3.sent;
          res.json(products);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log("get all Seller Products error", _context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getSingleProduct = function _callee4(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Product.findOne({
            slug: req.params.slug
          }).exec());

        case 3:
          product = _context4.sent;
          res.json(product);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log('Error in getting single product', _context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllProducts = function _callee5(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Product.find({}).exec());

        case 3:
          products = _context5.sent;
          res.json(products);
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log("error in getallProducts ".concat(_context5.t0));
          res.status(401);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteProduct = function _callee6(req, res) {
  var deleteProduct;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Product.findByIdAndDelete({
            _id: req.params.id
          }));

        case 3:
          deleteProduct = _context6.sent;
          res.json(deleteProduct);
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log('Error in deleting the product', _context6.t0);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
};