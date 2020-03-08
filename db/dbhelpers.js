var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (products) => Product.insertMany(products),
  updateProductHelper: (newProd, _id) => Product.updateOne( _id, newProd),
  deleteProductHelper: (_id) => Product.deleteOne(_id)
};

module.exports = helpers