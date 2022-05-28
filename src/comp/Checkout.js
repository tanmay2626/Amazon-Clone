import React from 'react'
import '../css/Checkout.css'
import { Container } from '@mui/material'
import CartItem from './CartItem'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import items from '../data/cart';

const Checkout = props => {
    const total = 1321
  return (
    <Container className='checkout'>
        <Container className='poster'>
         <img alt='sale_poster' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/April/Home_CB/pc-stripe.jpg' />
        </Container>
        <Container>
        <h2>Your Shopping Cart </h2>
        <div className='checkout-wrap'>
         <div className='checkout-left'>
           {items.map((item,index)=>{
             return (
              <CartItem key={index} name={item.product_name} rating={item.rating} price={item.price} img={item.img_url} />
             )
           })}
         </div>
         <div className='checkout-right'>
           {/* Todo - add total */}
           <h5>Subtotal (N items) : ₹{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
           <FormControlLabel className='checkout-check' control={<Checkbox size='small' color='default' />} label="This order contains a gift" />
           <Button variant="contained" size='small'
            sx={{ color: 'black', textTransform: 'none', backgroundColor: '#FBCB0A', marginTop: 2 }}>
                Proceed to Buy
            </Button>
         </div>
        </div>
        </Container>
    </Container>
  )
}

export default Checkout