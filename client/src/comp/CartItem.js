import React from 'react'
import '../css/Cart.css'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { useStateValue } from '../state/StateProvider'

const CartItem = props => {
    // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue()

  const removeFromCart = () =>{
    dispatch({
      type: 'REMOVE_FROM_CART',
      product_id: props.product_id
    })
  }

  return (
    <div className='item-wrap'>
      <div className='item-left'>
        <img alt='product_img' src={props.product_img} />
      </div>
      <div className='item-right'>
      <h3>{props.product_name.slice(0,45)+'...'}</h3>
        <h4>₹{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br/>
        <Rating size='small' name="read-only" value={props.rating} precision={0.5} readOnly />
        </h4>
        <div className='item-remove'>
        <Button className='remove-btn' onClick={removeFromCart} variant="contained" size='small'
        sx={{ color: 'black', textTransform: 'none', backgroundColor: '#FBCB0A' ,
         width: 90+'%' , ":hover":{ backgroundColor: '#FAC213' },
         ["@media (max-width: 480px)"]: {
                      fontSize: 2, marginTop : 2,
                    }, 
           }}>
        Remove from Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem