import React from 'react'
import '../css/Orders.css'
import Rating from '@mui/material/Rating';

const Order = props => {

  return (
    <div className='item'>
      <div className='item-left'>
        <img alt='product_img' src={props.product_img} />
      </div>
      <div className='item-right'>
      <h3>{props.product_name.slice(0,45)+'...'}</h3>
        <h4>₹{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br/>
        <Rating size='small' name="read-only" value={props.rating} precision={0.5} readOnly />
        </h4>
      </div>
    </div>
  )
}

export default Order