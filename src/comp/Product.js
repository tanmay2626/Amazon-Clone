import React from 'react'
import Rating from '@mui/material/Rating';
import '../css/Home.css'

const Product = props => {
  return (
    <div className='card-main'>
      <div className='card-desc'>
        <h5>{props.name.slice(0,45)+'...'}</h5>
        <h4>₹{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br/>
        <Rating  name="read-only" value={props.rating} precision={0.5} readOnly />
        </h4>
      </div>
     <div className='card-img'>
     <img alt='product-img' src={props.img} />
     </div>
    </div>
  )
}


export default Product