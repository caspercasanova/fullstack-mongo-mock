import React from 'react'

export default class AddProductModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curr_bid: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({
      [name]: e.target.valueAsNumber || value
    }, console.log(this.state))
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
      this.props.handleAddProduct(this.state)
      this.props.changeModal('showModal')

  }
  render(){
    return(
      <div className = 'modal'>
        <div>
          <h1>Add Product</h1>
          <form onSubmit={this.handleSubmit}>
            <input name='item' placeholder='Product Name' onChange={this.handleChange}></input>
            <input  onChange={this.handleChange} name='min_cost' placeholder='min cost'></input>
            <input  onChange={this.handleChange} name='ends_in' placeholder='ends in'></input>
            <input  onChange={this.handleChange} name='image' placeholder='imageLink'></input>
            <input type='submit' value='Submit'></input>
          </form>
        </div>
      </div>
    )
  }
}
