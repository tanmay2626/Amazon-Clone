import React from 'react'
import Rating from '@mui/material/Rating';
import '../css/Home.css'
import { Button } from '@mui/material';
import { useStateValue } from '../state/StateProvider'

const Product = props => {
  // eslint-disable-next-line no-empty-pattern
  const [{},dispatch] = useStateValue()

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
        <h5>{props.name.slice(0,45)+'...'}</h5>
        <h4>₹{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br/>
        <Rating size='small' className='rating' name="read-only" value={props.rating} precision={0.5} readOnly />
        </h4>
      </div>
     <div className='card-img'>
     <img alt='product-img' src={props.img} />
     </div>
     <div className='card-btn'>
     <Button className='remove-btn' onClick={addToCart} variant="contained" size='small'
        sx={{ color: 'black', textTransform: 'none', backgroundColor: '#FBCB0A' ,
         width: 80+'%' , ":hover":{ backgroundColor: '#FAC213' }  }}>
        Add to Cart</Button>
     </div>
    </div>
  )
}


export default Product