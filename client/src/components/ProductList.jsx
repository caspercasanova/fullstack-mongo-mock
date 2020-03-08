import React from 'react';
import Products from './Products';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.products.map((product, index) => {
        return <Products key={product._id} imgSrc={product.image} changeProd={props.changeProd} indexNum={index}/>
      })}
    </div>
  )
}

export default ProductList