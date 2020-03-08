import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry' onClick={()=>props.changeProd(props.indexNum)}>
      <img src={props.imgSrc} className='listimages'></img>
    </div>
  )
}

export default Products