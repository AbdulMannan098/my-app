"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = exports.getProductsBySeller = exports.getProduct = exports.updateProduct = exports.createProduct = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createProduct = function createProduct(product) {
  return regeneratorRuntime.async(function createProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:8000/api/create-product', product));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createProduct = createProduct;

var updateProduct = function updateProduct(product, id) {
  return regeneratorRuntime.async(function updateProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].put("http://localhost:8000/api/update-product/".concat(id), product));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.updateProduct = updateProduct;

var getProduct = function getProduct(slug) {
  return regeneratorRuntime.async(function getProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:8000/api/getproduct/".concat(slug)));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getProduct = getProduct;

var getProductsBySeller = function getProductsBySeller(sort, order) {
  return regeneratorRuntime.async(function getProductsBySeller$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('http://localhost:8000/api/seller/allproducts', {
            sort: sort,
            order: order
          }));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getProductsBySeller = getProductsBySeller;

var deleteProduct = function deleteProduct(id) {
  return regeneratorRuntime.async(function deleteProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("http://localhost:8000/api/remove-product/".concat(id)));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.deleteProduct = deleteProduct;