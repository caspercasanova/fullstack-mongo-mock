// Controller here
// complete building out the controller
var Product = require('../db/')

const controller = {
  get: (req, res) => {
    res.status(200).send('This is your get request, modify this file to use your Controller!')
  },
  post: (req, res) => {
    res.status(200).send('This is your post request, modify this file to use your Controller!')
  },
  put: (req, res) => {
    res.status(200).send('This is your put request, modify this file to use your Controller!')
  },
  delete: (req, res) => {
    res.status(200).send('This is your delete request, modify this file to use your Controller!')
  }
}

module.exports = controller