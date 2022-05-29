import React from 'react'
import Rating from '@mui/material/Rating';
import '../css/Home.css'
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../state/StateProvider'

const Product = props => {
  const [{ cart },dispatch] = useStateValue()

  const addToCart = () =>{
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: props.id,
        product_name: props.name,
        price: props.price,
        product_img: props.img,
        rating: props.rating
      }
    })
  }

  return (
    <div className='card-main'>
      <div className='card-desc'>
        <h5>{props.name.slice(0,55)+'...'}</h5>
        <h4>₹{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br/>
        <Rating  name="read-only" value={props.rating} precision={0.5} readOnly />
        </h4>
      <IconButton onClick={addToCart} className='add-btn' sx={{ marginTop: -3 }}>
        <AddShoppingCartIcon sx={{ fontSize:35, color: '#F77E21'  }} />
      </IconButton>
      </div>
     <div className='card-img'>
     <img alt='product-img' src={props.img} />
     </div>
    </div>
  )
}


export default Product