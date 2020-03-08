var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: () => Product.insertMany(),
  updateProductHelper: (id) => Procut.updateOne(),
  deleteProductHelper: (id) => Product.deleteOne()
};

module.exports = helpers