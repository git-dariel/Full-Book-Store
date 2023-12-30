const products = require("../products/products");

const getProducts = (req, res) => {
  res.send(products);
};

module.exports = getProducts;
