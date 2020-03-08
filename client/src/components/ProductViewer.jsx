import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({
      [name]: value
    }, console.log(this.state))
  }

  handleSubmit(){
    if(this.state.curr_bid < this.props.currentProduct.curr_bid){
      window.alert('You Current Bid is to low! Make some $ First')
    } else {
      this.props.bidFunc(this.state, this.props.currentProduct._id)
    }
  }
  render(){
    return(
      <div className = 'product-viewer'>
        <h1>{this.props.currentProduct.item}</h1>
        <h2>ENDS IN: {this.props.currentProduct.ends_in} DAY(s)</h2>
        <img src={this.props.currentProduct.image} ></img>
        <div>
          <h4>Min Cost {this.props.currentProduct.min_cost}</h4>
          <h4>Current Bid: {this.props.currentProduct.curr_bid}</h4>
        </div>
        <div>
          <label>MAKE A BID</label>
          <input name='curr_bid' onChange={this.handleChange}></input>
        </div>
        <button onClick={()=>this.handleSubmit()}>BID!</button>
      </div>
    )
  }
}

