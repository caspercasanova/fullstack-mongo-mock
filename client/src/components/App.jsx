import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import AddProductModal from './AddProduct'

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: null,
      count: 0,
      showModal: false,
    }
    this.getProducts = this.getProducts.bind(this)
    this.bidOnProduct = this.bidOnProduct.bind(this)
    this.changeProduct = this.changeProduct.bind(this)
    this.changeModal = this.changeModal.bind(this)
  }

  componentDidMount(){
    this.getProducts()
  }
  getProducts(){
    axios.get('/name/products')
    .then(response => {
      let results = response.data
      this.setState({
        products: results
      }, ()=>console.log(this.state.products))
    })
    .catch(err => console.log(err))
  }
  bidOnProduct(updateObj, _id){
    axios.put(`/name/products/${_id}`, updateObj)
      .then(response => {
        this.getProducts()
        window.alert('Your Bid Was Accepted')
      })
      .catch(err => window.alert('FOR SOME REASON YOUR BID WASNT ACCEPTED'))
  }
  handleAddProduct(product){
    axios.post('/name/products', product)
      .then(response => {
        this.getProducts()
        window.alert('WE HAVE ADDED THE PRODUCT')
      })
      .catch(e => {
        window.alert("Could Not Add A Product")
      })
  }
  changeProduct(index){
    this.setState({
      count: index
    })
  }
  changeModal(modal){
    this.setState({
      [modal]: !this.state.showModal
    })
  }

  render(){

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        {this.state.showModal === true && <AddProductModal handleAddProduct={this.handleAddProduct} changeModal={this.changeModal}/>}
        <button onClick={()=>this.changeModal('showModal')}>ADD PRODUCT</button>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            {this.state.products != null && <ProductViewer bidFunc={this.bidOnProduct} currentProduct={this.state.products[this.state.count]}/>}
          </div>
          <div className="col-md-5 product-list-container">
            {this.state.products != null && <ProductList changeProd={this.changeProduct} products={this.state.products}/>}

          </div>
        </div>
      </div>
    )
  }
}