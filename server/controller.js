// Controller here
// complete building out the controller
var Product = require('../db/')
const helper = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    helper.getProductsHelper()
    .then(products => res.status(200).send(products))
    .catch(err => res.status(400).send(err))
  },
  post: (req, res) => {
    let products = req.body
    console.log(products)
    helper.postProductsHelper()
    .then(() => res.status(200).send('Product Has Been Posted'))
    .catch(err => res.status(400).send(err))
  },
  put: (req, res) => {
    helper.updateProductHelper()
    .then(res.status(200).send('We Succeeded Updated'))
    .catch(err => res.status(400).send(err))
  },
  delete: (req, res) => {


    helper.deleteProductHelper()
    .then(() => res.status(200).send('We Deleted The Shit'))
    .catch(err => res.status(400).send(err))

  }
}

module.exports = controller