var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (products) => Product.insertMany(products),
  updateProductHelper: (id, newProd) => Product.updateOne(newProd, id),
  deleteProductHelper: (id) => Product.deleteOne(id)
};

module.exports = helpers