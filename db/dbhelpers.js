var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (products) => Product.insertMany(products),
  updateProductHelper: (id) => Procut.updateOne(),
  deleteProductHelper: (id) => Product.deleteOne()
};

module.exports = helpers