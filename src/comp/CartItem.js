import React from 'react'
import '../css/Checkout.css'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { useStateValue } from '../state/StateProvider'

const CartItem = props => {
  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () =>{
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: props.id
    })
  }

  return (
    <div className='item-wrap'>
      <div className='item-left'>
        <img alt='product_img' src={props.img} />
      </div>
      <div className='item-right'>
      <h3>{props.name}</h3>
        <h4>₹{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br/>
        <Rating  name="read-only" value={props.rating} precision={0.5} readOnly />
        </h4>
        <div className='item-remove'>
        <Button className='remove-btn' onClick={removeFromCart} variant="contained" size='small'
        sx={{ color: 'black', textTransform: 'none', backgroundColor: '#FBCB0A' ,
         width: 50+'%' , ":hover":{ backgroundColor: '#FAC213' }  }}>
        Remove from Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem