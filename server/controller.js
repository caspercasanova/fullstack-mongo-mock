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
    helper.postProductsHelper(products)
    .then((prod) => res.status(200).send(prod))
    .catch(err => res.status(400).send(err))
  },
  put: (req, res) => {
    let _id = req.params
    let updatedProd = req.body
    console.log(_id)
    helper.updateProductHelper(updatedProd, _id)
    .then(res.status(200).send('We Succeeded Updated'))
    .catch(err => res.status(400).send(err))
  },
  delete: (req, res) => {

    let _id = req.params

    helper.deleteProductHelper({_id})
    .then(() => res.status(200).send('We Deleted The Shit'))
    .catch(err => res.status(400).send(err))

  }
}

module.exports = controller